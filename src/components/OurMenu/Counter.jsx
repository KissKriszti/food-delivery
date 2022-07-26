import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


export default function Counter({ addToCartMsg, setOrder, id, foodList }) {

    const [orderNum, setOrderNum] = useState(0)

    function increaseCount() {
        return orderNum < 10 ? setOrderNum(orderNum + 1) : setOrderNum(orderNum)
    };

    function decreaseCount() {
        return orderNum > 0 ? setOrderNum(orderNum - 1) : setOrderNum(orderNum)
    };

    function addOrderToCart(id) {
        const order = foodList.filter(food => food.id === id);
        order[0].amount = orderNum;
        setOrder(prev => [...prev, order[0]]);
    };

    return (
        <>
            <div className='shopCount'>
                <button onClick={decreaseCount}><RemoveIcon sx={{ fontSize: 25 }} /></button>
                <p>{orderNum}</p>
                <button onClick={increaseCount}><AddIcon sx={{ fontSize: 25 }} /></button>
            </div>
            <button className='toCart' onClick={() => {
                if (orderNum > 0) {
                    addToCartMsg()
                    addOrderToCart(id)
                }
            }}>
                <ShoppingCartCheckoutIcon sx={{ fontSize: 19, backgroundColor: "#eeb528" }} />
            </button>
        </>
    )
};