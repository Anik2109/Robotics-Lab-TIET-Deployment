import ImageChanger from '../components/Image Changer/ImageChanger'
import AboutSection from '../components/About us/AboutUs'
import Upcomingevents from '../components/Events/event'
import Faculty from '../components/Faculty/faculty'


export default function Home(){

    return <div className="pt-[80px]">
        <ImageChanger />
        <AboutSection />
        <Upcomingevents />
        <Faculty/>

    </div>

}