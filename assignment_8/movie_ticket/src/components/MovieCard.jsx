import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function MovieCard({ movie }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <Link to={`/movie/${movie.id}`}>
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="p-3">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
              {movie.title}
            </h3>
            <p className="text-sm text-gray-500 line-clamp-2">
              {movie.description?.slice(0, 60)}...
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
