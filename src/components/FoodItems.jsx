
import { motion } from "framer-motion";


const food_det = [
  {
    id: 1,
    name: "Pizza Margherita",
    image: "/pizza.avif",
    price: 599,
    rating: 5.0,
  },
  {
    id: 2,
    name: "Burger Deluxe",
    image: "/bur.avif",
    price: 12,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Sushi Combo",
    image: "/sushi.avif",
    price: 20,
    rating: 4.9,
  },
  {
    id: 4,
    name: "Fries",
    image: "/fries.avif",
    price: 15,
    rating: 4.7,
  },
];

export default function FoodItems() {
  return (
    <section className="app-container py-16">
      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl mb-12 font-bold text-gray-900 dark:text-white"
        
        initial={{ x: -100, opacity: 0 }}       // before it’s visible
        whileInView={{ x: 0, opacity: 1 }}      // when scrolled into view
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}  // trigger once, when 20% visible
      >
        Popular Food Items
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {food_det.map((food) => (
          <div
            key={food.id}
            className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col"
          >
            <div className="h-60 overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-t-lg"
                src={food.image}
                alt={food.name}
              />
            </div>

            <div className="flex-1 flex flex-col justify-between px-5 pb-5">
              <div>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-4">
                  {food.name}
                </h5>

                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 ... Z" />
                      </svg>
                    ))}
                    <svg
                      className="w-4 h-4 text-gray-200 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 ... Z" />
                    </svg>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                    {food.rating}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${food.price}
                </span>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
