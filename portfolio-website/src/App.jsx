import React from 'react';
import { CornerDownRight } from 'lucide-react';

const App = () => {
    return (
        <div className="bg-midnight text-white">
            {/* Landing Section */}
            <main className="container mx-auto py-60 flex items-center">
                <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-50">
                    <div className="lg:w-1/2 space-y-20 ">
                        <h1 className="font-display text-5xl md:text-8xl leading-tight slide-from-top">
                            Welcome to<br />
                            My Digital<br />
                            Portfolio
                        </h1>

                        <div className="inline-block border border-sand/30 rounded-full px-8 py-3 slide-from-left">
                            <p className="text-3xl">Christopher Lundqvist / Software Developer</p>
                        </div>

                        <div className="pt-12">
                            <a
                                href="#contact"
                                className="group inline-flex items-center space-x-4 text-3xl hover:text-sand transition-all duration-300"
                            >
                                <CornerDownRight strokeWidth={0.75} className="w-15 h-15 transform group-hover:translate-x-2 transition-transform duration-300 slide-from-left" />
                                <span className="slide-from-bottom">Work with me today</span>
                            </a>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative slide-from-right">
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
            <section id="about" className="container mx-auto py-60 flex items-center">
                <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-50">
                    <div className="lg:w-1/2 space-y-20 ">
                        <h2 className="font-display text-5xl md:text-8xl leading-tight slide-from-top">
                            Who is<br />
                            Christopher?
                        </h2>

                        <p className="text-3xl leading-relaxed max-w-xl slide-from-left">
                            I&apos;m a developer with three years of experience. I&apos;m passionate about traveling, baking sourdough, and growing vegetables.
                        </p>
                        <hr
                            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400 slide-from-bottom" />

                        <div className="w-24 h-0.5 bg-sand/30"></div>
                    </div>

                    <div className="lg:w-1/2 relative slide-from-right">
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
            <section id="background" className="container mx-auto py-60 flex items-center">
                <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-50">
                    <div className="lg:w-1/2 space-y-16 ">
                        <h2 className="font-display text-8xl leading-tight slide-from-top">
                            My Background
                        </h2>

                        <div className="space-y-16">
                            <div className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <CornerDownRight strokeWidth={0.75} className="w-15 h-15 text-sand slide-from-left" />
                                    <h3 className="text-3xl font-display slide-from-top">Education</h3>
                                </div>
                                <ul className="list-disc space-y-4 text-gray-400 text-2xl slide-from-bottom">
                                    <li>IT-Högskolan Gothenburg, App developer for iOS and Android, 2019 - 2021</li>
                                    <li>Solbergagymnasiet, Arvika </li>
                                </ul>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <CornerDownRight strokeWidth={0.75} className="w-15 h-15 text-sand slide-from-left" />
                                    <h3 className="text-3xl font-display slide-from-top">Work Experience</h3>
                                </div>
                                <ul className="list-disc space-y-4 text-gray-400 text-2xl slide-from-bottom">
                                    <li>Software developer @ ECARX, 2023 - Present</li>
                                    <li>Cilbuper AB - Consultant at ECARX, 2023 - 2024</li>
                                    <li>Xamera - Consusltant at Hogia, 2022 - 2022</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative slide-from-right">
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

            {/* Contact Section */}
            <section id="contact" className="container mx-auto px-4 py-60 flex items-center">
                <div className="w-full space-y-60">
                    <h2 className="font-display text-8xl leading-tight slide-from-top">
                        Reach Out<br />
                        to Me
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 slide-from-bottom">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-display">Address</h3>
                            <p className="text-xl text-gray-400">
                                Vintergatan 7,<br />
                                417 58, Gothenburg
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-3xl font-display">Email</h3>
                            <a
                                href="mailto:christopher.persson91@gmail.com" //TODO fix this
                                className="text-xl text-gray-400 hover:text-sand transition-colors duration-300"
                            >
                                christopher.persson91@gmail.com
                            </a>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-3xl font-display">Phone</h3>
                            <a
                                href="tel:+11234567890" //TODO: Add phone number
                                className="text-xl text-gray-400 hover:text-sand transition-colors duration-300"
                            >
                                +46 768 20 47 47
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-end mx-50">
                        <a
                            href="#"
                            className="group inline-flex items-center space-x-4 text-3xl hover:text-sand transition-colors duration-300"
                        >
                            <CornerDownRight className="w-10 h-10 transform group-hover:translate-x-2 transition-transform duration-300 slide-from-left" />
                            <span className='slide-from-bottom'>Let&apos;s take a java</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
