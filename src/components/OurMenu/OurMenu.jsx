import SuccessAlert from './SuccessAlert';
import { useState } from 'react';
import { foodMenuList } from '../../constants/foodMenuList';
import MenuList from './MenuList';
import './ourMenu.css';

export default function OurMenu({ setOrder }) {

    const [showMoreFood, setShowMoreFood] = useState(false);
    const [isSuccessMsg, setIsSuccessMsg] = useState(false);
    const [filteringCategory, setFilteringCategory] = useState("");

    const shortMenuList = foodMenuList.slice(0, 10);
    const fullMenuFilter = foodMenuList.filter(item => item.category === filteringCategory)

    const categories = [];

    categories.push("All")

    foodMenuList.map(({ category }) => !categories.includes(category) && categories.push(category));

    function addToCartMsg() {
        setIsSuccessMsg(true);
        setTimeout(() => {
            setIsSuccessMsg(false)
        }, 2500)
    };

    return (
        <section id="menu">
            <div className='menuTitle'>
                <h4>OUR MENU</h4>
                <h2>The Most Popular</h2>
            </div>
            <div className='filteringOptions'>
                {categories.map((item, index) => (
                    <div className='filterCard' key={index}>
                        <button onClick={() => setFilteringCategory(() => item === "All" ? "" : item)}>{item}</button>
                    </div>
                ))}
            </div>
            <div className='foodContainer'>
                <MenuList
                    foodList={filteringCategory ? fullMenuFilter : (showMoreFood ? foodMenuList : shortMenuList)} addToCartMsg={addToCartMsg}
                    setOrder={setOrder} />
            </div>
            <div className='showMoreContainer'>
                {!filteringCategory &&
                    <button onClick={() => setShowMoreFood(prev => !prev)}>{showMoreFood ? 'Show Less' : 'Show More'}</button>
                }
            </div>
            {isSuccessMsg && <SuccessAlert />}
        </section>
    )
}

