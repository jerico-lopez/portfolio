import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_h2fcj0v",
        "template_in49bqj",
        formData,
        "0LNYdZSYu5C5TkE4Z" // from EmailJS account
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send:", error.text);
          alert("Oops, something went wrong.");
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-gray-200 flex flex-col gap-4 w-md rounded-2xl p-5 backdrop-blur-2xl"
    >
      <input
        type="text"
        name="from_name"
        placeholder="Your Name"
        value={formData.from_name}
        onChange={handleChange}
        className="dark:bg-gray-700 rounded p-2"
        required
      />
      <input
        type="email"
        name="from_email"
        placeholder="Your Email"
        value={formData.from_email}
        onChange={handleChange}
        className="dark:bg-gray-700 rounded p-2"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="dark:bg-gray-700 rounded p-2"
        rows={5}
        required
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-full hover:cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
}
