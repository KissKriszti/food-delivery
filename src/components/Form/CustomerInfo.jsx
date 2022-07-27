import { TextField } from '@mui/material';

export default function CustomerInfo({ customerDetails, setCustomerDetails }) {

    return (
        <form>
            <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                required
                sx={{ color: 'yellow' }}
                value={customerDetails.firstName}
                onChange={(e) => setCustomerDetails({ ...customerDetails, firstName: e.target.value })}
            />
            <TextField
                id="outlined-basic"
                required
                label="Last Name"
                variant="outlined"
                value={customerDetails.lastName}
                onChange={(e) => setCustomerDetails({ ...customerDetails, lastName: e.target.value })}
            />
            <TextField
                id="outlined-basic"
                required
                label="City"
                variant="outlined"
                value={customerDetails.city}
                onChange={(e) => setCustomerDetails({ ...customerDetails, city: e.target.value })}
            />
            <TextField
                id="outlined-basic"
                required
                label="Street"
                variant="outlined"
                value={customerDetails.street}
                onChange={(e) => setCustomerDetails({ ...customerDetails, street: e.target.value })}
            />
            <TextField
                id="outlined-basic"
                required
                label="Door"
                variant="outlined"
                value={customerDetails.door}
                onChange={(e) => setCustomerDetails({ ...customerDetails, door: e.target.value })}
            />
            <TextField
                id="outlined-basic"
                required
                label="Phone Number"
                variant="outlined"
                value={customerDetails.phone}
                onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
            />
        </form>
    )
}