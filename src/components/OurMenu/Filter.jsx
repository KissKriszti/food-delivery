export default function Filter({ setFilteringCategory, categories }) {
    return (
        categories.map((item, index) => (
            <div className='filterCard' key={index}>
                <button onClick={() => setFilteringCategory(() => item === "All" ? "" : item)}>{item}</button>
            </div>
        ))
    )
}