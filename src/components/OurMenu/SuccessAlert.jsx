import { Alert } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

export default function SuccessAlert() {
    return (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" className="alert" variant="filled">
            Successfully added to cart!
        </Alert>
    )
}