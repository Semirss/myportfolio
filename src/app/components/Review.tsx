import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Review = {
  id: number;
  name: string;
  text: string;
  avatar: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Alex Johnson",
    text: "Semir is a highly skilled developer. His work on our project was top-notch and always delivered on time.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 2,
    name: "Lina Carter",
    text: "Creative, reliable, and super professional. Loved collaborating on our app with Semir!",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    name: "Ethan Park",
    text: "One of the best frontend developers I've worked with. Always on point with design and code.",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
];

const ReviewCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div id="Review" className="w-full py-10 px-4 text-white">
      <div style={{border:"1px solid #fff"}} className="max-w-xl mx-auto p-6 rounded-2xl shadow-xl text-center">
        <div className="relative h-60">
          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[index].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="absolute w-full top-0 left-0"
            >
              <div className="flex flex-col items-center">
                <img
                  src={reviews[index].avatar}
                  alt={reviews[index].name}
                  className="w-16 h-16 rounded-full border-2 border-blue-500 mb-4"
                />
                <p className="text-lg font-medium text-gray-100 dark:text-gray-100">
                  “{reviews[index].text}”
                </p>
                <span className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  — {reviews[index].name}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-6 mt-6">
          <button onClick={prevReview}>
            <ChevronLeft className="w-6 h-6 text-gray-100 dark:text-gray-300 hover:scale-110 transition-transform" />
          </button>
          <button onClick={nextReview}>
            <ChevronRight className="w-6 h-6 text-gray-100 dark:text-gray-300 hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
