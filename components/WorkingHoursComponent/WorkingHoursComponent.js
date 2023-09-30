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
            }}
        >
            <Typography
                sx={{
                    textAlign: 'center',
                    p: '50px 0 0 0',
                    fontSize: '2.5rem'
                }}
            >
                Работно време
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
                        const day = dateToString.slice(0, 3); // Adjusted to get the first 3 characters of the day
                        if (index > 6) return;
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
                                    // ...(day === "Sat" && { backgroundColor: 'red' }),
                                    // ...(day === "Sun" && { backgroundColor: 'red' }),
                                    backgroundColor: (day === "Sat" || day === "Sun") ? `${red[900]}` : 'beige',
                                    color: (day === "Sat" || day === "Sun") ? `white` : 'black',
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
                                    {(day === "Sat" || day === "Sun") ? "10:00-16:00" : "09:00-19:00"}
                                </Typography>
                            </Box>
                        )
                    })
                }
                {/* <Box sx={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'black', backgroundColor: 'white', borderRadius: '90%', margin: '80px 0', height: '130px', width: '130px' }}><Typography></Typography></Box> */}
                {/* <Box sx={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'black', backgroundColor: 'white', borderRadius: '90%', margin: '80px 0', height: '130px', width: '130px' }}><Typography></Typography></Box> */}
                {/* <Box sx={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'black', backgroundColor: 'white', borderRadius: '90%', margin: '80px 0', height: '130px', width: '130px' }}><Typography></Typography></Box> */}
                {/* <Box sx={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'black', backgroundColor: 'white', borderRadius: '90%', margin: '80px 0', height: '130px', width: '130px' }}><Typography></Typography></Box> */}
                {/* <Box sx={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'black', backgroundColor: "red", borderRadius: '90%', margin: '80px 0', height: '130px', width: '130px' }}><Typography></Typography></Box> */}
                {/* <Box sx={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'black', backgroundColor: "red", borderRadius: '90%', margin: '80px 0', height: '130px', width: '130px' }}><Typography></Typography></Box> */}
            </Box>
            <Typography></Typography>
        </Box >
    )
}

export default WorkingHoursComponent

