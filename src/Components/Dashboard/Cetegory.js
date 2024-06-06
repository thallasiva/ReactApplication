const Categories = () => {
  return (
    <nav className="bg-white-100 p-6 mt-6 shadow-slate-400  border mb-3 rounded-lg	">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black-600  rounded md:bg-transparent"
                aria-current="page"
              >
                Sport
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black-600  rounded md:bg-transparent"
              >
                Apparel
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black-600  rounded md:bg-transparent"
              >
                Accessorie
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black-600  rounded md:bg-transparent"
              >
                Material
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black-600  rounded md:bg-transparent"
              >
                Mechinery
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black-600  rounded md:bg-transparent"
              >
                Garden & Pets
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black-600  rounded md:bg-transparent"
              >
                Furniture
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black-600  rounded md:bg-transparent"
              >
                Lights & Light
              </a>
            </li>
            
          </ul>
        </div>

        
      </div>
    </nav>
  );
};

export default Categories;
