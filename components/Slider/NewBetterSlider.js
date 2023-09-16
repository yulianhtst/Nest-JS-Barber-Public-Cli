"use client"

import useWindowScreenSize from "@/hooks/useWindowScreenSize";
import useInterval from "@/hooks/useInterval";

import ImageComponent from './ImageComponent/ImageComponent'

import { Box, Button } from "@mui/material";
import { useEffect, useState, useRef } from "react";

import image1 from '@/public/images/686034.jpg'
import image2 from '@/public/images/1275604.jpg'
import image3 from '@/public/images/1295802.jpg'

import useIntersectionObserver from "@/hooks/useIntersectionObserver";




export default function CustomSlider() {
    // const worker = new Worker(/)

    console.log('=====================RENDER==================================');
    const [images, setImages] = useState([image1, image2, image3])
    const [haveTransition, setHaveTransition] = useState(false)
    const [index, setIndex] = useState(0)


    const firstSlide = images[0]
    const lastSlide = images[images.length - 1]


    // const index = useRef(0)
    const roots = useRef(null);
    const children = useRef(null);


    const [width, height] = useWindowScreenSize()


    const checkIndex = () => {
        // setHaveTransition(false)

        // if (index.current === images.length) {
        //     console.log(index.current, 'inside if ');
        //     index.current = 0
        // }


    }

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
        console.log(index);

    useEffect(() => {
        const slider = setInterval(() => {
            setHaveTransition(true)

            setIndex(index + 1)
        }, 5000);

        return () => clearInterval(slider)
    }, [index])


    // const cbRef = useIntersectionObserver({ threshold: 0, root: roots.current }, (entries) => {
    //     entries.forEach((entry) => {
    //         console.log(entry);
    //         if (entry.isIntersecting) {
    //         }
    //     })
    // })
    // const { leftOffset } = useOffset(roots)
    // console.log(leftOffset);


    useEffect(() => {
        if (roots.current) {
            children.current = roots.current.children.length
        }
        const audio = new AudioContext()
        console.log(audio);
    }, [])

    // useInterval(() => {
    //     setHaveTransition(true)

    //     index.current++
    // }, 8000);


    // console.log(children.current);



    useEffect(() => {
        const transitionend = roots.current.addEventListener('transitionend', checkIndex)
        return () => {
            removeEventListener('transitionend', transitionend)
        }
    }, []);

    return (
        <Box
            ref={roots}
            sx={{
                ...(haveTransition && { transition: ' left .8s ease-out' }),
                display: 'flex',
                position: 'relative',
                overflow: 'hidden',
                width: `${children.current * width}px`,
                height: '850px',

                // left: `-${width * index.current}px`,
                left: `-${width * index}px`,

            }}
        >


            < ImageComponent index={index} width={width} image={lastSlide} />

            {
                images.map((image, index) => (
                    < ImageComponent index={index} key={index} width={width} image={image} />
                ))
            }

            < ImageComponent index={index} width={width} image={firstSlide} />
        </ Box >
    );
}
