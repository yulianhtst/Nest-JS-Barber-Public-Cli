import { Box, Button, TextField, Typography } from "@mui/material"
import dayjs, { Dayjs } from "dayjs";

import CalendarComponent from "./CalendarComponent/CalendarComponent"

import ReactModal from "react-modal"
import { useState } from "react"
import FormInputField from "./FormInputField/FormInputField";
import { makeBooking } from "@/services/bookingService";


const ModalComponent = ({ onClose }) => {
    const [date, setDate] = useState(dayjs("11-09-2023"))
    const [form, setForm] = useState({
        name: '',
        email: '',
        number: '',
        services: '',
    })
    const [step, setStep] = useState(1)
    const [btnMsg, setBtnMsg] = useState(false)

    const [warningMessage, setWarningMessage] = useState({ error: true })

    const onDatePickHandler = (e) => {
        // setDate(e?.$d)
        setDate(new Date(e))
        setStep(step => step + 1)
        // ?? dayjs("21-09-2023").$d
    }

    const onChangeHandler = (e) => {

        // console.log(e.target);
        const { name, value } = e.target;

        setForm(state => ({
            ...state,
            [name]: value.trim()
        }))
        // console.log(form);
    }
    const onNextClickHandler = (e) => {
        !warningMessage.error ? setStep(state => state + 1) : setBtnMsg(true)


    }

    const onBlurHandler = (e) => {
        const pattern = new RegExp(e.target.pattern);
        const { name, value } = e.target


        if (name === 'number') {
            const isFilled = !!value
            const isNumeric = !isNaN(value)

            setWarningMessage(state => ({
                ...state,
                [name]: {
                    hasError: !isNumeric || !isFilled,
                    errorMessage: isNumeric ? null : 'Input cannot be empty and must be numeric'
                },
                error: !isNumeric || !isFilled
            }))
            return
        }
        if (name === 'email' || name === 'name') {
            const isFilled = !!value
            const matches = pattern.test(value)
            setWarningMessage(state => ({
                ...state,
                [name]: {
                    hasError: !matches || !isFilled,
                    errorMessage: matches ? null : 'Invalid format'
                },
                error: !matches || !isFilled
            }))
            return
        }


    }
    const onComfirmHandler = () => {
        const data = {
            ...form,
            date
        }
        makeBooking(data)
        onClose()
    }

    return (
        <ReactModal
            isOpen={onClose}
            style={{
                overlay: {
                    zIndex: '100',
                },
                content: {
                    display: 'flex',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: 'min-content',
                    height: 'min-content',
                    transform: 'translate(-50%,-50% )',
                    borderRadius: '3%',
                }

            }} >
            {
                (() => {
                    switch (step) {
                        case 1:
                            return (
                                <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', p: '40px', gap: '30px' }}>
                                    <FormInputField required name="name" onBlurCallBackFunction={onBlurHandler} onChangeCallBackFunction={onChangeHandler} warningMessage={warningMessage} pattern={'^[^0-9]*$'} />
                                    <FormInputField required name="email" onBlurCallBackFunction={onBlurHandler} onChangeCallBackFunction={onChangeHandler} warningMessage={warningMessage} pattern={'([a-zA-Z0-9]+)@([a-zA-Z]+)\\.([a-zA-Z]+)'} />
                                    <FormInputField required name="number" onBlurCallBackFunction={onBlurHandler} onChangeCallBackFunction={onChangeHandler} warningMessage={warningMessage} />
                                    <FormInputField name="services" onBlurCallBackFunction={onBlurHandler} onChangeCallBackFunction={onChangeHandler} warningMessage={warningMessage} />
                                    <Box>
                                        <Button variant="contained" onClick={onClose}> Back</Button>
                                        <Button sx={{ m: '0 10px' }} variant="contained" onClick={onNextClickHandler}>Next</Button>
                                        {btnMsg && <Typography color="red">Please make sure to fill the fields</Typography>}
                                    </Box>
                                </Box>
                            )
                        case 2: return (
                            < CalendarComponent dateState={onDatePickHandler} />
                        );
                        case 3: return (
                            <Box>
                                <ul>
                                    <Typography sx={{ color: 'black', width: '40ch' }}><span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Name:</span>{form.name}</Typography>
                                    <Typography sx={{ color: 'black', width: '40ch' }}><span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Email:</span> {form.email}</Typography>
                                    <Typography sx={{ color: 'black', width: '40ch' }}><span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Number: </span>{form.number}</Typography>
                                    <Typography sx={{ color: 'black', width: '40ch' }}><span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Services: </span>{form.services}</Typography>
                                    <Typography sx={{ color: 'black', width: '40ch' }}><span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Date:</span> {date ? date.toString().slice(0, 10) : 'N/A'}</Typography>
                                    <Typography sx={{ color: 'black', width: '40ch' }}><span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Time: </span>{date ? date.toString().slice(16, 21) : 'N/A'}</Typography>
                                </ul>
                                <Box sx={{ display: 'flex' }}>
                                    <Button variant='contained' onClick={onClose} sx={{ m: '40px auto 0', }}>Back</Button>
                                    {/* Can be created popUp for successful booking */}
                                    <Button variant='contained' onClick={onComfirmHandler} sx={{ m: '40px auto 0', }}>Comfirm</Button>
                                </Box>
                            </Box>
                            // <ComfirmComponent />
                        )
                    }
                })()
            }




            {/* {!isNameWrong && !isEmailWrong && !isNumberWrong && services &&
            } */}
        </ReactModal >

    )
}
export default ModalComponent