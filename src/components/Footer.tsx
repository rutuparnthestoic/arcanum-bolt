import { Youtube, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded"></div>
                <span className="text-xl font-bold">ARCANUM</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-purple-600 transition">
                  <Youtube size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-purple-600 transition">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-purple-600 transition">
                  <Instagram size={16} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-yellow-400 font-bold mb-4 text-sm">NAVIGATION</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition">Solutions</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Who we & What We Do</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Market Link</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Call BPO</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-yellow-400 font-bold mb-4 text-sm">SOLUTIONS</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition">Enterprise Change</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Executive Match Courses</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-yellow-400 font-bold mb-4 text-sm">PARTNERS</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition">World Class our Trump</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Corporate Universities</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex justify-between items-center text-xs text-gray-600">
            <p>COPYRIGHT 2022 ARCANUM ASIA. ALL RIGHTS RESERVED.</p>
            <a href="#" className="hover:text-purple-400 transition">PRIVACY POLICY</a>
          </div>
        </div>
      </footer>
  );
}

export default Footer;