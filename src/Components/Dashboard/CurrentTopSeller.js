const CurrentTopSeller = () => {
    return (
      <div className="mt-3 mb-6  p-2  ">
        <h3 className="mb-4 text-2xl font-extrabold leading-none mb-6 mt-6"> Current Top Sellers </h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-center">
          <div>
            <img
              className="h-auto max-w-full rounded-lg block m-auto"
              src="https://new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_165x.jpg?v=1640334234%20165w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_170x.jpg?v=1640334234%20170w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_185x.jpg?v=1640334234%20185w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_198x.jpg?v=1640334234%20198w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_205x.jpg?v=1640334234%20205w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_210x.jpg?v=1640334234%20210w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_220x.jpg?v=1640334234%20220w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_245x.jpg?v=1640334234%20245w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_270x.jpg?v=1640334234%20270w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_290x.jpg?v=1640334234%20290w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_320x.jpg?v=1640334234%20320w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_355x.jpg?v=1640334234%20355w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_360x.jpg?v=1640334234%20360w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_370x.jpg?v=1640334234%20370w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_420x.jpg?v=1640334234%20420w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_430x.jpg?v=1640334234%20430w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_460x.jpg?v=1640334234%20460w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_470x.jpg?v=1640334234%20470w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_510x.jpg?v=1640334234%20510w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_523x.jpg?v=1640334234%20523w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_533x.jpg?v=1640334234%20533w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_534x.jpg?v=1640334234%20534w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_570x.jpg?v=1640334234%20570w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_640x.jpg?v=1640334234%20640w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_665x.jpg?v=1640334234%20665w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_670x.jpg?v=1640334234%20670w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_720x.jpg?v=1640334234%20720w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_775x.jpg?v=1640334234%20775w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_785x.jpg?v=1640334234%20785w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6_870x.jpg?v=1640334234%20870w"
              alt=""
            />
            <p className="mt-3 text-black-500 dark:text-gray-400"> Mobile Phones </p>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg block m-auto"
              src="https://new-ella-demo.myshopify.com/cdn/shop/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_870x.jpg?v=1640334272"
              alt=""
            />
            <p className="mt-3 text-black-500 dark:text-gray-400"> Laptops & Tablets </p>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg block m-auto"
              src="//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_165x.jpg?v=1640334213 165w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_170x.jpg?v=1640334213 170w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_185x.jpg?v=1640334213 185w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_198x.jpg?v=1640334213 198w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_205x.jpg?v=1640334213 205w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_210x.jpg?v=1640334213 210w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_220x.jpg?v=1640334213 220w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_245x.jpg?v=1640334213 245w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_270x.jpg?v=1640334213 270w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_290x.jpg?v=1640334213 290w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_320x.jpg?v=1640334213 320w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_355x.jpg?v=1640334213 355w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_360x.jpg?v=1640334213 360w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_370x.jpg?v=1640334213 370w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_420x.jpg?v=1640334213 420w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_430x.jpg?v=1640334213 430w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_460x.jpg?v=1640334213 460w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_470x.jpg?v=1640334213 470w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_510x.jpg?v=1640334213 510w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_523x.jpg?v=1640334213 523w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_533x.jpg?v=1640334213 533w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_534x.jpg?v=1640334213 534w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_570x.jpg?v=1640334213 570w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_640x.jpg?v=1640334213 640w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_665x.jpg?v=1640334213 665w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_670x.jpg?v=1640334213 670w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_720x.jpg?v=1640334213 720w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_775x.jpg?v=1640334213 775w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_785x.jpg?v=1640334213 785w,//new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_870x.jpg?v=1640334213 870w"
              alt=""
            />
            <p className="mt-3 text-black-500 dark:text-gray-400"> Televisons </p>
          </div>
  
          <div>
            <img
              className="h-auto max-w-full rounded-lg block m-auto"
              src="https://new-ella-demo.myshopify.com/cdn/shop/products/product-loa-1.jpg?v=1640334199"
              alt=""
            />
            <p className="mt-3 text-black-500 dark:text-gray-400"> PCs & Accessories </p>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg block m-auto"
              src="https://new-ella-demo.myshopify.com/cdn/shop/products/product-tivi-1.jpg?v=1640334182"
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
  
  export default CurrentTopSeller;
  