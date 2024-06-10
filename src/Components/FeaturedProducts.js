const FeatureProducts = () => {
    return (
      <div className="mt-3 mb-6  p-2  ">
        <h3 className="mb-4 text-2xl text-left font-extrabold leading-none mb-6 mt-6"> Featured Products </h3>
        <div className="grid grid-cols-3 md:grid-cols-2 gap-2 text-center">
          <div>
            <img
              className="h-auto max-w-full rounded-lg block m-auto"
              src="https://new-ella-demo.myshopify.com/cdn/shop/products/product-loa-1.jpg?v=1640334199"
              alt=""
            />
            <p className="mt-3 text-black-500 dark:text-gray-400"> Mobile Phones </p>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg block m-auto"
              src="https://new-ella-demo.myshopify.com/cdn/shop/products/product-laptop-1_8ba38545-e982-4cc5-a601-9f7adb782d6f.jpg?v=1640334272"
              alt=""
            />
            <p className="mt-3 text-black-500 dark:text-gray-400"> Laptops & Tablets </p>
          </div>
         
        </div>
        
      </div>
    );
  };
  
  export default FeatureProducts;
  