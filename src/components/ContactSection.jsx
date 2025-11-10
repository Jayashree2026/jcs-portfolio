import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";
import meteor from "@/assets/moon_image.png"; // 🪐 your meteorite image

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 📨 EMAILJS CONFIG — from your .env file
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      () => {
        toast({
          title: "✅ Message Sent Successfully!",
          description:
            "Thank you for reaching out — I'll get back to you soon.",
        });
        e.target.reset();
        setIsSubmitting(false);
      },
      (error) => {
        toast({
          title: "❌ Message Failed",
          description: `Something went wrong: ${error.text}`,
        });
        setIsSubmitting(false);
      }
    );
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative text-white overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* 🌠 Left Side — Meteorite Animation */}
        <div className="relative flex justify-center items-center w-full lg:w-1/2">
          <img
            src={meteor}
            alt="Meteorite"
            className="w-[22rem] h-[22rem] object-contain meteor-float glow-animate drop-shadow-[0_0_60px_rgba(96,165,250,0.9)]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-500/10 blur-3xl"></div>
        </div>

        {/* ✉️ Right Side — Contact Form */}
        <div className="w-full lg:w-1/2 bg-gray-900/40 p-10 rounded-2xl shadow-lg border border-gray-800 backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-gray-400">Touch</span>
          </h2>

          <p className="text-center text-gray-400 mb-10">
            Have a project in mind or want to collaborate? Feel free to reach
            out.
          </p>

          <div className="bg-gray-100 p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl text-black font-semibold mb-6">
              Send a Message
            </h3>

            <form className="space-y-6 text-black" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-black focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-black focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-black focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-moon-button border-black w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
