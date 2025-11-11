
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function OurApproach() {
  return (
    <div className="bg-black text-white">
      <NavBar/>

      {/* Hero Section: Styled like OurStory Hero */}
      <section className="relative min-h-[35vh] flex items-center justify-center pt-20" style={{
        backgroundImage: 'url(/mainbg.png)',
        backgroundSize: 'cover'
      }}>
        <div className="text-center">
          <h1 className="text-7xl font-bold mb-8 tracking-wider">OUR APPROACH</h1>
        </div>
      </section>

      {/* --- Principle 1: Impact Transformation --- */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* This title section is only in the first block */}
          <h2 className="text-5xl font-bold text-center mb-8">Our Guiding Principles</h2>
          <p className="text-center text-xl text-gray-300 mb-20 max-w-3xl mx-auto">
            Arcanum Asia’s approach is built on five guiding principles:
          </p>

          {/* Principle 1 Grid (Text Left, Image Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primaryYellow">Impact Transformation</h3>
              <p className="text-white leading-relaxed text-md">
                measurable, evidence-based outcomes that drive visible business change.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full h-80 rounded-lg overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/impact/600/400" // <-- Dummy Image
                  alt="Impact Transformation" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Principle 2: Synergistic Workshops --- */}
      <section className="bg-primaryPurple py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Principle 2 Grid (Image Left, Text Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <div className="w-full h-80 rounded-lg overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/workshops/600/400" // <-- Dummy Image
                  alt="Synergistic Workshops" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4 text-primaryYellow">Synergistic Workshops</h3>
              <p className="text-white leading-relaxed text-md">
                immersive, experiential sessions that activate learning and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Principle 3: Exclusive Content --- */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Principle 3 Grid (Text Left, Image Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primaryYellow">Exclusive Content and Partners</h3>
              <p className="text-white leading-relaxed text-md">
                proven global tools and proprietary IP developed through years of applied experience.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full h-80 rounded-lg overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/exclusive/600/400" // <-- Dummy Image
                  alt="Exclusive Content and Partners" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Principle 4: Adaptable Roadmaps --- */}
      <section className="bg-primaryPurple py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Principle 4 Grid (Image Left, Text Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <div className="w-full h-80 rounded-lg overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/adaptable/600/400" // <-- Dummy Image
                  alt="Adaptable Roadmaps" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4 text-primaryYellow">Adaptable Roadmaps</h3>
              <p className="text-white leading-relaxed text-md">
                flexible frameworks tailored to your organisation’s stage, pace, and people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Principle 5: Evidence-Based --- */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Principle 5 Grid (Text Left, Image Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primaryYellow">Evidence-Based and Proven Methods</h3>
              <p className="text-white leading-relaxed text-md">
                every insight grounded in cognitive science, behavioural psychology, and real business practice.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full h-80 rounded-lg overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/evidence/600/400" // <-- Dummy Image
                  alt="Evidence-Based and Proven Methods" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer: Re-used from OurStory.tsx */}
      <Footer/>
    </div>
  );
}

export default OurApproach;
