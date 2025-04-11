import React, { useState } from 'react';
import { CornerDownRight } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeInUp, fadeInLeft, fadeInRight, fadeInBottom } from './styles/animations/Animations.jsx';
import ContactFormModal from '../src/components/contact/ContactFormModal.jsx';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className=" text-white">
            {/* Landing Section */}
            <motion.main
                id="home"
                className="container mx-auto py-60 flex items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-50">
                    {/* Text Section */}
                    <div className="lg:w-1/2 space-y-20">
                        {/* Heading */}
                        <motion.h1
                            className="font-display text-5xl md:text-8xl leading-tight"
                            variants={fadeInUp}
                        >
                            Welcome to<br />
                            My Digital<br />
                            Portfolio
                        </motion.h1>

                        {/* Subheading */}
                        <motion.div
                            className="inline-block border border-sand/30 rounded-full px-8 py-3"
                            variants={fadeInLeft}
                        >
                            <p className="text-3xl">Christopher Lundqvist / Software Developer</p>
                        </motion.div>

                        {/* Call to Action */}
                        <motion.div className="pt-12" variants={fadeInLeft}>
                            <a
                                href="#contact"
                                className="cursor-pointer group inline-flex items-center space-x-4 text-3xl hover:text-sand transition-all duration-300"
                            >
                                <CornerDownRight
                                    strokeWidth={0.75}
                                    className="w-15 h-15 transform group-hover:translate-x-2 transition-transform duration-300"
                                />
                                <motion.span variants={fadeInBottom}>Work with me today</motion.span>
                            </a>
                        </motion.div>
                    </div>

                    {/* Image Section */}
                    <motion.div className="lg:w-1/2 relative" variants={fadeInRight}>
                        <div className="w-[500px] h-[600px] rounded-[300px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=800&q=80"
                                alt="Professional portrait"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.main>


            {/* About Section */}
            <motion.section
                id="about"
                className="container mx-auto py-60 flex items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-50">
                    {/* Left Column: Text */}
                    <div className="lg:w-1/2 space-y-20">
                        {/* Heading */}
                        <motion.h2
                            className="font-display text-5xl md:text-8xl leading-tight"
                            variants={fadeInUp}
                        >
                            Who is<br />
                            Christopher?
                        </motion.h2>

                        {/* Paragraph */}
                        <motion.p
                            className="text-3xl leading-relaxed max-w-xl"
                            variants={fadeInLeft}
                        >
                            I&apos;m a developer with three years of experience. I&apos;m passionate about traveling, baking sourdough, and growing vegetables.
                        </motion.p>

                        {/* Divider Line */}
                        <motion.hr
                            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400"
                            variants={fadeInBottom}
                        />

                        {/* Decorative Line */}
                        <motion.div
                            className="w-24 h-0.5 bg-sand/30"
                            variants={fadeInBottom}
                        />
                    </div>

                    {/* Right Column: Image */}
                    <motion.div className="lg:w-1/2 relative" variants={fadeInRight}>
                        <div className="w-[500px] h-[600px] rounded-[300px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80"
                                alt="Reading a book"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.section>


            {/* Background Section */}
            <motion.section
                id="background"
                className="container mx-auto py-60 flex items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-50">
                    {/* Left Column */}
                    <div className="lg:w-1/2 space-y-16">
                        {/* Main Heading */}
                        <motion.h2
                            className="font-display text-8xl leading-tight"
                            variants={fadeInUp}
                        >
                            My Background
                        </motion.h2>

                        {/* Education & Work Experience Sections */}
                        <div className="space-y-16">
                            {/* Education */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <motion.div variants={fadeInLeft}>
                                        <CornerDownRight strokeWidth={0.75} className="w-15 h-15 text-sand" />
                                    </motion.div>
                                    <motion.h3
                                        className="text-3xl font-display"
                                        variants={fadeInUp}
                                    >
                                        Education
                                    </motion.h3>
                                </div>

                                <motion.ul
                                    className="list-disc space-y-4 text-gray-400 text-2xl"
                                    variants={fadeInBottom}
                                >
                                    <li>IT-Högskolan Gothenburg, App developer for iOS and Android, 2019 - 2021</li>
                                    <li>Solbergagymnasiet, Arvika</li>
                                </motion.ul>
                            </div>

                            {/* Work Experience */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <motion.div variants={fadeInLeft}>
                                        <CornerDownRight strokeWidth={0.75} className="w-15 h-15 text-sand" />
                                    </motion.div>
                                    <motion.h3
                                        className="text-3xl font-display"
                                        variants={fadeInUp}
                                    >
                                        Work Experience
                                    </motion.h3>
                                </div>

                                <motion.ul
                                    className="list-disc space-y-4 text-gray-400 text-2xl"
                                    variants={fadeInBottom}
                                >
                                    <li>Software developer @ ECARX, 2023 - Present</li>
                                    <li>Cilbuper AB - Consultant at ECARX, 2023 - 2024</li>
                                    <li>Xamera - Consultant at Hogia, 2022 - 2022</li>
                                </motion.ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <motion.div className="lg:w-1/2 relative" variants={fadeInRight}>
                        <div className="w-[500px] h-[600px] rounded-[300px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                                alt="Working on designs"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.section>


            {/* Contact Section */}
            <motion.section
                id="contact"
                className="container mx-auto px-4 py-60 flex items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                <div className="w-full space-y-60">
                    {/* Heading */}
                    <motion.h2
                        className="font-display text-8xl leading-tight"
                        variants={fadeInUp}
                    >
                        Reach Out<br />
                        to Me
                    </motion.h2>

                    {/* Contact Info Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-12"
                        variants={fadeInBottom}
                    >
                        {/* Address */}
                        <div className="space-y-4">
                            <h3 className="text-3xl font-display">Address</h3>
                            <p className="text-xl text-gray-400">
                                Vintergatan 7,<br />
                                417 58, Gothenburg
                            </p>
                        </div>

                        {/* Email */}
                        <div className="space-y-4">
                            <h3 className="text-3xl font-display">Email</h3>
                            <a
                                href="mailto:christopher.persson91@gmail.com"
                                className="text-xl text-gray-400 hover:text-sand transition-colors duration-300"
                            >
                                christopher.persson91@gmail.com
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="space-y-4">
                            <h3 className="text-3xl font-display">Phone</h3>
                            <a
                                href="tel:+46768204747"
                                className="text-xl text-gray-400 hover:text-sand transition-colors duration-300"
                            >
                                +46 768 20 47 47
                            </a>
                        </div>
                    </motion.div>

                    <div className="flex justify-end mx-12" >
                        <motion.button
                            type='button'
                            className="cursor-pointer group inline-flex items-center space-x-8 text-3xl hover:text-[#E5DDD3] transition-colors duration-300"
                            variants={fadeInLeft}
                            onClick={() =>
                                setIsModalOpen(true)}
                        >
                            <CornerDownRight className="w-10 h-10 transform group-hover:translate-x-2 transition-transform duration-300" />
                            <motion.span variants={fadeInBottom}>
                                Let&apos;s take a java
                            </motion.span>
                        </motion.button>
                    </div>

                    {isModalOpen && (
                        <ContactFormModal
                            isModalOpen={isModalOpen}
                            setIsModalOpen={setIsModalOpen}
                        />
                    )}
                </div>
            </motion.section>
        </div>
    );
};

export default App;
