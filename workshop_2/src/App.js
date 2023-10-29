import './App.css';
import './reset.css'
import { Card } from './Components/Card';



const products = [
  { title: "Product 1", alt: "Image-1" },
  { title: "Product 2", alt: "Image-1" },
  { title: "Product 3", alt: "Image-1" },
  { title: "Product 4", alt: "Image-1" },
  { title: "Product 5", alt: "Image-1" },
  { title: "Product 6", alt: "Image-1" },
];

function App() {
  return (

    <main className="container">
      {products.map(product => <Card product={product} />)}
    </main>

  );
}

export default App;


