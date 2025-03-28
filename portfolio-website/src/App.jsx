import React from 'react';
import { ArrowRight } from 'lucide-react';

const App = () => {
  return (
    <div className="bg-midnight text-white">
      {/* Landing Section */}
      <main className="container mx-auto px-4 min-h-screen flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="font-display text-5xl md:text-7xl leading-tight">
              Welcome to<br />
              My Digital<br />
              Portfolio
            </h1>

            <div className="inline-block border border-sand/30 rounded-full px-8 py-3">
              <p className="text-lg">Christopher Lundqvist / Software Developer</p>
            </div>

            <div className="pt-12">
              <a
                href="#about"
                className="group inline-flex items-center space-x-4 text-xl hover:text-sand transition-colors"
              >
                <span>Work with me today</span>
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="w-[500px] h-[600px] rounded-[300px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=800&q=80"
                alt="Professional portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 min-h-screen flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="font-display text-5xl md:text-7xl leading-tight">
              Who is<br />
              Christopher?
            </h2>

            <p className="text-xl leading-relaxed max-w-xl">
              I'm a developer with three years of experience. I'm passionate about traveling, baking sourdough, and growing vegetables.
            </p>

            <div className="w-24 h-0.5 bg-sand/30"></div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="w-[500px] h-[600px] rounded-[300px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80"
                alt="Reading a book"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section id="background" className="container mx-auto px-4 min-h-screen flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 space-y-16">
            <h2 className="font-display text-7xl leading-tight">
              My Background
            </h2>

            <div className="space-y-16">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <ArrowRight className="w-6 h-6 text-sand" />
                  <h3 className="text-2xl font-display">Education</h3>
                </div>
                <ul className="space-y-4 text-gray-400">
                  <li>MFA from the Ecole de Talens, 2019</li>
                  <li>BFA from the Grover Wood Art Institute, 2018</li>
                </ul>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <ArrowRight className="w-6 h-6 text-sand" />
                  <h3 className="text-2xl font-display">Work Experience</h3>
                </div>
                <ul className="space-y-4 text-gray-400">
                  <li>Freelance Graphic Designer and Illustrator, 2022-present</li>
                  <li>Senior Graphic Designer at the Talens Insitut, 2021-22</li>
                  <li>Junior Creative at the NXTR Design Studio, 2020-21</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="w-[500px] h-[600px] rounded-[300px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                alt="Working on designs"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
