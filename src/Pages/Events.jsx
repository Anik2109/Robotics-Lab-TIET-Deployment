import React from 'react';
import Event from '../components/Events/Events';
import Carousel from '../components/Events/Carousel';

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function Events() {
    return ( 
        <>
          {/* <Event/>   */}
          <div className="mt-[200px]">
          
          <Carousel slides={SLIDES} options={OPTIONS} />
          </div>
        </>
     );
}

export default Events;