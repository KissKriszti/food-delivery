import { foodMenuList } from '../../constants/foodMenuList';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import './ourMenu.css';

export default function OurMenu() {

    return (
        <section id="menu">
            <div className='menuTitle'>
                <h4>OUR MENU</h4>
                <h2>The Most Popular</h2>
            </div>
            <div className='filteringOptions'></div>
            <div className='foodContainer'>
                {foodMenuList.map(({ id, image, name, price }) => (
                    <div className='foodCard' key={id}>
                        <img src={image} alt={image} />
                        <h4>{name}</h4>
                        <h5>{price}</h5>
                        <div className='shopping'>
                            <div className='shopCount'>
                                <button><RemoveIcon sx={{ fontSize: 25 }} /></button>
                                <p>0</p>
                                <button><AddIcon sx={{ fontSize: 25 }} /></button>
                            </div>
                            <button className='toCart'>
                                <ShoppingCartCheckoutIcon sx={{ fontSize: 19, backgroundColor: "#eeb528" }} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='showMoreContainer'>
                <button>Show More</button>
            </div>
        </section>
    )
}