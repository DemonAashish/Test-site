import React,{useState} from 'react';
import video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';
import {HeroContainer, HeroBg, VideoBg,
   HeroContent,
   HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';


const HeroSection = () => {
    const[hover,setHover]=useState(false)

    const onHover=()=>{
        setHover(!hover)
    }

    return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Virtual Banking Made Easy</HeroH1>
            <HeroP>
                Sign Up for a new accunt today and receive $250
                in credit towards your 
                next payment. 
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                    Get started{hover? <ArrowForward/> :<ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer >
    )
}

export default HeroSection
