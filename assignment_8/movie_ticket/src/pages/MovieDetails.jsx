import { useParams, useNavigate } from "react-router-dom";
import { movies } from "../data";
import { motion } from "framer-motion";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="p-6 text-center text-red-600 font-semibold">
        Movie not found. Please go back.
      </div>
    );
  }

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen px-4"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="bg-white/70 backdrop-blur-md shadow-2xl p-8 rounded-2xl w-full max-w-3xl border border-white/30">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">{movie.title}</h1>

        <motion.img
          src={movie.image}
          alt={movie.title}
          className="w-full max-w-md mb-6 rounded-xl shadow-lg mx-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 80 }}
        />

        <p className="text-gray-700 leading-relaxed text-justify mb-8">
          {movie.description}
        </p>

        <div className="text-center">
          <motion.button
            onClick={() => navigate(`/book/${movie.id}`)}
            className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 shadow-md transition-all duration-300"
            whileTap={{ scale: 0.95 }}
          >
            🎟️ Book Seat
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
