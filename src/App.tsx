import { ProductCard } from "./components/ProductCard/ProductCard";

const App = () => (
  <div className="container">
    <ProductCard
      title="Коктейль de France"
      origin="France"
      price={34900}
      currency="RUB"
      imageUrl="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
    />
  </div>
);

export default App;
