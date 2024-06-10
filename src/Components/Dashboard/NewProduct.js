import FeatureProducts from "../FeaturedProducts";

const NewProducts = () => {
  return (
    <div className="mt-3 mb-6  p-2  ">
      {/* <h3 className="mb-4 text-2xl font-extrabold leading-none mb-6 mt-6">
          New Products
        </h3> */}

      <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
        <div className="grid grid-cols-6 md:grid-cols-1 gap-2 text-center">
          <FeatureProducts />
        </div>

        <div className="grid grid-cols-6 md:grid-cols-1 gap-2 text-center">
          <FeatureProducts />
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
