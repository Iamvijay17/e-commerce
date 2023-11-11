import React from 'react'
import './Hero.css'
import TopHero from './TopHero'
import HeroSection1 from './HeroPages/HeroSection1'
import HeroSection2 from './HeroPages/HeroSection2'
import Section1 from '../OtherSection/Section1/Section1'

const Hero = () => {

    return (
        <div className=''>
            <TopHero/>

            <HeroSection1/>
            <Section1/>
            <HeroSection2/>
          
        </div>
    )
}

export default Hero
