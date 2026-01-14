import { productsMock } from '../data/products';
import ProductCard from '../components/ProductCard';

function Home() {
  return (
    <div className="container">
      <h2 className="text-center my-4">Nuestro Menú</h2>
      <div className="row">
        {productsMock.map((prod) => (
          <ProductCard key={prod.id} producto={prod} />
        ))}
      </div>
    </div>
  );
}

export default Home;