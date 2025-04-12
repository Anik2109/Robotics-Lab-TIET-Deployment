import React, { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import eventsData from '../../Data/eventsData.json'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './Arrow'
import useScrollFadeIn from '../../Hooks/Scroll';

const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

const Carousel = (props) => {
  const { options } = props
  const fadeRef = useScrollFadeIn();
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, containScroll: "trimSnaps" })
  const tweenFactor = useRef(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const autoplayRef = useRef(null)

  const startAutoplay = () => {
    stopAutoplay()
    autoplayRef.current = setInterval(() => {
      if (emblaApi && emblaApi.canScrollNext()) {
        emblaApi.scrollNext()
      } else if (emblaApi) {
        emblaApi.scrollTo(0)
      }
    }, 3000)
  }

  const stopAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)
  }


  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenOpacity = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
        const opacity = numberWithinRange(tweenValue, 0, 1).toString()
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)
    setIsLoaded(true)
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity)

    startAutoplay()
    return () => stopAutoplay()
  }, [emblaApi, tweenOpacity])

  return (
    <div ref={fadeRef} className=" mb-20 mx-auto w-full relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y ml-[-100px]">
          {eventsData.map((event, index) => (
            <div
              className={`group flex-none w-[70%] min-w-0 pl-8`}
              key={event.id}
            >
              <img
                className="w-full h-[400px] object-cover"
                src={event.image}
                alt={event.title}
              />
              <div className="pt-8">
                <div className="w-full justify-center text-center text-[#031F59] text-[22px] font-medium font-['Poppins']">{event.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-full flex justify-between px-4 -translate-y-1/2 pointer-events-none">
        <PrevButton
          onClick={() => { onPrevButtonClick(); startAutoplay(); }}
          disabled={prevBtnDisabled}
          className={`pointer-events-auto inline-flex items-center justify-center w-14 h-14 border-0 p-0 m-0 cursor-pointer appearance-none touch-manipulation z-[10] ${prevBtnDisabled ? 'text-gray-400' : ''}`}
        />
        <NextButton
          onClick={() => { onNextButtonClick(); startAutoplay(); }}
          disabled={nextBtnDisabled}
          className={`pointer-events-auto inline-flex items-center justify-center w-14 h-14 border-0 p-0 m-0 cursor-pointer appearance-none touch-manipulation z-[10] ${nextBtnDisabled ? 'text-gray-400' : ''}`}
        />
      </div>

    </div>
  )
}

export default Carousel
