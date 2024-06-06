const Header = () => {
  return (
    <div>
      <nav className="bg-orange-500">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://new-ella-demo.myshopify.com/cdn/shop/files/home-20-logo.png?v=1646100268&width=300"
              className="h-8 mr-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-medium  text-white font-semibold">
              Available 24/7 at <br /> 091 234-ELLA
            </span>
          </a>

          <form class="flex items-center max-w-sm mx-auto">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 end-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400 absolute pl-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search branch name..."
                required
              />
            </div>
          </form>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white  rounded md:bg-transparent"
                  aria-current="page"
                >
                  Wish Lists
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white  rounded md:bg-transparent"
                >
                  Git Card
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white  rounded md:bg-transparent"
                >
                  Sign In
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white  rounded md:bg-transparent"
                >
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
    </div>
  );
};

export default Header;
