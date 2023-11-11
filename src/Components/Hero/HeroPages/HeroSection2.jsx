import React from 'react'
import {downHeroImg1, downHeroImg2, downHeroImg3, downHeroImg4} from './ImgLinks'
import '../Hero.css'

const HeroSection2 = () => {
  return (
    <div className='hero'>
    <swiper-container className="mySwiper" pagination="true" autoplay-delay="2000" effect="fade" pagination-clickable="true" navigation="false" space-between="30"
        loop="true">
        <swiper-slide>{downHeroImg1}</swiper-slide>
        <swiper-slide>{downHeroImg2}</swiper-slide>
        <swiper-slide>{downHeroImg3}</swiper-slide>
        <swiper-slide>{downHeroImg4}</swiper-slide>
    </swiper-container>
</div>
  )
}

export default HeroSection2
