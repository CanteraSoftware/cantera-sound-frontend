import React from 'react';
import { HomeSliderSongOne } from "./HomeSliderSongOne";
import { HomeSliderSongTwo } from "./HomeSliderSongTwo";
import { HomeSliderSongThree } from "./HomeSliderSongThree";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.min.css';

export function HomeSwiperSlider() {
  return (
    <Swiper
      className='HomeSliderSong'
      modules={[Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide><HomeSliderSongOne /></SwiperSlide>
      <SwiperSlide><HomeSliderSongTwo /></SwiperSlide>
      <SwiperSlide><HomeSliderSongThree /></SwiperSlide>
    </Swiper>
  );
}
