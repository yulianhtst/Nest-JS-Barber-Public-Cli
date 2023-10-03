import { API_URL } from '@/constants';
import { Box, Typography } from '@mui/material';
import { red } from '@mui/material/colors';



const WorkingHoursComponent = ({ dates }) => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'black',
                margin: "10rem 0"
            }}
        >
            <Typography
                sx={{
                    textAlign: 'center',
                    padding: '50px 0 0 0',
                    fontSize: '2.5rem',
                    fontFamily: 'Roboto',
                }}
            >
                Working Hours
            </Typography>
            <Box
                sx={{
                    justifyContent: 'center',
                    display: 'flex',
                    gap: '50px',
                    height: '100%',
                    flexWrap: 'wrap',
                    margin: '0 auto'
                }}>


                {/* Tova trqbva dase mapne */}
                {
                    dates?.map((date, index) => {
                        const dateToString = new Date(date).toString();
                        const day = dateToString.slice(0, 3);
                        const currentDay = index
                        if (currentDay > 6) return;
                        return (
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    borderRadius: '90%',
                                    margin: '80px 0',
                                    height: '130px',
                                    width: '130px',
                                    backgroundColor: (day === "Sat" || day === "Sun") ? `${red[900]}` : 'beige',
                                    color: (day === "Sat" || day === "Sun") ? `white` : 'black',
                                    ...(currentDay === 0 && {
                                        ...(day === "Sat" || day === "Sun" ? { border: '5px solid white' } : { border: '5px solid red' })
                                    })
                                }}
                            >
                                <Typography sx={{
                                    fontWeight: 'bold',
                                    fontSize: '1.5rem',
                                    fontFamily: '-apple-system',
                                }}>
                                    {day}
                                </Typography>
                                <Typography sx={{
                                    fontWeight: 'bold',
                                    fontSize: '1.2rem',
                                    fontFamily: '-apple-system',
                                }}>
                                    {(day === "Sat") ? "10:00-16:00" : "09:00-19:00" && (day === "Sun") ? "Closed" : "08:00-20:00"}
                                </Typography>
                            </Box>
                        )
                    })
                }
            </Box>
            <Typography></Typography>
        </Box >
    )
}

export default WorkingHoursComponent

