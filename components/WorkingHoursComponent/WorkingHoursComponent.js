import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import useTemporaryWeekPicker from '@/hooks/useTemporaryWeekPicker';
import { StyledFlexBox } from '../common/StyledFlexBox';


const WorkingHoursComponent = () => {

    const a = useTemporaryWeekPicker()
    console.log(a);

    //ще взема от сървара масив който ще съдържа работните дни

    return (
        <StyledFlexBox
            vertical={true}
            sx={{
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
            <StyledFlexBox
                centered={true}
                sx={{
                    gap: '50px',
                    height: '100%',
                    flexWrap: 'wrap',
                    margin: '0 auto'
                }}>
                <StyledFlexBox
                    vertical={true}
                    centered={true}
                    sx={{
                        color: 'black',
                        backgroundColor: 'white',
                        borderRadius: '90%',
                        margin: '80px 0',
                        height: '130px',
                        width: '130px'
                    }}>
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        fontFamily: '-apple-system'
                    }}>
                        Sun
                    </Typography>
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        fontFamily: '-apple-system'
                    }}>
                        08:30-20:00
                    </Typography>
                </StyledFlexBox>

                {/* Tova trqbva dase mapne */}
                <StyledFlexBox vertical={true} centered={true} sx={{ color: 'black', backgroundColor: 'white', borderRadius: '90%', margin: '80px 0', height: '130px', width: '130px' }}><Typography></Typography></StyledFlexBox>
                <StyledFlexBox vertical={true} centered={true} sx={{ color: 'black', backgroundColor: 'white', borderRadius: '90%', margin: '80px 0', height: '130px', width: '130px' }}><Typography></Typography></StyledFlexBox>
                <StyledFlexBox vertical={true} centered={true} sx={{ color: 'black', backgroundColor: 'white', borderRadius: '90%', margin: '80px 0', height: '130px', width: '130px' }}><Typography></Typography></StyledFlexBox>
                <StyledFlexBox vertical={true} centered={true} sx={{ color: 'black', backgroundColor: 'white', borderRadius: '90%', margin: '80px 0', height: '130px', width: '130px' }}><Typography></Typography></StyledFlexBox>
                <StyledFlexBox vertical={true} centered={true} sx={{ color: 'black', backgroundColor: "red", borderRadius: '90%', margin: '80px 0', height: '130px', width: '130px' }}><Typography></Typography></StyledFlexBox>
                <StyledFlexBox vertical={true} centered={true} sx={{ color: 'black', backgroundColor: "red", borderRadius: '90%', margin: '80px 0', height: '130px', width: '130px' }}><Typography></Typography></StyledFlexBox>
            </StyledFlexBox>
            <Typography></Typography>
        </StyledFlexBox >
    )
}

export default WorkingHoursComponent