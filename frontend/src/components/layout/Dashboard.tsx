import Navbar from "./Navbar";
import Batman from "../../assets/batman.png";
import Kobra from "../../assets/kobra.png";

const DashboardContent = () => {
  const topRatedBooks = [
    {
      id: 1,
      title: "The flash, Vol. 1",
      author: "Joshua Williamson",
      image: "/api/placeholder/200/300",
      color: "from-red-500 to-blue-600",
    },
    {
      id: 2,
      title: "Titans, Vol. 2",
      author: "Andrew Robinson",
      image: "/api/placeholder/200/300",
      color: "from-purple-600 to-green-500",
    },
    {
      id: 3,
      title: "Harley Quinn, Vol 1",
      author: "Jimmy Palmiotti",
      image: "/api/placeholder/200/300",
      color: "from-yellow-400 to-pink-500",
    },
    {
      id: 4,
      title: "Suicide Squad #8",
      author: "Tom Taylor",
      image: "/api/placeholder/200/300",
      color: "from-green-400 to-purple-600",
    },
  ];

  return (
    <main className="bg-slate-900 min-h-screen p-6">
      {/* Featured Comic Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Main Featured Comic */}
        <div className="lg:col-span-2">
          <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl overflow-hidden h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={Batman}
                alt="batman"
              />
            </div>
            <div className="absolute bottom-6 left-6 z-20 text-white">
              <p className="text-sm text-gray-300 mb-2">Frank Miller</p>
              <h1 className="text-4xl font-bold mb-4">
                Batman:
                <br />
                The Dark Knight
              </h1>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
                Read Now
              </button>
            </div>
            {/* Placeholder for Batman image */}
          </div>
        </div>

        {/* Continue Reading Section */}
        <div className="px-6 flex flex-col gap-3 items-center h-full">
          <h2 className="text-white text-xl font-bold mb-4">
            Continue Reading
          </h2>
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden mb-4">
              <img
                src={Kobra}
                alt="Kobra Kai: Ultimate"
                className="w-full h-4/5 object-cover"
              />
              {/* Progress Circle Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center relative">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">39%</span>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-white font-semibold">Kobra Kai: Ultimate</h3>
          </div>
        </div>
      </div>

      {/* Top Rated Books Section */}
      <div>
        <h2 className="text-white text-2xl font-bold mb-6">Top Rated Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topRatedBooks.map((book) => (
            <div key={book.id} className="group cursor-pointer">
              <div
                className={`bg-gradient-to-br ${book.color} rounded-xl p-6 h-80 mb-4 flex items-center justify-center transform transition-transform group-hover:scale-105`}
              >
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {book.title.charAt(0)}
                  </span>
                </div>
              </div>
              <h3 className="text-blue-400 font-semibold text-lg mb-1">
                {book.title}
              </h3>
              <p className="text-gray-400 text-sm">{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-slate-900 w-full overflow-y-auto">
      {/* Sidebar would go here */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
