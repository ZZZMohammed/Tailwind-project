export default function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-start text-white px-12"
      style={{ backgroundImage: "url('/home-1.jpg')" }}
    >
      <div className="max-w-lg ">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg mb-6">Your tagline or description goes here.</p>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
}

