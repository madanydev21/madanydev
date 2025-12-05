import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function App() {

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  const fadeScale = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  const fadeContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
        ease: "easeOut"
      }
    }
  };

  const fadeItem = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const skillsContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
        ease: "easeOut"
      }
    }
  };

  const skillItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };


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
      <section id="about" className="px-8 lg:px-20 py-20 w-full relative z-10">
        <motion.h3
          className="text-3xl font-semibold text-orange-300 mb-4 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h3>

        <motion.p
          className="text-gray-300 leading-relaxed max-w-6xl text-justify"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
        </motion.p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-8 lg:px-20 py-20 w-full relative z-10">
        <motion.h3
          className="text-3xl font-semibold text-orange-300 mb-8 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[
            {
              img: "./resto.png",
              title: "Restaurant App",
              desc: "Sistem Pemesanan Meja dan Menu Restoran secara Online."
            },
            {
              img: "./ppob.png",
              title: "PPOB App",
              desc: "Aplikasi PPOB untuk pelayanan Transaksi Online dengan multi payment dari Produk Digiflazz."
            },
            {
              img: "./gps.png",
              title: "GPS Tracker",
              desc: "Implementasi Web Tracking Kapal & Kendaraan yang terhubung dengan GPS secara realtime."
            },

            {
              img: "./tripay.png",
              title: "Tripay Integration",
              desc: "Integrasi pembayaran realtime, webhook, checker dengan Tripay."
            },
            {
              img: "./pos.png",
              title: "POS Kasir",
              desc: "Aplikasi POS untuk manajemen transaksi oleh Kasir."
            },
            {
              img: "./lms.png",
              title: "LMS App (in progress)",
              desc: "Aplikasi Manajemen Pendidikan untuk Sekolah, Pesantren & Kampus."
            }
          ].map((p, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-white/10 p-5 rounded-xl shadow-lg 
             backdrop-blur-md hover:shadow-orange-500/40"
              variants={fadeScale}
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
                duration: 0.6,
                delay: i * 0.2
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <img src={p.img} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h4 className="font-semibold text-lg mb-2">{p.title}</h4>
              <p className="text-gray-400 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-10 py-20 relative z-10 w-full">
        <motion.h3
          className="text-3xl font-semibold text-orange-300 mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Skills
        </motion.h3>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6 w-full"
          variants={skillsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
            { name: "Tailwind", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
            { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
            { name: "Laravel", img: "https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg" },
            { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "Supabase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
            { name: "Firebase", img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
            { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "Postman", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
            { name: "Swagger", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" },
            { name: "Linux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
          ].map((skill, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-2 bg-white/5 border border-white/10 
             rounded-xl py-5 px-3 shadow-lg backdrop-blur-md hover:shadow-orange-500/40"
              variants={skillItem}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
            >
              <img
                src={skill.img}
                className="w-12 h-12 drop-shadow-[0_0_10px_rgba(255,140,0,0.6)]"
              />
              <p className="text-sm text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="px-10 py-20 relative z-10 w-full">
        <motion.h3
          className="text-3xl font-semibold text-orange-300 mb-6 text-center"
          variants={fadeItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Contacts
        </motion.h3>

        <motion.div
          className="flex flex-wrap gap-6 text-gray-300 justify-center"
          variants={fadeContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { icon: <Mail size={20} />, label: "madanydev21@gmail.com" },
            { icon: <Phone size={20} />, label: "08xxxxxxxxxx" },
            { icon: <Github size={20} />, label: "GitHub", url: "https://github.com" },
            { icon: <Instagram size={20} />, label: "Instagram", url: "https://instagram.com" },
            { icon: <Linkedin size={20} />, label: "LinkedIn", url: "https://linkedin.com" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.url || "#"}
              variants={fadeItem}
              className="flex items-center gap-3 hover:text-orange-300"
            >
              {item.icon} {item.label}
            </motion.a>
          ))}
        </motion.div>
      </section>


      {/* FOOTER */}
      <footer className="text-center text-gray-500 py-8 text-sm border-t border-white/10 relative z-10 w-full">
        © 2025 Madany Dev — All Rights Reserved
      </footer>
    </div>
  );
}
