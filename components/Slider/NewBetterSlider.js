"use client"

import useWindowScreenSize from "@/hooks/useWindowScreenSize";
import useInterval from "@/hooks/useInterval";

import ImageComponent from './ImageComponent/ImageComponent'

import { Box, Button } from "@mui/material";
import { useEffect, useState, useRef } from "react";

import image1 from '@/public/images/686034.jpg'
import image2 from '@/public/images/1275604.jpg'
import image3 from '@/public/images/1295802.jpg'


const images = [image1, image2, image3]


export default function CustomSlider() {
    console.log('=====================RENDER==================================');
    const [haveTransition, setHaveTransition] = useState(false)
    const [index, setIndex] = useState(0)
    const [width, height] = useWindowScreenSize()


    // const lastSlide = images[images.length - 1]
    
    
    const sliderBox = useRef(null);
    const sliderBoxChildren = useRef(null);
    
    
    
    const firstSlide = images[0]
    // console.log(haveTransition);

    useEffect(() => {
        const lastIndex = images.length - 1
        if (index < 0) {
            setHaveTransition(false)
            setIndex(lastIndex)
        }
        if (index > lastIndex + 1) {
            setHaveTransition(false)
            setIndex(0)
        }
    }, [index])

    useEffect(() => {
        const slider = setTimeout(() => {
            setHaveTransition(true)

            setIndex(index + 1)
        }, 2000);

        return () => clearTimeout(slider)
    }, [index])



    useEffect(() => {
        // if (sliderBox.current) {
        //     sliderBoxChildren.current = sliderBox.current.children.length
        // }
        sliderBoxChildren.current = sliderBox.current?.children.length;
    }, [])

    return (
        <Box

            // children
            ref={sliderBox}
            sx={{
                // ":only-child"
                ...(haveTransition && { transition: ' left .8s ease-out' }),
                display: 'flex',
                position: 'relative',
                overflow: 'hidden',

                width: `${sliderBoxChildren.current * width}px`,
                height: '850px',

                left: `-${width * index}px`,
            }}
        >


            {/* < ImageComponent index={index} width={width} image={lastSlide} /> */}

            {
                images.map((image, index) => (
                    < ImageComponent index={index} key={index} width={width} image={image} />
                ))
            }
            < ImageComponent index={index} width={width} image={firstSlide} />
        </ Box >
    );
}
