import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-start px-12"
      style={{ backgroundImage: "url('/home-1.jpg')" }}
    >
      <motion.div
        className="max-w-lg space-y-6"
        initial={{ y: -100, opacity: 0 }}     // start above and transparent
        animate={{ y: 0, opacity: 1 }}       // slide down and appear
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl font-extrabold tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Taste the <span className="text-yellow-500">Best Burgers</span> in Town
        </motion.h1>

        <p className="text-lg text-gray-100">
          Fresh ingredients, juicy patties, and unforgettable flavor — your perfect meal starts here.
        </p>

        <motion.button
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold shadow-md transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Order Now 🍔
        </motion.button>
      </motion.div>
    </div>
  );
}
