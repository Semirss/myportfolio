import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactMe = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_h6a0se5",     
        "template_coym5uq",    
        formRef.current,
        "x8C87OfR77CuGXtpb"      
      )
      .then(() => {
        formRef.current?.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setLoading(false);
      });
  };

  return (
    <div id="Contact" className="w-full py-16 px-4 bg-gradient-to-br from-black to-zinc-700 text-white">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-zinc-900 p-8 rounded-2xl shadow-2xl border border-amber-50"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full px-4 py-2 bg-black border border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="from_email"
              required
              className="w-full px-4 py-2 bg-black border border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full px-4 py-2 bg-black border border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white resize-none"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactMe;
