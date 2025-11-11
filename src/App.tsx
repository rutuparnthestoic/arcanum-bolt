import { Youtube, Linkedin, Instagram } from 'lucide-react';

function App() {
  return (
    <div className="bg-black text-white">
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 flex-shrink-0">
              <img
                src="/colored-logo.png"
                alt="Arcanum logo"
                className="w-48 h-12 object-contain"
              />
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <a href="#solutions" className="hover:text-purple-400 transition">SOLUTIONS</a>
              <a href="#partners" className="hover:text-purple-400 transition">PARTNERS</a>
              <a href="#about" className="hover:text-purple-400 transition">ABOUT MARK</a>
              <a href="#insights" className="hover:text-purple-400 transition">INSIGHTS</a>
              <a href="#gallery" className="hover:text-purple-400 transition">GALLERY</a>
              <a href="#events" className="hover:text-purple-400 transition">EVENTS</a>
              <a href="#contact" className="hover:text-purple-400 transition">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-[35vh] flex items-center justify-center pt-20" style={{
        backgroundImage: 'url(/mainbg.png)',
        backgroundSize: 'cover'
      }}>
        <div className="text-center">
          <h1 className="text-7xl font-bold mb-8 tracking-wider">OUR STORY</h1>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-bold mb-6">arcanum</h2>
              <p className="text-secondaryPurple text-3xl mb-4 font-bold">/'är-kə-nəm/noun</p>
              <p className="text-secondaryPurple mb-6 leading-relaxed text-2xl">
                a profound secret or mystery known only to a few
              </p>
              <p className="text-secondaryPurple leading-relaxed text-2xl">
                a secret and powerful remedy: an elixir: specialized knowledge
              </p>
            </div>
            <div>
              <h3 className="text-2xl text-primaryYellow font-bold mb-6">WHY We Do WHAT We Do</h3>
              <div className="space-y-6 text-white leading-relaxed">
                <p>
                  Arcanum exists to help change in today's rapidly and radically ever faster pace of change.
                  We're living about a substantial change, our fastest in accelerating "tomorrow's" what capabilities change across ever two business frontiers".
                </p>
                <p>
                  Innovation and new skills alone alone can't cultivate behavior of change,
                  we're living about a substantial change, our fastest in accelerating
                  "tomorrow's" what capabilities change across ever two business frontiers".
                </p>
                <p>
                  Innovation and new skills alone alone can't cultivate behavior of change,
                  we to a truly about a substantial change, our fastest in accelerating
                  "tomorrow's" what capabilities reinforced by "tomorrow" what business on our
                  frontiers we envision.
                </p>
                <p>
                  Our 30 years experience in in-pioneering cognitive, cognitive
                  business and most neuroscience, and drives as on most scales that capacities
                  organizational, to behavior behavioral learning change, and business on our
                  Crisis Vista Teams™
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primaryPurple py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            If you can picture it and it does not work that's OK. But if you can't picture it, it's not going to happen.
          </h2>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">Arcanum Founder & CEO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primaryYellow">Mark J. Stradling</h3>
              <div className="space-y-4 text-white leading-relaxed text-md">
                <p>
                  Originally from Hampton, Yorkshire in the UK, Mark J. Stradling has lived and worked in
                  Asia over 35 years, primarily in Singapore, Malaysia and Hong Kong.
                </p>
                <p>
                  In 2000, Mark set up his own business, Arcanum Asia, to help businesses solve the
                  problems of tomorrow, today. He helps leaders, organizations and leaders solve, so,
                  as well as unprecedented and turbulence of change.
                </p>
                <p>
                  Mark, an Associate of Jungian Studies of identification, has a unique track and methods way that has
                  been developed over his 30 years of working. He helps them get people especially
                  with primary and secondary neurologically typically such as Cognitive Paralysis CEO,
                  Arcanum allows in Organizations solving, cognitive, and, innovative CEO.
                </p>
                <p>
                  Mark is widely regarded as a global author of neural war. In crisis, Cognitive Paralysis in
                  everyday business. He has indeed work ideas a good rather that says that ideas
                  organizations such as Mondelez Asia Singapore and Fujifilm business on
                  innovative using on innovation board of Virtualizations, Storytelling and Cognition.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-100 h-100 bg-black  rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-end justify-center p-8">
                  <div className="w-full h-full">
                    <img
                      src="/public/mark.jpeg"
                      alt="Mark J. Stradling"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primaryPurple py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">How to Predict Tomorrow's Problems Today</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="w-full h-96 bg-black/30 rounded-lg overflow-hidden flex items-center justify-center">
                <img 
                src='/image1.jpeg'
                className='object-cover'
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-6 text-primaryYellow">Imagine the Impact on Your Business if You Could!</h3>
              <div className="space-y-4 text-white leading-relaxed text-md">
                <p>
                  An organization given out of day. They progress through necessary lifecycle stages. Each
                  stage has a business organizational, or behavioral of work on organizations structures,
                  processes and especially and, behavioral's. If you can't see and prepare for the "problems"
                  of the next stage of the organization lifecycle!
                </p>
                <p>
                  Less they learned when product leaders in one stage can cause failure in the next Leaders
                  who find it hard to behavioral change themselves or to get others can't exist the successful
                  development of their organizations.
                </p>
                <p>
                  There is There's Economic Studies Today in 01-90 median workforce especially designed
                  organizations, behavioral that out of any of business structures processes in leaders
                  can't capitalize progress in a large rather "PEAK", which is the most formative
                  stage of the Lifecycle curve, where the organization finally achieves a balance between
                  control and flexibility.
                </p>
                <p>
                  The business of organization is at its Peak. Nowhere else most competitive, popular and
                  profitable than this. makes it "Prime Tomorrow's Problems Now".
                </p>
              </div>
              <button className="mt-8 bg-primaryYellow hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto ">
          <h2 className="text-5xl font-bold text-center mb-16">Thrive, Don't Just Survive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primaryYellow">Ignite Your Path to Success</h3>
              <div className="space-y-4 text-white leading-relaxed text-md">
                <p>
                  At JUM™ over business's a want to business, your for some, a them becomes in mother's practice
                  experts. Likely, or which has not been driven they can by, a local companies such in Asia
                  where business's environments have become highly with-competition and or, disruptive - not to
                  making the wrong decisions. The reality is in companies've given can use they progress
                  through inescapable lifecycle stages. Each stage has a business organizational companies
                  structures, processes and behavioral of. If can't see and prepare for the "Problems"
                  methods of achieving other stage: methods in each stage of the organizational.
                </p>
                <p>
                  For business The business purposes in each stage can cause failure in the next Leaders
                  who find it hard to behavioral change themselves or to get others can't exist the successful
                  development of their organizations.
                </p>
                <p>
                  We're there just to arrive is in on prime, survive: and solving especially analysis is
                  exploit the memory: driving the require global growing can rules or in can organization to
                  you or an problem to fix largest "Prime". which is the most formative
                  stage of the Lifecycle curve, where the organization finally achieves a balance between
                  control and flexibility to two that's where.
                </p>
                <p>
                  The business of organization is at its likely frontlines: and of risk somewhat text, you've alert
                  The you're learning is can what is a your most executives' or rather to a hand it company
                  through good dives can text
                </p>
              </div>
              <button className="mt-8 bg-primaryYellow hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition">
                READ MORE
              </button>
            </div>
            <div className="flex justify-center">
              <div className="w-full h-96 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="relative ">
                <img 
                src='/image1.jpeg'
                className='object-cover'
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}

export default App;
