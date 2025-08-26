import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgs from '../../imgs/imgsArray';
import "./Carousel.css";
import Music from "../Music/Music";
import tracksArray from '../Music/mySongs/tracksArray';

import "../Music/music.css";

export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
    };

    return (
        <div >
            {/* className="w-full max-w-xl mx-auto" */}
            <Slider className="SliderImgs" {...settings}>
                {imgs.map((img, index) => (
                    <img src={img} alt={img} key={index} />
                ))}
            </Slider>


            <Slider className="Slider" {...settings}>
                <Music arr={tracksArray} />
                <Music arr={tracksArray} />
                <Music arr={tracksArray} />
            </Slider>
        </div>
    );
}
