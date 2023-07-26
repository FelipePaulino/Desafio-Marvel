import { Button } from '@mui/material'

type ButtonProps = {
    label: string
    action?: any
}

const ButtonAction = ({label, action}: ButtonProps) => {
    return (
        <Button onClick={action} variant="contained"sx={{ background: '#464DF2', color: '#fff', "&:focus": {
            opacity: '0.8', background: '#464DF2'
        }}}>
            {label}
        </Button>
    )
}

export default ButtonAction