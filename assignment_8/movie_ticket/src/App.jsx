import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import MoviesList from "./pages/moviesList";
import MovieDetails from "./pages/MovieDetails";
import BookingForm from "./pages/BookingForm";
import BookingSuccess from "./pages/BookingSuccess";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><MoviesList /></PageWrapper>} />
        <Route path="/movie/:id" element={<PageWrapper><MovieDetails /></PageWrapper>} />
        <Route path="/book/:id" element={<PageWrapper><BookingForm /></PageWrapper>} />
        <Route path="/success" element={<PageWrapper><BookingSuccess /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      className="min-h-screen p-4 text-gray-800"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.1, type: "spring", stiffness: 80 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <div className="bg-gradient-to-b from-blue-200  to-pink-200 min-h-screen font-sans">
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
