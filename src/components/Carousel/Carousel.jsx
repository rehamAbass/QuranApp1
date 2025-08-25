import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgs from '../../imgs/imgsArray';
import "./Carousel.css";
export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div >
            {/* className="w-full max-w-xl mx-auto" */}
            <Slider className="Slider" {...settings}>
                {imgs.map((img, index) => (
                    <img src={img} alt={img} key={index} />
                ))}
            </Slider>
        </div>
    );
}
