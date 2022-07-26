import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function OrderCard({ order, setOrder }) {
    return (
        order.map(item => {

            let multipliedPrice = parseFloat(item.price.split('$')[1]) * item.amount

            return (
                <div className='orderCard' key={item.id}>
                    <img src={item.image} alt="food" />
                    <span>{`${item.amount}X`}</span>
                    <span>{item.name}</span>
                    <span><strong>{`$${multipliedPrice}`}</strong></span>
                    <RemoveCircleIcon sx={{ fontSize: 16, cursor: 'pointer' }} onClick={() => setOrder(order.filter(ord => ord.id !== item.id))} />
                </div>
            )
        })
    )
}