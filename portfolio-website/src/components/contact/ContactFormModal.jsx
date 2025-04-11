import React, { useState } from 'react';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactFormModal = ({ isModalOpen, setIsModalOpen }) => {

    return (
        isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-midnight/80 backdrop-blur-sm"
                    onClick={() => setIsModalOpen(false)}
                ></div>

                <div className="relative bg-black border border-[#D4C5B3] rounded-3xl p-8 md:p-12 w-full max-w-2xl mx-4 slide-from-top">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-6 right-6 text-sand hover:text-[#E5DDD3] transition-colors duration-300"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <h3 className="font-display text-4xl mb-8">Let&apos;s Connect</h3>

                    <ContactForm
                        setIsModalOpen={setIsModalOpen}
                    />
                </div>
            </div>
        )
    );
};

export default ContactFormModal;
