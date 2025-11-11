import NavBar from '../components/NavBar';
import Footer from '../components/Footer';  

function OurOfferings() {
  return (
    <div className="bg-black text-white">
      <NavBar />
      
      <section className="relative min-h-[35vh] flex items-center justify-center pt-20" style={{
        backgroundImage: 'url(/mainbg.png)',
        backgroundSize: 'cover'
      }}>
        <div className="text-center">
          <h1 className="text-7xl font-bold mb-8 tracking-wider">OUR OFFERINGS</h1>
        </div>
      </section>

      <section className="bg-primaryPurple py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Transforming organisations through strategic change, behavioural shifts, and compelling communication
          </h2>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="w-full h-96 bg-black/30 rounded-lg overflow-hidden flex items-center justify-center">
                <img 
                  src='/image1.jpeg'
                  alt="Corporate Lifecycles"
                  className='object-cover'
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-4">Corporate Lifecycles</h2>
              <h3 className="text-2xl font-bold mb-6 text-primaryYellow">Change from within, for businesses and people</h3>
              <div className="space-y-4 text-white leading-relaxed text-md">
                <p>
                  Our principal framework is the Adizes Corporate Lifecycle, a proven model for diagnosing 
                  organisational growth and guiding companies through the predictable stages of their development. 
                  Using the Lifecycle Curve, the PAEI Management Style Index, and CAPI (Integration of Authority, 
                  Power and Influence), we help leaders pinpoint where their organisation stands today and design 
                  practical pathways to reach its next stage of maturity.
                </p>
                <p>
                  These tools enable management teams to align vision, structure, and culture—creating the stability 
                  to perform and the agility to grow.
                </p>
              </div>
              <button className="mt-8 bg-primaryYellow hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primaryPurple py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Sales Enablement</h2>
              <h3 className="text-2xl font-bold mb-6 text-primaryYellow">Change behaviour by changing mindsets</h3>
              <div className="space-y-4 text-white leading-relaxed text-md">
                <p>
                  We believe that sales success is a mindset, not just a process. Our proprietary Sales 
                  Optimisation Framework helps organisations understand what truly drives buying behaviour and 
                  what limits sales performance.
                </p>
                <p>
                  We design and deliver transformational sales programmes that shift attitudes, develop 
                  consultative confidence, and embed repeatable success. The result: consistent growth through 
                  behavioural change that endures long after training ends.
                </p>
              </div>
              <button className="mt-8 bg-primaryYellow hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition">
                READ MORE
              </button>
            </div>
            <div className="order-2 md:order-1">
              <div className="w-full h-96 bg-black/30 rounded-lg overflow-hidden flex items-center justify-center">
                <img 
                  src='/image1.jpeg'
                  alt="Sales Enablement"
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="w-full h-96 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="relative">
                  <img 
                    src='/image1.jpeg'
                    alt="Message Construction"
                    className='object-cover'
                  />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-4">Message Construction</h2>
              <h3 className="text-2xl font-bold mb-6 text-primaryYellow">Change perceptions and emotions</h3>
              <div className="space-y-4 text-white leading-relaxed text-md">
                <p>
                  In a world crowded with information, only the right message cuts through. We help businesses 
                  shape and communicate their value with clarity and conviction.
                </p>
                <p>
                  From crafting a compelling Value Proposition to defining The Big Idea or building 
                  Challenge-Based Messaging, we ensure your message speaks to both reason and emotion. 
                  Storytelling becomes strategy—transforming the way customers think, feel, and act.
                </p>
              </div>
              <button className="mt-8 bg-primaryYellow hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default OurOfferings;