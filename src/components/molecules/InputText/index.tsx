import TextField from '@mui/material/TextField';

type InputProps = {
    labelText: string
    change?: (e: any) => void
}

const InputText = ({labelText, change}: InputProps) => {
    return (
        <TextField size='small' onChange={change} label={labelText} data-testid='input-field' />
    )
}

export default InputText