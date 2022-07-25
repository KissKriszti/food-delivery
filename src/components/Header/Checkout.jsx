import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function Checkout() {
    return (
        <div className='checkout'>
            <ShoppingCartCheckoutIcon sx={{ fontSize: 25 }} />
            <span>0</span>
        </div>
    )
}