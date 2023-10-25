// create-react-app დახმარებით გააკეთეთ რეაქტის აპლიკაცია სადაც ააწყობთ იგივე ინტერფესის რაც მაქვს აწყობილი static.html ფაილში.
// შეეცადეთ მაქსიმალურად დაყოთ კომპონენტებად და ისე შეასრულოთ დავალება.

const root = document.querySelector("#root");

const products = [
    { title: "Product 1", alt: "Image-1" },
    { title: "Product 2", alt: "Image-1" },
    { title: "Product 3", alt: "Image-1" },
    { title: "Product 4", alt: "Image-1" },
    { title: "Product 5", alt: "Image-1" },
    { title: "Product 6", alt: "Image-1" },
];
function Card({ product }) {
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
function App() {
    return (
        <main className="container">
            {products.map(product => <Card product={product} />)}
        </main>
    )
}
ReactDOM.render(App(), document.getElementById("root"));


function Container() {
    return (
        <div className="divContainer">
            <div className="div1">Random1</div>
            <div className="div2">Random2</div>
            <div className="div3">Random3</div>
            <div className="div4">Random4</div>
        </div>
    )
}

function App2() {
    return (
        <section className="box_container" >
            <Container />
            <img alt="photo" src="https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-01.jpg" />
        </section>
    )
}
ReactDOM.render(App2(), document.getElementById("box"));
