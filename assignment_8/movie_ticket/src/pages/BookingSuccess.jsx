import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function BookingSuccess() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate("/");
    return null;
  }

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen px-4"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="bg-white/70 backdrop-blur-md shadow-2xl p-8 rounded-2xl w-full max-w-md text-center border border-white/30">
        <h1 className="text-3xl font-bold text-green-700 mb-4">🎉 Booking Confirmed!</h1>
        <div className="text-left text-gray-700 space-y-2">
          <p><strong>Booking ID:</strong> {state.bookingId}</p>
          <p><strong>Name:</strong> {state.name}</p>
          <p><strong>Email:</strong> {state.email}</p>
          <p><strong>Mobile:</strong> {state.mobile}</p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition duration-200"
        >
          🎬 Back to Movies
        </button>
      </div>
    </motion.div>
  );
}
