import { useState } from 'react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MoneyIcon from '@mui/icons-material/Money';
import OrderCard from './OrderCard';
import CustomerInfo from './CustomerInfo';
import './form.css';

export default function FormOrder({ order, setOpenForm, setOrder }) {

    const [customerDetails, setCustomerDetails] = useState({
        firstName: "",
        lastName: "",
        city: "",
        street: "",
        door: "",
        phone: ""
    });

    let total = 0;
    order.forEach(el => {
        total += parseFloat(el.price.replace("$", "")) * el.amount;
        return total;
    })

    return (
        <section className='formOrder'>
            <div className='formContainer'>
                <div className='formDetails'>
                    <h2>Thank you for your order!</h2>
                    <p>Please fill in your name and address so we can deliver your food as fast as we can.</p>
                    <CustomerInfo customerDetails={customerDetails} setCustomerDetails={setCustomerDetails} />
                    <p>Please choose a payment method:</p>
                    <div className='paymentMethods'>
                        <CreditCardIcon sx={{ fontSize: 60 }} />
                        <MoneyIcon sx={{ fontSize: 60 }} />
                    </div>
                </div>
                <div className='orderDetails'>
                    <h2>Order Details</h2>
                    <p>Please check and edit if necessary.</p>
                    <div className='orderList'>
                        <OrderCard order={order} setOrder={setOrder} />
                    </div>
                    <div className='totalAmount'>
                        <p>Total Amount:</p>
                        <p><strong>{`$${total}`}</strong></p>
                    </div>
                    <div className='formOptions'>
                        <button className='cancel' onClick={() => setOpenForm(false)}>Cancel</button>
                        <button className='send' onClick={() => !customerDetails.some("") && setOpenForm(false)}>Send</button>
                    </div>
                </div>
            </div>
        </section>
    )
}