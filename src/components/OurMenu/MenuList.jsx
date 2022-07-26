import Counter from './Counter';

export default function MenuList({ foodList, addToCartMsg, setOrder }) {

    return (
        foodList.map(({ id, image, name, price }) => (
            <div className='foodCard' key={id}>
                <img src={image} alt={image} />
                <h4>{name}</h4>
                <h5>{price}</h5>
                <div className='shopping'>
                    <Counter addToCartMsg={addToCartMsg} setOrder={setOrder} id={id} foodList={foodList} />
                </div>
            </div>
        ))
    )
}