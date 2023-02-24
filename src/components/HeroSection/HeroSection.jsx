import React from 'react'
import Header from '../Header/Header'
import './HeroSection.css'

import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import { motion } from 'framer-motion'

import NumberCounter from 'number-counter'

const HeroSection = () => {
    const mobile = window.innerWidth <= 768 ? true : false

    const transition = {type :'spring',duration : 3}

  return (
    <div className="hero" id='hero'>
        <div className="blur blur-h"></div>
        <div className="left-h">
            <Header />

            <div className="the-best-ad">
                <motion.div
                initial={{left: mobile ? "150px" : "200px" }}
                whileInView={{left:'8px'}}
                transition={{...transition, type: 'tween'}}
                ></motion.div>
                <span>The Best Fitness Club In Town</span>
            </div>


            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>

                <div>
                    <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>

            <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={140} start={100} delay='4' preFix="+" />
                    </span>
                    <span>Expert Coaches</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={978} start={900} delay='4' preFix="+" />
                    </span>
                    <span>Members Joined</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={50} start={10} delay='4' preFix="+" />

                    </span>
                    <span>Fitness Programs</span>
                </div>
            </div>


            <div className="hero-button">
                <buttons className="btn">Get Started</buttons>
                <buttons className="btn">Learn More</buttons>
            </div>
        </div>

        <div className="right-h">
            <button className='btn'>Join Now</button>

            <motion.div 
            initial={{right : "-1rem"}}
            whileInView={{right : "4rem"}}
            transition={transition}
            className="heart_rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>

            <img src={hero_image} alt="" className='hero_image' />
            <motion.img 
            initial={{right : "11rem"}}
            whileInView={{right : "20rem"}}
            transition={transition}
            src={hero_image_back} alt="" className='hero_image_back' />

            <motion.div
            initial={{right : "37rem"}}
            whileInView={{right : "28rem"}}
            transition={transition}
            className="caloreies">
                <img src={Calories} alt="" />
                <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default HeroSection