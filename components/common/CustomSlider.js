"use client"

import useWindowScreenSize from "@/hooks/useWindowScreenSize";
import { Box, Container, Button } from "@mui/material";
import { useEffect, useMemo, useState, useRef } from "react";
import Image from "next/image";

import image1 from '@/public/images/686034.jpg'
import image2 from '@/public/images/1275604.jpg'
import image3 from '@/public/images/1295802.jpg'
const images = [image1, image2, image3]


function calcOverallWidth(count, width) {
    return (count * width) + 'px'
}


// Vliza CurrentWidth 0 | 0 * n = 0
function calcTranslate(currentWidth, currentCount) {
    return (currentCount * currentWidth) + 'px'
}
const timeout = 4000

export default function CustomSlider() {
    console.log('=====================RENDER==================================');
    const [width, height] = useWindowScreenSize()
    const [count, setCount] = useState(0)
    const [prevIndex, setPrevIndex] = useState()

    const reff = useRef(null)



    console.log('Number ot times slided ', count);
    console.log(width, 'W', height, 'H');
    console.log(calcTranslate(count, width), 'FX');


    const overallWidth = calcOverallWidth(images.length, width)//Use Memo maybe ?

    // reff.current.style.transform = `translate3d(-${calcTranslate(count, width)}, 0px, 0px)`



    //Tuka ne se dobavqt. Tova moje bi e zaradi useRef ne triggerva reRender Trqbva da se izmisli kak da ne se izpolzva
    useEffect(() => {
        reff.current.style.transform = `translate3d(-${calcTranslate(count, width)}, 0px, 0px)`

        const interval = setInterval(() => {
            console.log('timer Mounted');
            if (count < images.length) {
                setPrevIndex(count)
                setCount(count => (count + 1) % images.length)
            } else if (count == images.length - 1) {
                setCount(0)
            }
            // reff.current.style.transform = ''
        }, 4000);
        return () => clearInterval(interval);
    });

    return (
        <Box
            ref={reff}
            sx={{
                position: 'absolute',
                display: "flex",
                width: overallWidth,
                height: '100%',
                // transform: `translate3d(-${calcTranslate(count, width)}, 0px, 0px)`,
                transition: `transform ${timeout / 1000}s ease-in-out`,

            }}
        >
            {
                images.map((image, index) => (
                    < Box
                        //Кий-а трябва да се промени
                        //Пир фечване снимката ще си има ид което ше се използва
                        key={index}
                        sx={{
                            width: { width },
                            height: '100%',
                            position: 'relative',
                            maxHeight: '100vh',
                            overflow: 'hidden',
                        }}
                    >
                        < Image
                            // className=''//nqkuv class
                            id={index}
                            priority
                            alt={0}
                            src={image}
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundImage: images[0],
                                // objectFit: "contain",
                            }}
                        />
                    </Box >
                )

                )

            }

        </ Box >
    );
}




// Carousel that changes pictures but does not have slide effect

// export default function Carousel() {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const [width, height] = useWindowScreenSize()
//     const images = [image1, image2, image3]

//     useEffect(() => {
//         // Function to continuously update the currentImageIndex
//         const rollCarousel = () => {
//             setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//         };

//         // Call the `rollCarousel` function at a regular interval to create the continuous effect
//         const intervalId = setInterval(rollCarousel, 3000); // Change the time interval as needed (e.g., 3000ms = 3 seconds)

//         // Clean up the interval when the component is unmounted
//         return () => clearInterval(intervalId);
//     }, [images.length]);

//     return (
//         <Box
//             sx={{
//                 width: { width },
//                 height: '100%',
//                 position: 'relative',
//                 maxHeight: '100vh',
//                 overflow: 'hidden',
//             }}
//         >
//             <Image
//                 priority
//                 alt={0}
//                 src={images[currentImageIndex]} // Use the currentImageIndex to display the current image
//                 style={{
//                     // position: 'absolute',
//                     width: '100%',
//                     height: '100%',
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     backgroundImage: images[currentImageIndex], // Set the first image as the background (not sure if this is necessary)
//                     // objectFit: "contain",
//                 }}
//             />
//             <Button sx={{ position: 'absolute' }}>HELLLLLLLO</Button>
//         </Box>
//     );
// };

