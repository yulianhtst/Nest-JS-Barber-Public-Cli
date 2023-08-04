"use client"

import Image from "next/image";
import { Box, Container, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import useWindowScreenSize from "@/hooks/useWindowScreenSize";

import image1 from '@/public/images/686034.jpg'
import image2 from '@/public/images/1275604.jpg'
import image3 from '@/public/images/1295802.jpg'

// TODO: Transition Between Slides (OPTIONAL)

export default function CustomSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [width, height] = useWindowScreenSize()
    const images = [image1, image2, image3]

    //TODO     //Вземам го в променлива и го слагам на width на дива 
    //TODO     //Така би трябвало да може да се изчисли колко да се транслейтва 
    //TODO     //Трябва да си обясня как стоя нещата с пререндерирането 
    //TODO     //Кога сме на сървара и кога на браузъра


    //TODO     //Switch to translate3d instead of useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex === images.length - 1) {
                setCurrentIndex(0)
            } else {
                setCurrentIndex(currentIndex + 1);
            }
            console.log(currentIndex);
        }, 9000);

        return () => clearInterval(interval);
    }, [currentIndex]);



    return (
        <Box
            sx={{
                width: { width },
                height: '100%',
                resize: 'horizontal',
            }}
        >
            < Box sx={{
                resize: 'horizontal',
                width: { width },
                height: '100%',
                position: 'relative',
                maxHeight: '100vh',
                overflow: 'clip',
            }}
            >
                < Image
                    priority
                    alt={currentIndex}
                    src={images[currentIndex]}
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundImage: images[currentIndex],
                        objectFit: "contain",
                    }}
                />
                <Button sx={{ position: 'absolute' }}>HELLLLLLLO</Button>
            </Box >
        </ Box>
    );
}