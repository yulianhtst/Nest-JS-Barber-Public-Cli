import { Box, Button, getToolbarUtilityClass, } from "@mui/material"

import { LocalizationProvider, StaticDateTimePicker, pickersLayoutClasses } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// getToolbarUtilityClass


const CalendarComponent = ({ dateState }) => {

    return (
        <Box >
            {/* <TextField variant="outlined" label="full name" sx={{ width: '40ch' }} /> */}
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="eu" >
                <StaticDateTimePicker

                    onAccept={dateState}

                    minutesStep={30}
                    ampm={false}
                    

                    slotProps={{
                        day: {},

                        actionBar: {
                            actions: ['today', 'accept']
                        },
                        calendarHeader: {
                            sx: { display: 'none' }
                        }
                    }}
                    orientation="portrait" />
            </LocalizationProvider>
        </Box>
    )
}
export default CalendarComponent