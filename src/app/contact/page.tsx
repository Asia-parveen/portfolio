'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { BiEnvelope, BiPhone } from 'react-icons/bi';
import Link from 'next/link';

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setSuccessMsg('Thank you! Your message has been sent.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrorMsg('Oops! Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const whatsapp = '+923059989157';
  const email = 'beautyhealthytips177@gmail.com';

  return (
    <section className="bg-[#0f172a] text-white py-20 px-4 sm:px-8 md:px-16 lg:px-24 pt-40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-slate-300 text-lg">
              Whether you have a question or just want to say hello, use the form or contact me directly.
            </p>

            <div className="flex items-center gap-3">
              <BiPhone className="text-cyan-400 text-2xl" />
              <Link href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`} className="text-cyan-300 hover:text-cyan-200">
                {whatsapp}
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <BiEnvelope className="text-cyan-400 text-2xl" />
              <a href={`mailto:${email}`} className="text-cyan-300 hover:text-cyan-200">
                {email}
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#1e293b] p-6 rounded-lg shadow-md space-y-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded bg-[#0f172a] text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded bg-[#0f172a] text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 rounded bg-[#0f172a] text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-400 text-[#0f172a] font-bold py-2 rounded hover:bg-cyan-300 transition"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {successMsg && <p className="text-green-400">{successMsg}</p>}
            {errorMsg && <p className="text-red-400">{errorMsg}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;