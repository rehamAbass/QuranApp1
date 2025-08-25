import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Swiper.css";
import imgs from '../../imgs/imgsArray';

export default function SwiperCarousel() {
    return (
        <Swiper slidesPerView={1} forceCenteredSlides={true} loop={true}
            className="mySwiper SwiperCarousel"
            style={{ backgroundColor: 'wheat' }}
            autoplay={{ delay: 2500 }} spaceBetween={30}>

            {imgs.map((img, index) => (
                <SwiperSlide key={index}>
                    <img src={img} alt={`img`} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
