import Search from "./Search";

const Navbar = () => {


  return (
    <nav className="fixed h-[8vh] bg-gray-800 flex justify-around w-full">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
          </div>
          <div className="flex items-center">
            <div className="mr-4 space-x-4">
              <a href="/">
                <i className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </i>
              </a>
              <a href="/products">
                <i className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Products
                </i>
              </a>
            </div>
            <Search/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
