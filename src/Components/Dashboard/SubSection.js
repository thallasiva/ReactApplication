const ShopCategories = () => {
  return (
    <div className="mt-3 mb-6  p-2  ">
      <h3 className="mb-4 text-2xl font-extrabold leading-none mb-6 mt-6"> Shop By Categories </h3>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-center">
        <div>
          <img
            className="h-auto max-w-full rounded-lg block m-auto"
            src="https://new-ella-demo.myshopify.com/cdn/shop/files/home-20-categories-1-1_170x.png?v=1646386792"
            alt=""
          />
          <p className="mt-3 text-black-500 dark:text-gray-400"> Mobile Phones </p>
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg block m-auto"
            src="https://new-ella-demo.myshopify.com/cdn/shop/files/home-20-categories-1-2_170x.png?v=1646386795"
            alt=""
          />
          <p className="mt-3 text-black-500 dark:text-gray-400"> Laptops & Tablets </p>
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg block m-auto"
            src="https://new-ella-demo.myshopify.com/cdn/shop/files/home-20-categories-1-3_170x.png?v=1646386798"
            alt=""
          />
          <p className="mt-3 text-black-500 dark:text-gray-400"> Televisons </p>
        </div>

        <div>
          <img
            className="h-auto max-w-full rounded-lg block m-auto"
            src="https://new-ella-demo.myshopify.com/cdn/shop/files/home-20-categories-1-4_170x.png?v=1646386801"
            alt=""
          />
          <p className="mt-3 text-black-500 dark:text-gray-400"> PCs & Accessories </p>
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg block m-auto"
            src="https://new-ella-demo.myshopify.com/cdn/shop/files/home-20-categories-1-5_170x.png?v=1646386804"
            alt=""
          />
          <p className="mt-3 text-black-500 dark:text-gray-400"> Audio & Video </p>
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg block m-auto"
            src="https://new-ella-demo.myshopify.com/cdn/shop/files/home-20-categories-1-6_170x.png?v=1646386806"
            alt=""
          />
          <p className="mt-3 text-black-500 dark:text-black-700"> Gameing & Accessorie </p>
        </div>
      </div>
    </div>
  );
};

export default ShopCategories;
