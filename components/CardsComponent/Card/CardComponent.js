import { Box, Typography, Button, Container, Fab } from "@mui/material"

import Image from "next/image"


import { useState } from "react"
import ModalComponent from "../../ModalComponent/ModalComponent"

const CardComponent = (({ barber }) => {


    const [showModal, setShowModal] = useState(false);
    const { _id: id, name, description, workingHours } = barber
    const [regularWorkTime, weekendsWorkTime] = workingHours.split('|')

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
                            width={400}
                            height={400}
                            style={{
                                objectFit: 'cover',
                                maxWidth: '100%',
                            }} src={`/images/${barber._id}.jpg`} alt={`${name}`}
                        />
                    </Box>
                    <Typography
                        sx={{
                            position: 'absolute',
                            gridRow: '1/2',
                            bottom: '0%',
                            paddingLeft: '20px',
                            fontSize: '2.5rem'
                        }}
                    >
                        {name}
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
                                {regularWorkTime}<br />
                                {weekendsWorkTime}<br />
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
                        <h2>{name} </h2>
                        <h4>Barber </h4>
                        <Typography
                            sx={{ flexGrow: 1, mt: '1.4rem' }}
                        >
                            {description}
                        </Typography>
                        <Button onClick={reserveButtonHandler} variant="contained" sx={{ backgroundColor: 'primary', color: 'black' }}
                        >
                            Резервирай сега
                        </Button>
                        {showModal &&
                            <ModalComponent id={id} onClose={() => setShowModal(false)} />
                        }
                    </Box>
                </Box>
            </ Box>
        </Box >
    )
})

export default CardComponent