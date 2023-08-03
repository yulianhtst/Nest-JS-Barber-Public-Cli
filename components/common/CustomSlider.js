import Image from "next/image";
import { Box, Container } from "@mui/material";
import { useEffect, useRef, useState } from "react";
// import image1 from '@/public/images/480019.jpg'
import image1 from '@/public/images/686034.jpg'
import image2 from '@/public/images/1275604.jpg'
import image3 from '@/public/images/1295802.jpg'
import { startTransition } from "react";


export default function StepperMUI() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const images = [image1, image2, image3]

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex === images.length - 1) {
                setCurrentIndex(0)
            } else {
                setCurrentIndex(currentIndex + 1);
            }
            console.log(currentIndex);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);




    return (
        <Box Box
            sx={{
                width: '100%',
                height: '100%',
                margin: '0 auto',
                maxHeight: '110vh',
                overflow: 'clip',
            }
            }
        >
            {/* Имам чувстовото че тези два бокса имат конфликт и няма нужда от двата */}
            <Box sx={{
                height: '100%',
                position: 'relative',
                maxHeight: '100vh',
            }}>
                <Image
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
            </Box>
        </Box>
    );
}