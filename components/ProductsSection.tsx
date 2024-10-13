import Head from "./Head";
import Card from "./Card";
import Products from "../products";








const ProductsSection = () => {
  return (
    <div className=" w-full pb-20 bg-primary">
      <div className="container m-auto flex flex-col justify-between items-center leading-[10px]">
        <Head text="Products" />
        <p className="text-black font-[500] text-[17px] pb-10">
          Explore Our Collection of products
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-10">
          {Products.map((product) => {
            return <Card image={product.source} key={product.id}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
