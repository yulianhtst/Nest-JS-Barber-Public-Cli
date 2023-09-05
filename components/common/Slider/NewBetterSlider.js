"use client"

import useWindowScreenSize from "@/hooks/useWindowScreenSize";
import useInterval from "@/hooks/useInterval";

import ImageComponent from '../ImageComponent/ImageComponent'

import { Box, Button } from "@mui/material";
import { useEffect, useState, useRef } from "react";

import image1 from '@/public/images/686034.jpg'
import image2 from '@/public/images/1275604.jpg'
import image3 from '@/public/images/1295802.jpg'

import useIntersectionObserver from "@/hooks/useIntersectionObserver";




export default function CustomSlider() {
    console.log('=====================RENDER==================================');
    const [images, setImages] = useState([image1, image2, image3])

    const index = useRef(0)

    const [firstSlide, setFirstSlide] = useState(images[0])
    const [lastSlide, setLastSlide] = useState(images[images.length - 1])

    const [haveTransition, setHaveTransition] = useState(false)

    const [offSet, setOffset] = useState(0)

    const roots = useRef(null);
    const children = useRef(null);


    const [width, height] = useWindowScreenSize()


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
    }, [])
    //Може би трябва да проверяваме индекса всеки път като се смени транзишъна

    useInterval(() => {
        setHaveTransition(true)
        // чекваме дали не минаваме общия размер 
        // function calcOffset() {
        //     return width*
        // }

        // const resized = roots.current.addEventListener('resize', calcOffset)
        setOffset(o => o + width);
        index.current += 1
    }, 8000);

    // useEffect(() => {
    //     setOffset(o => o + width);
    // }, [width])
    //Трябва да измисля начин да сетвам width динамично без да 

    console.log(children.current);


    useEffect(() => {
        const checkIndex = () => {
            setHaveTransition(false)
            if (index.current === -1) {
                setOffset(children.current * width)
                index.current = children.current - 1
            }
            if (index.current === images.length) {
                index.current = 0
                setOffset(width)
            }
        }
        //Dobre e tozi event listnenr da se premeti na parenta na elementite 
        const transitionend = roots.current.addEventListener('transitionend', checkIndex)
        return () => {
            removeEventListener('transitionend', transitionend)
        }
    }, []);

    console.log(offSet);
    return (
        <Box
            ref={roots}
            sx={{
                ...(haveTransition && { transition: ' left .8s ease-out' }),
                display: 'flex',
                position: 'relative',
                overflow: 'hidden',
                width: `${children.current * width}px`,
                height: `85vh`,




                //tuka e problema
                left: `-${width + offSet}px`,
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

//   Слайдъра работи по следния начин.
//   Има две снимки клониран [първата и последната]
//   Снимките които се въртят стоят между копията
//   Като стигнем до последната снимка която е клонирана от първата. Сменяме клонираната с първата
