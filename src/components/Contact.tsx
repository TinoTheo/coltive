"use client";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center bg-[length:100%_auto] bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, var(--color-black, var(--color-primary))",
      }}
    >
      <div className="absolute inset-0 bg-[url(/images/contact-bg.jpg)] bg-cover bg-center bg-fixed  opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl px-4 md:px-8 py-12"
      >
        <div className="text-center mb-12 space-y-6">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-primary drop-shadow-lg"
            style={{ textShadow: "2px 2px 0 var(--color-accent-3)" }}
          >
           Special <span className="text-secondary"  style={{ textShadow: "2px 2px 0 white)" }}>Offer</span>
          </motion.h2>
          <p className="text-accent text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Sign up for a free 30-minute design consultation and discover how
            our team can help you achieve your branding goals.
          </p>
        </div>

        <form className="space-y-8 backdrop-blur-lg bg-accent/90 rounded-3xl p-6 md:p-12 shadow-2xl border-2 border-accent-2">
          <div className="space-y-6">
            {/* Name Field */}
            <div className="group relative">
              <UserIcon className="h-6 w-6 absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full pl-14 pr-6 py-4 bg-accent-2/20 rounded-xl border-2 border-accent-2 focus:border-primary focus:ring-2 focus:ring-primary/30 placeholder-gray-500 text-accent text-lg transition-all"
                placeholder="Full Name"
              />
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group relative">
                <PhoneIcon className="h-6 w-6 absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full pl-14 pr-6 py-4 bg-accent-2/20 rounded-xl border-2 border-accent-2 focus:border-primary focus:ring-2 focus:ring-primary/30 placeholder-gray-500 text-accent text-lg transition-all"
                  placeholder="Contact Number"
                />
              </div>

              <div className="group relative">
                <EnvelopeIcon className="h-6 w-6 absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full pl-14 pr-6 py-4 bg-accent-2/20 rounded-xl border-2 border-accent-2 focus:border-primary focus:ring-2 focus:ring-primary/30 placeholder-gray-500 text-accent text-lg transition-all"
                  placeholder="Email Address"
                />
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 px-8 bg-secondary hover:bg-secondary/90 rounded-xl font-bold text-accent text-xl shadow-lg hover:shadow-secondary/30 transition-all"
          >
            Initiate Collaboration
          </motion.button>
        </form>

        {/* Contact Information Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-accent"
        >
          <div className="flex items-center gap-3 group">
            <PhoneIcon className="h-6 w-6 text-primary" />
            <a
              href="tel:0614521481"
              className="hover:text-primary transition-colors"
            >
              061 452 1481
            </a>
          </div>

          <div className="flex items-center gap-3 group">
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-primary" />
            <a
              href="https://wa.me/0614521481"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              WhatsApp: 061 452 1481
            </a>
          </div>

          <div className="flex items-center gap-3 group">
            <EnvelopeIcon className="h-6 w-6 text-primary" />
            <a
              href="mailto:col@gmail.com"
              className="hover:text-primary transition-colors"
            >
              col@gmail.com
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
