import { TextField } from "@mui/material"

const FormInputField = ({ warningMessage = null, onBlurCallBackFunction, onChangeCallBackFunction, name, pattern = undefined, required }) => {
    console.log(name);
    return (
        <TextField
            onChange={onChangeCallBackFunction}
            onBlur={onBlurCallBackFunction}
            name={name}
            label={required
                ?
                name[0].toUpperCase() + name.slice(1) + '*'
                :
                name[0].toUpperCase() + name.slice(1)
            }

            // label= name[0].toUpperCase() + name.slice(1) + "required"
            // :
            // label= name[0].toUpperCase() + name.slice(1)
            variant="outlined"
            inputProps={{ 'pattern': pattern }}
            helperText={warningMessage[name]?.errorMessage}
            error={warningMessage[name]?.hasError}
            sx={{ width: '40ch' }}
        />
    )
}
export default FormInputField