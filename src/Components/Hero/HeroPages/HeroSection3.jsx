import React from 'react'
import { ThirdHeroImg1, ThirdHeroImg2, ThirdHeroImg3 } from './ImgLinks'
import '../Hero.css'

const HeroSection3 = () => {
  return (
    <div className='hero'>
    <swiper-container className="mySwiper" pagination="true" autoplay-delay="2000" effect="fade" pagination-clickable="true" navigation="false" space-between="30"
        loop="true">
        <swiper-slide>{ThirdHeroImg1}</swiper-slide>
        <swiper-slide>{ThirdHeroImg2}</swiper-slide>
        <swiper-slide>{ThirdHeroImg3}</swiper-slide>
        
    </swiper-container>
</div>
  )
}

export default HeroSection3;
