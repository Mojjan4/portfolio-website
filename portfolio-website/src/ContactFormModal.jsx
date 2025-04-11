import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import NotificationDialog from './NotificationDialog';

const ContactFormModal = ({ isModalOpen, setIsModalOpen }) => {

    const [notification, setNotification] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
            valid = false;
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
            valid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the form fields
        if (!validateForm()) return;

        setNotification(null);

        try {
            const result = await emailjs.sendForm("service_ce4saer", "template_ngpnh5t", e.target, {
                publicKey: "-3MTfcqMwHCQ-uom3",
            });
            console.log(result.text);
            setNotification({ message: 'Message sent successfully! I will get back to you soon!', type: 'success' });
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            setTimeout(() => {
                setIsModalOpen(false);
            }, 2000);
        } catch (error) {
            console.log(error.text);
            setNotification({ message: 'Failed to send message. Please try again later.', type: 'error' });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: ''
            }));
        }
    };

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

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`w-full bg-transparent border ${errors.name ? 'border-red-500' : 'border-sand/30'} rounded-lg px-4 py-3 focus:outline-none focus:border-sand transition-colors duration-300`}
                                placeholder="Your name"
                            />
                            {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full bg-transparent border ${errors.email ? 'border-red-500' : 'border-sand/30'} rounded-lg px-4 py-3 focus:outline-none focus:border-sand transition-colors duration-300`}
                                placeholder="your@email.com"
                            />
                            {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className={`w-full bg-transparent border ${errors.subject ? 'border-red-500' : 'border-sand/30'} rounded-lg px-4 py-3 focus:outline-none focus:border-sand transition-colors duration-300`}
                                placeholder="What's this about?"
                            />
                            {errors.subject && <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={4}
                                className={`w-full bg-transparent border ${errors.message ? 'border-red-500' : 'border-sand/30'} rounded-lg px-4 py-3 focus:outline-none focus:border-sand transition-colors duration-300`}
                                placeholder="Your message here..."
                            ></textarea>
                            {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#D4C5B3] hover:bg-[#E5DDD3] text-black font-medium rounded-lg px-6 py-3 flex items-center justify-center space-x-2 transition-colors duration-300"
                        >
                            <span>Send Message</span>
                            <Send className="w-5 h-5" />
                        </button>
                    </form>
                    <NotificationDialog {...notification} />
                </div>
            </div>
        )
    );
};

export default ContactFormModal;
