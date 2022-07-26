import './ourMenu.css';

export default function OurMenu() {
    return (
        <section id="menu">
            <div className='menuTitle'>
                <h4>OUR MENU</h4>
                <h2>The Most Popular</h2>
            </div>
            <div className='filteringOptions'></div>
            <div className='foodContainer'></div>
            <div className='showMoreContainer'>
                <button>Show More</button>
            </div>
        </section>
    )
}