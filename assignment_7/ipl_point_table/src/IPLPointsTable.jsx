import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tableHeaders = [
  { key: "Team", label: "Team" },
  { key: "Matches", label: "Matches" },
  { key: "Won", label: "Won" },
  { key: "Lost", label: "Lost" },
  { key: "NRR", label: "NRR" },
  { key: "Points", label: "Points" },
];

export default function IPLPointsTable() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortKey, setSortKey] = useState("NRR");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/FreSauce/json-ipl/data"
        );
        const data = await response.json();
        const sorted = sortData(data, sortKey, sortOrder);
        setTeams(sorted);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  const sortData = (data, key, order) => {
    return [...data].sort((a, b) => {
      const valA = isNaN(a[key]) ? a[key] : parseFloat(a[key]);
      const valB = isNaN(b[key]) ? b[key] : parseFloat(b[key]);
      if (order === "asc") return valA > valB ? 1 : -1;
      else return valA < valB ? 1 : -1;
    });
  };

  const handleSort = (key) => {
    const order = key === sortKey && sortOrder === "asc" ? "desc" : "asc";
    const sorted = sortData(teams, key, order);
    setSortKey(key);
    setSortOrder(order);
    setTeams(sorted);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-700">
        IPL 2022 Points Table
      </h1>

      {loading ? (
        <div className="text-center mt-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"
          />
          <p className="mt-3 text-gray-600">Loading...</p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded shadow-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-600 text-white">
              <tr>
                {tableHeaders.map(({ key, label }) => (
                  <th
                    key={key}
                    onClick={() => handleSort(key)}
                    className="px-4 py-3 text-left cursor-pointer select-none hover:bg-blue-500 transition"
                  >
                    {label}
                    {sortKey === key && (
                      <span className="ml-1">
                        {sortOrder === "asc" ? "▲" : "▼"}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <AnimatePresence>
                {teams.map((team, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-4 py-2 font-medium text-gray-900">
                      {team.Team}
                    </td>
                    <td className="px-4 py-2 text-center">{team.Matches}</td>
                    <td className="px-4 py-2 text-center">{team.Won}</td>
                    <td className="px-4 py-2 text-center">{team.Lost}</td>
                    <td className="px-4 py-2 text-center">{team.NRR}</td>
                    <td className="px-4 py-2 text-center">{team.Points}</td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
