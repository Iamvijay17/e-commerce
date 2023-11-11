import React from 'react'
import {heroImg1, heroImg2, heroImg3, heroImg4, heroImg5, heroImg6 } from './ImgLinks'
import '../Hero.css'

const HeroSection1 = () => {
  return (
    <div className='hero'>
    <swiper-container className="mySwiper" pagination="true" autoplay-delay="2000" effect="fade" pagination-clickable="true" navigation="false" space-between="30"
        loop="true">
        <swiper-slide>{heroImg1}</swiper-slide>
        <swiper-slide>{heroImg2}</swiper-slide>
        <swiper-slide>{heroImg3}</swiper-slide>
        <swiper-slide>{heroImg4}</swiper-slide>
        <swiper-slide>{heroImg5}</swiper-slide>
        <swiper-slide>{heroImg6}</swiper-slide>
    </swiper-container>
</div>
  )
}

export default HeroSection1
