import PopularProductCard from '../components/PopularProductCard';
import { products } from '../constants';

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-palanquin text-4xl font-bold capitalize">
          our <span className="text-coral-red">popular</span> products
        </h2>
        <p
          className="font-montserrat text-slate-gray mt-2 lg:max-w-lg
      "
        >
          experience top notch quality and style with our sought after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>
      <div
        className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 
      sm:gap-6 md:grid-cols-3 lg:grid-cols-4"
      >
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
