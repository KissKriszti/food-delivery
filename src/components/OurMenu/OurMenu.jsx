import SuccessAlert from './SuccessAlert';
import { useState } from 'react';
import { foodMenuList } from '../../constants/foodMenuList';
import FilterListIcon from '@mui/icons-material/FilterList';
import MenuList from './MenuList';
import Filter from './Filter';
import './ourMenu.css';

export default function OurMenu({ setOrder, dimensions }) {

    const [showMoreFood, setShowMoreFood] = useState(false);
    const [isSuccessMsg, setIsSuccessMsg] = useState(false);
    const [filteringCategory, setFilteringCategory] = useState("");
    const [filterActive, setFilterActive] = useState(false);

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
                {dimensions <= 660 ?
                    <div>
                        <FilterListIcon sx={{ fontSize: 35 }} className='filterButton' onClick={() => setFilterActive(prev => !prev)} />
                        <div className={filterActive ? 'smallFilter' : ''}>
                            {filterActive && <Filter setFilteringCategory={setFilteringCategory} categories={categories} />}
                        </div>
                    </div>
                    :
                    <Filter setFilteringCategory={setFilteringCategory} categories={categories} />
                }
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

