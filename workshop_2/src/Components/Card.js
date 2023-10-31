

export function Card({ product }) {
    return (
        <div className="shopping_items">
            <h2>{product.title}</h2>
            <h1>Lorem. ipsum dolor</h1>
            <img alt={product.alt} src="https://source.unsplash.com/random/200x300" />
            <div className="description">
                <span>In Stock - </span>
                <span>Points 1.5/5</span>
            </div>
            <div>
                <span>sport - </span>
                <span>lifestyle</span>
            </div>
            <button>Add To Cart</button>
        </div>
    )
}