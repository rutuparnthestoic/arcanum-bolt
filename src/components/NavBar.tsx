
function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 flex-shrink-0">
              <img
                src="/colored-logo.png"
                alt="Arcanum logo"
                className="w-48 h-12 object-contain"
              />
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <a href="/" className="hover:text-purple-400 transition">OUR STORY</a>
              <a href="offerings" className="hover:text-purple-400 transition">OUR CORE OFFERINGS</a>
              <a href="approach" className="hover:text-purple-400 transition">OUR APPROACH</a>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default NavBar;