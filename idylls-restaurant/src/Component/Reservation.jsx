import { useState } from "react";
import { CalendarDays, Utensils, ArrowRight } from "lucide-react";

const PHONE = "254143284816";

function Reservation() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello Idylls Restaurant!

I would like to make a reservation enquiry.

Name: ${form.name}
Date: ${form.date}
Time: ${form.time}
Guests: ${form.guests}
Occasion: ${form.occasion || "Not specified"}
Message: ${form.message || "None"}

Please confirm availability.
Thank you!
    `;

    window.open(
      `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="reservation section" id="reservation">
      <div className="reservation-info">
        <span className="section-label">YOUR TABLE AWAITS</span>

        <h2>Make Every Meal a Special Occasion.</h2>

        <p>
          Planning a meal with family, friends or someone special?
          Send us your reservation enquiry.
        </p>

        <div className="reservation-detail">
          <CalendarDays />
          <div>
            <strong>Easy Reservation Enquiry</strong>
            <small>Choose your preferred date and time.</small>
          </div>
        </div>

        <div className="reservation-detail">
          <Utensils />
          <div>
            <strong>A Memorable Experience</strong>
            <small>Enjoy a distinctive dining experience.</small>
          </div>
        </div>
      </div>

      <form className="reservation-form" onSubmit={handleSubmit}>
        <h3>Reserve Your Table</h3>
        <p>Fill in your details below.</p>

        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <div className="form-row">
          <div>
            <label>Preferred Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              required
            />
          </div>

          <div>
            <label>Preferred Time</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <label>Number of Guests</label>
        <select
          name="guests"
          value={form.guests}
          onChange={handleChange}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
            <option key={number} value={number}>
              {number} Guest(s)
            </option>
          ))}
          <option value="More than 10">More than 10</option>
        </select>

        <label>Occasion</label>
        <select
          name="occasion"
          value={form.occasion}
          onChange={handleChange}
        >
          <option value="">Select occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Family Gathering">Family Gathering</option>
          <option value="Business Meeting">Business Meeting</option>
          <option value="Celebration">Special Celebration</option>
          <option value="Other">Other</option>
        </select>

        <label>Additional Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Any special requests?"
        />

        <button type="submit" className="btn btn-gold submit-btn">
          Send Reservation Enquiry
          <ArrowRight size={18} />
        </button>

        <small className="form-note">
          Your reservation is not confirmed until the restaurant
          responds.
        </small>
      </form>
    </section>
  );
}

export default Reservation;