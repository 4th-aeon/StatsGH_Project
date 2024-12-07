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
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000"
                  d="M12.043 6.925a4.985 4.985 0 0 0-4.98 4.979c-.001.94.263 1.856.761 2.649l.118.188l-.503 1.837l1.885-.494l.181.108a4.97 4.97 0 0 0 2.535.693h.001a4.986 4.986 0 0 0 4.979-4.978a4.95 4.95 0 0 0-1.456-3.522a4.95 4.95 0 0 0-3.521-1.46m2.928 7.118c-.125.35-.723.668-1.01.711a2.04 2.04 0 0 1-.943-.059a9 9 0 0 1-.853-.315c-1.502-.648-2.482-2.159-2.558-2.26c-.074-.1-.61-.812-.61-1.548c0-.737.386-1.099.523-1.249a.55.55 0 0 1 .4-.186c.1 0 .199.001.287.005c.092.004.215-.035.336.257c.125.3.425 1.036.462 1.111s.062.162.013.262c-.05.101-.074.162-.15.25c-.074.088-.157.195-.224.263c-.075.074-.153.155-.066.305c.088.149.388.64.832 1.037c.572.51 1.055.667 1.204.743c.15.074.237.063.325-.038c.087-.101.374-.437.474-.586c.1-.15.199-.125.337-.076c.137.051.873.412 1.022.487c.148.074.249.112.287.175c.036.062.036.361-.088.711"
                />
                <path
                  fill="#000"
                  d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-7.96 14.896h-.002a6 6 0 0 1-2.862-.729L6 18l.85-3.104a5.99 5.99 0 0 1 5.19-8.983a5.95 5.95 0 0 1 4.238 1.757a5.95 5.95 0 0 1 1.751 4.237a6 6 0 0 1-5.989 5.989"
                />
              </svg>

              <a
                className="border-b-2 border-[#cc0700]"
                href="https://wa.me/qr/3YB2MTKZPFXUB1"
              >
                WhatsApp us
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
