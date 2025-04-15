import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RishiYatra</h3>
            <p className="text-teal-200">
              Curated adventures for students in the heart of Rishikesh.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-teal-200 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-teal-200 hover:text-white transition-colors"
                >
                  Activities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-teal-200 hover:text-white transition-colors"
                >
                  Packages
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-teal-200 hover:text-white transition-colors"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-teal-200">
                <MapPin size={18} className="mr-2" />
                <span>Radha Valley, Mathura</span>
              </li>
              <li className="text-teal-200">work.lalitchaudhary@gmail.com</li>
              <li className="text-teal-200">+91 8445646300</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4"> Special</h3>
            <p className="text-teal-200 mb-4">
              Sign up for exclusive university discounts and packages.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-teal-800 border border-teal-600 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 rounded-r-lg py-2 px-4 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-800 mt-8 pt-8 text-center text-teal-400 text-sm">
          <p>© 2025 RishiYatra. Special packages for students.</p>
        </div>
      </div>
    </footer>
  );
}
