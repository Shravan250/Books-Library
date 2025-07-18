import React from 'react';
import { 
  Package, 
  BookOpen, 
  Bookmark, 
  Settings, 
  LogOut 
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-80 min-h-screen bg-slate-900 text-white flex flex-col">
      {/* Header */}
      <div className="p-8 pb-12">
        <div className="text-4xl font-bold">
          <span className="text-blue-400">Gee</span>
          <span className="text-white">kout</span>
          <span className="text-blue-400">.</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        {/* Dashboard - Active */}
        <div className="bg-blue-500 rounded-2xl px-6 py-4 flex items-center space-x-4 cursor-pointer hover:bg-blue-600 transition-colors">
          <Package className="w-6 h-6" />
          <span className="text-lg font-medium">Dashboard</span>
        </div>

        {/* My Collections */}
        <div className="px-6 py-4 flex items-center space-x-4 cursor-pointer hover:bg-slate-800 rounded-2xl transition-colors">
          <BookOpen className="w-6 h-6" />
          <span className="text-lg font-medium">My Collections</span>
        </div>

        {/* Favourites */}
        <div className="px-6 py-4 flex items-center space-x-4 cursor-pointer hover:bg-slate-800 rounded-2xl transition-colors">
          <Bookmark className="w-6 h-6" />
          <span className="text-lg font-medium">Favourites</span>
        </div>
      </nav>

      {/* Bottom Navigation */}
      <div className="p-4 space-y-2">
        {/* Settings */}
        <div className="px-6 py-4 flex items-center space-x-4 cursor-pointer hover:bg-slate-800 rounded-2xl transition-colors">
          <Settings className="w-6 h-6" />
          <span className="text-lg font-medium">Settings</span>
        </div>

        {/* Log out */}
        <div className="px-6 py-4 flex items-center space-x-4 cursor-pointer hover:bg-slate-800 rounded-2xl transition-colors">
          <LogOut className="w-6 h-6" />
          <span className="text-lg font-medium">Log out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;