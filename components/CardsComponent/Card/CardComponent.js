import { Box, Typography, Button, Container, Fab } from "@mui/material"
import img1 from '@/images/qualities-of-a-highly-professional-barber.jpg'
import img2 from '@/images/00CelebrityBarbers-lede-try-btcf-videoSixteenByNine3000.jpg'
import img3 from '@/images/Untitled.jpg'
import Image from "next/image"
import useWindowScreenSize from "@/hooks/useWindowScreenSize"


import { forwardRef, useRef, useState } from "react"
import ModalComponent from "../../ModalComponent/ModalComponent"

const CardComponent = (() => {
    const [showModal, setShowModal] = useState(false);

    const reserveButtonHandler = (e) => {
        setShowModal(true)
        console.log(e.target)
    }

    return (
        <Box
            sx={{
                width: '400px',
                height: '600px',
                position: "relative",
                margin: ' 0 9px',
                '&:hover': {
                    '>*': {
                        transform: 'rotateY(180deg)',
                    }
                },
                '>*': {
                    transition: '2s',
                    transformStyle: 'preserve-3d',
                }
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                }}
            >

                <Box
                    sx={{
                        display: 'grid',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        gridTemplateColumns: "1fr 1fr",
                        gridTemplateRows: 'repeat(3,1fr)',
                    }}
                >

                    <Box sx={{
                        gridColumn: '1/3',
                    }}>
                        <Image
                            style={{
                                objectFit: 'cover',
                                maxWidth: '100%',
                                height: '400px',
                            }} src={img1} alt={'barber1'} />
                    </Box>
                    <Typography
                        sx={{
                            position: 'absolute',
                            gridRow: '1/2',
                            bottom: '0%',
                            paddingLeft: '20px',
                            fontSize: '2.5rem'
                        }}>
                        Name
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: 'black',
                            gridRow: "2/ span 2",
                            padding: '20px',
                            gridColumn: '1 /span 2',
                        }}>
                        <Typography>
                            Работно време:
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',

                                flexGrow: 2,
                                justifyContent: 'space-between'
                            }} >

                            <Typography
                                sx={{
                                    flexGrow: 1,
                                    borderRight: '3px solid hsl(0 0% 80% )',
                                    padding: '20px 0',
                                }}>
                                Понеделник-Петък <br />
                                Събота<br />
                                Неделя<br />
                            </Typography>
                            <Typography
                                sx={{
                                    flexGrow: 1,
                                    padding: '20px 0',
                                    textAlign: 'center'
                                }}>
                                08:30 - 20:00<br />
                                10:30 - 18:00<br />
                                Почивен<br />
                            </Typography>
                        </Box>
                    </Box>

                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'absolute',
                        backgroundColor: 'black',
                        width: '100%',
                        height: '100%',
                        transform: 'rotateY(180deg)',
                        backfaceVisibility: 'hidden',
                        padding: '40px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            height: '100%',
                        }}>
                        <h2>Самуил Бръснар </h2>
                        <Typography
                            sx={{ flexGrow: 1 }}
                        >
                            Здравейте, аз съм Самуил - вашият бръснар със страст и опит. Горд съм да предоставя най-добрите услуги за грижа за външния ви вид. Вярвам в индивидуалния стил и внимание към всеки клиент. Очаквам с нетърпение да ви посрещна и да ви предоставя уникално бръснене и стрижка, които заслужавате.
                        </Typography>
                        <Button onClick={reserveButtonHandler} variant="contained" sx={{ backgroundColor: 'primary', color: 'black' }}
                        >
                            Резервирай сега
                        </Button>
                        {showModal &&
                            <ModalComponent onClose={() => setShowModal(false)} />
                        }
                    </Box>
                </Box>
            </ Box>
        </Box >
    )
})

export default CardComponent