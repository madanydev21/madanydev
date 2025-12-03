import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#1a1a22] to-[#0a0a0f] text-white font-inter relative overflow-hidden">

      {/* Glow Elements */}
      <div className="absolute top-20 right-20 w-[350px] h-[350px] bg-orange-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-10 right-10 w-[180px] h-[180px] bg-orange-300/50 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-16 w-[260px] h-[260px] bg-orange-500/20 rounded-full blur-3xl"></div>

      {/* Stars */}
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/40 animate-pulse"
          style={{
            width: Math.random() * 3 + 1 + "px",
            height: Math.random() * 3 + 1 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            animationDuration: Math.random() * 2 + 1 + "s",
          }}
        ></div>
      ))}

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 relative z-10 w-full">
        <h1 className="text-xl font-bold text-orange-300">MadanyDev</h1>

        <div className="space-x-6 text-gray-300">
          <a href="#about" className="hover:text-orange-300 transition">About</a>
          <a href="#projects" className="hover:text-orange-300 transition">Projects</a>
          <a href="#contact" className="hover:text-orange-300 transition">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-8 py-24 text-center relative z-10 w-full">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-5 text-orange-300 drop-shadow-[0_0_15px_rgba(255,140,0,0.6)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="bg-gradient-to-r from-orange-200 via-yellow-400 to-orange-300 bg-[length:200%_200%] text-transparent bg-clip-text"
          >
            Fullstack Developer
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
        >
          Portofolio saya dengan beberapa project yang telah dkerjakan.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl text-white font-medium shadow-lg bg-white/10 hover:shadow-orange-500/40 transition"
          >
            Lihat Proyek
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-white/10 hover:shadow-orange-500/40 shadow-lg font-medium border border-white/20 backdrop-blur-sm transition flex items-center gap-2"
          >
            <Sparkles size={18} /> Hubungi Saya
          </a>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className=" px-8 lg:px-20 py-20 w-full relative z-10">
        <h3 className="text-3xl font-semibold text-orange-300 mb-4">About Me</h3>
        <p className="text-gray-300 leading-relaxed max-w-6xl text-justify">
          Saya adalah seorang developer yang berfokus pada pengembangan aplikasi web modern,
          khususnya menggunakan <span className="text-orange-300 font-semibold">Laravel</span>,
          <span className="text-orange-300 font-semibold">REST API</span>,
          integrasi pembayaran seperti <span className="text-orange-300 font-semibold">Midtrans Snap</span>,
          serta desain antarmuka berbasis <span className="text-orange-300 font-semibold">Tailwind CSS</span>.
          <br /><br />
          Saya terbiasa membangun sistem yang cepat, rapi, dan mudah dikembangkan—mulai dari backend
          yang terstruktur, optimalisasi query database, pengamanan API, hingga pengalaman frontend yang responsif.
          <br /><br />
          Dalam pekerjaan, saya mengutamakan clean code, efisiensi, dan solusi yang dapat digunakan untuk
          jangka panjang. Saya juga nyaman bekerja dengan konsep asinkron, AJAX, dan integrasi pihak ketiga.
          <br /><br />
          Saat ini saya fokus mengembangkan project–project yang melibatkan
          otomasi transaksi, dashboard admin, sistem pemesanan, serta aplikasi berbasis API.
          Saya selalu berusaha belajar hal baru dan mengeksplor teknologi modern untuk meningkatkan kualitas pekerjaan saya.
        </p>

      </section>

      {/* PROJECTS */}
      {/* PROJECTS */}
      <section id="projects" className="px-8 lg:px-20 py-20 w-full relative z-10">
        <h3 className="text-3xl font-semibold text-orange-300 mb-8">Projects</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

          {/* Project 1 */}
          <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:scale-[1.03] transition shadow-lg backdrop-blur-md">
            <img
              src="https://source.unsplash.com/600x400/?restaurant,food"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold text-lg mb-2">Sistem Pemesanan Restoran</h4>
            <p className="text-gray-400 text-sm">Laravel + Tailwind, AJAX Cart, Midtrans</p>
          </div>

          {/* Project 2 */}
          <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:scale-[1.03] transition shadow-lg backdrop-blur-md">
            <img
              src="https://source.unsplash.com/600x400/?payment,technology"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold text-lg mb-2">PPOB Midtrans Snap</h4>
            <p className="text-gray-400 text-sm">Integrasi pembayaran realtime, webhook, status checker</p>
          </div>

          {/* Project 3 */}
          <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:scale-[1.03] transition shadow-lg backdrop-blur-md">
            <img
              src="https://source.unsplash.com/600x400/?dashboard,data"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold text-lg mb-2">Admin Dashboard Responsive</h4>
            <p className="text-gray-400 text-sm">Dynamic table, chart, live monitoring</p>
          </div>

        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="px-8 lg:px-20 py-20 w-full relative z-10">
        <h3 className="text-3xl font-semibold text-orange-300 mb-4">Contact</h3>
        <p className="text-gray-300 mb-2">Email: madanydev21@gmail.com</p>
        <p className="text-gray-300">GitHub: github.com/madanydev21</p>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 py-8 text-sm border-t border-white/10 relative z-10 w-full">
        © 2025 Madany Dev — All Rights Reserved
      </footer>
    </div>
  );
}
