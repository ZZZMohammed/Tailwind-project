export default function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-start px-12"
      style={{ backgroundImage: "url('/home-1.jpg')" }}
    >
      <div className="max-w-lg space-y-6">
  <h1 className="text-5xl font-extrabold tracking-wide">
    Taste the <span className="text-yellow-500">Best Burgers</span> in Town
  </h1>

  <p className="text-lg text-gray-100">
    Fresh ingredients, juicy patties, and unforgettable flavor — your perfect meal starts here.
  </p>

  <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold shadow-md transition">
    Order Now 🍔
  </button>
</div>

    </div>
  );
}

