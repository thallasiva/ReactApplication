const SubHeader = () => {
  return (
    <nav className="bg-gray-100">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black-600  rounded md:bg-transparent"
                aria-current="page"
              >
                Theme Demo
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black-600  rounded md:bg-transparent"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black-600  rounded md:bg-transparent"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black-600  rounded md:bg-transparent"
              >
                Blog
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black-600  rounded md:bg-transparent"
              >
                Pages
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black-600  rounded md:bg-transparent"
              >
                New In
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black-600  rounded md:bg-transparent"
              >
                Trend
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black-600  rounded md:bg-transparent"
              >
                Collection
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black-600  rounded md:bg-transparent"
              >
                Buy My App Sales
              </a>
            </li>
          </ul>
        </div>

        <div className="float-right">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
            <li>
              <a
                href="#"
                className="block py-2  text-black-600  rounded md:bg-transparent"
                aria-current="page"
              >
                Help 
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2  text-black-600  rounded md:bg-transparent"
                aria-current="page"
              >
                Theme 
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SubHeader;
