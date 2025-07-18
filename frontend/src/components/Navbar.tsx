import { Search, Bell } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-slate-900 p-6 flex items-center justify-between">
      {/* Search Bar */}
      <div className="relative flex-1 max-w-2xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search comics, authors, genres..."
            className="w-full bg-slate-800 text-white placeholder-gray-400 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* Right Side - Notifications & Profile */}
      <div className="flex items-center space-x-4 ml-6">
        <button className="p-2 text-gray-400 hover:text-white transition-colors">
          <Bell className="w-6 h-6" />
        </button>
        <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
          <span className="text-slate-900 font-bold text-sm">👤</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;