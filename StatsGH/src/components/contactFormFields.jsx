import { sendContactData } from "../api/contactUsAPI";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/context";

const ContactFormField = () => {
  const { isOpen, setIsOpen } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    sendContactData(formData);
    alert("Your message has been sent successfully!");
    setFormData({
      full_name: "",
      email: "",
      title: "",
      description: "",
    });
  };

  return (
    <main className="mt-8">
      <div className="grid md:grid-cols-2 gap-3">
        <div className="border p-8 ">
          <p className="text-lg md:text-2xl font-EB text-[#cc0700] font-bold">
            How can we help you?
          </p>
          <p className="my-4">Tell us why you want to contact us</p>
          <form onSubmit={handleSubmit} className="space-y-4" action="">
            <input
              className="border px-3 py-2 w-full outline-none"
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              minLength={1}
              maxLength={100}
              placeholder="Full name"
            />
            <input
              className="border px-3 py-2 w-full outline-none"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={254}
              placeholder="Email"
            />
            <input
              className="border px-3 py-2 w-full outline-none"
              placeholder="Title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              maxLength={200}
            />
            <textarea
              className="border px-3 py-2 w-full outline-none h-52"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="border p-4 bg-[#cc0700] text-white"
            >
              Send message
            </button>
          </form>
        </div>
        <div className="border p-8 ">
          <p className="text-lg md:text-2xl font-EB text-[#cc0700] font-bold">
            Contact us through our dedicated helpline for assistance
          </p>
          <div className="my-4 space-y-4">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="black"
                  d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                ></path>
              </svg>

              <a
                className="border-b-2 border-[#cc0700]"
                href="tel:+46764057140"
              >
                +46764057140
              </a>
            </div>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000"
                  d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                />
              </svg>

              <a href="https://wa.me/qr/3YB2MTKZPFXUB1">WhatsApp us</a>
            </div>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="black"
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                ></path>
              </svg>
              <p>officeofstatsgh@gmail.com</p>
            </div>
          </div>
          <p>
            For inquiries, updates, or collaboration opportunities, feel free to
            reach out!
          </p>
        </div>
      </div>
    </main>
  );
};

export default ContactFormField;
