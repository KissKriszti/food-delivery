import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function Checkout({ order, setOpenForm }) {

    let totalItems = 0

    if (order) {
        order.map(item => totalItems += item.amount);
    }

    return (
        <div className='checkout' onClick={() => {
            setOpenForm(true)
            window.scrollTo(0, 0)
        }}>
            <ShoppingCartCheckoutIcon sx={{ fontSize: 25 }} />
            <span>{totalItems}</span>
        </div>
    )
}