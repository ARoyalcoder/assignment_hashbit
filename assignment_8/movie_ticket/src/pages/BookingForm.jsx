import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success", { state: { ...form, bookingId: Math.floor(Math.random() * 1000000) } });
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Booking for Movie #{id}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border px-4 py-2"
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-2"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Mobile"
          className="w-full border px-4 py-2"
          required
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        />
        <button className="w-full bg-green-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
