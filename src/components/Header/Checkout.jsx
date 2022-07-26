import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function Checkout({ order }) {

    let totalItems = 0

    if (order) {
        order.map(item => totalItems += item.amount);
    }

    return (
        <div className='checkout'>
            <ShoppingCartCheckoutIcon sx={{ fontSize: 25 }} />
            <span>{totalItems}</span>
        </div>
    )
}