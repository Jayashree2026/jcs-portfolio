import { Mail, MapPin, ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative w-full bg-[#050509] text-gray-300 border-t border-gray-800 py-20 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* 🛰️ Left: Contact Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="p-3 rounded-full bg-blue-500/10">
                <Mail className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium text-white">Email</h4>
                <a
                  href="mailto:jayashreecs2026@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  jayashreecs2026@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-3 rounded-full bg-blue-500/10">
                <MapPin className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium text-white">Location</h4>
                <span className="text-gray-400 hover:text-blue-400 transition-colors">
                  Mangalore, Karnataka, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 🚀 Scroll-to-Top Button */}
        <div className="flex flex-col items-center justify-center md:items-end md:justify-end mt-6 md:mt-0">
          <a
            href="#hero"
            className="relative comet-btn p-5 rounded-full text-blue-400 bg-blue-500/20 backdrop-blur-md hover:bg-blue-500/30 transition-all duration-300 hover:scale-110 shadow-[0_0_30px_rgba(59,130,246,0.5)]"
          >
            <ArrowUp size={24} />
          </a>
          <p className="text-xs text-gray-500 mt-3 md:hidden">Back to top</p>
        </div>

      </div>
    </footer>
  );
};
