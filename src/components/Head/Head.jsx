import './Head.css'
import Music from '../Music/Music';
import React from 'react';
import SwiperCarousel from '../Swiper/Swiper';
import Carousel from '../Carousel/Carousel';
const Head = () => {

    return (
        <div className='Head'>
            {/* <h1>Swiper Carousel : </h1>
            <SwiperCarousel /> */}
            <Carousel />
            {/* <Music /> */}

        </div>
    )
}

export default Head;