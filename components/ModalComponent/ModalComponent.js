import { Box, Button, Modal, TextField, makeStyles } from "@mui/material"


const ModalComponent = ({ isOpen, onClose }) => {


    return (
        <Modal
            open={onClose}
        >
            <Box sx={{ position: 'absolute', bgcolor: 'white', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', borderRadius: '4%', }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', p: '40px', gap: '30px', }}>
                    <Box>
                        <TextField variant="outlined" label="full name" />
                        <TextField variant="outlined" label="full name" />
                    </Box>
                    <Box>
                        <TextField variant="outlined" label="full name" />
                        <TextField variant="outlined" label="full name" />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '20px', }}>
                        <Button variant="contained" onClick={onClose}>Close</Button>
                        <Button variant="contained" onClick={onClose}>Send</Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}
export default ModalComponent