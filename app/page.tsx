"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ["#profile", "#about", "#projects", "#contact"];
  const [showCopied, setShowCopied] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const middleY = window.innerHeight / 2;
      const sectionDistances = sections.map(
        (id) => Math.abs((document.querySelector(id)?.getBoundingClientRect().top || 0) - middleY)
      );
      const current = sectionDistances.indexOf(Math.min(...sectionDistances));
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const section = document.querySelector(sections[index]);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("duoce2005@gmail.com");
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error("Gagal menyalin email:", err);
    }
  };

  return (
    <>
    <div className="fixed top-4 left-0 right-0 z-50 flex flex-row items-center px-8">
      <div className="flex flex-grow flex-col gap-1">
        <div className="flex h-[6px] bg-white"></div>
        <div className="flex h-[2px] bg-white"></div>
      </div>
      <div className="flex flex-row items-center gap-6 ml-8">
        <a href="https://www.instagram.com/c___elys04?igsh=MXZoMnpxdGJ1Z2l1dw==" target="_blank" rel="noopener noreferrer">
          <Image
            className="object-cover dark:invert"
            src="/logo-instagram.png"
            alt="instagram"
            width={60}
            height={60}
          />
        </a>
        <a href="https://github.com/claresta1704" target="_blank" rel="noopener noreferrer">
          <Image
            className="object-cover rounded-full dark:invert"
            src="/logo-github.png"
            alt="github"
            width={60}
            height={60}
          />
        </a>
        <a href="https://www.linkedin.com/in/claresta-elysia-755852332/" target="_blank" rel="noopener noreferrer">
          <Image
            className="object-cover rounded-full dark:invert"
            src="/logo-linkedin.png"
            alt="linkedin"
            width={60}
            height={60}
          />
        </a>
        <a onClick={handleCopyEmail} className="cursor-pointer hover:scale-110 transition-transform">
          <Image
            className="object-cover dark:invert"
            src="/logo-email.png"
            alt="email"
            width={60}
            height={60}
          />
        </a>
      </div>
    </div>

    {showCopied && (
      <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white px-6 py-3 rounded-lg z-[60] transition-all duration-500 ease-in-out 
        ${showCopied ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
        Alamat email telah disalin ke clipboard!
      </div>
    )}
    
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-50">
      {sections.map((_, index) => (
        <div
          key={index}
          onClick={() => scrollToSection(index)}
          className={`w-6 h-6 rounded-full border-2 border-white cursor-pointer transition-transform duration-300 ${
            activeSection === index ? "scale-125 bg-white" : "bg-transparent"
          }`}
        />
      ))}
    </div>

    <main id="profile" className="max-w-screen min-h-screen bg-[rgb(83,18,32)] flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          className="object-cover rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,1)] transition-shadow duration-300"
          src="/myphoto.jpg"
          alt="my photo"
          width={500}
          height={16}
        />
        <div className="flex flex-col justify-center items-start text-white gap-3">
          <h1 className="text-5xl font-bold">Hello There! I am</h1>
          <h1 className="text-5xl font-bold">CLARESTA ELYSIA</h1>
          <p className="text-lg max-w-xl">
            Thank you for visiting my portfolio
          </p>
          <a href="#projects" className="px-6 py-3 bg-black text-white rounded-full hover:bg-white hover:text-black transition-all">
            Download CV
          </a>
        </div>
      </div>
    </main>

      <section id="about" className="max-w-screen min-h-screen bg-[rgb(30,30,30)] lg:grid lg:grid-cols-2 flex flex-col justify-center m-0">
        <div className="absolute z-10 w-full lg:relative flex flex-col pt-10 lg-pl-10 px-10 gap-8">
          <h1 className="text-6xl font-extrabold text-white">About Me</h1>
          <p className="text-lg text-white">
            I was born on April 17, 2005. I am currently pursuing a Bachelor’s degree in Informatics Engineering at Tarumanagara University.
            I have experience in web design and web development, and I’m passionate about combining my love for art with my interest in technology.
            I possess strong creativity, problem-solving, and critical-thinking skills. I can work effectively both independently and as part of a team.
          </p>
          <h3 className="text-5xl font-bold text-white">Skills</h3>
          <ul className="list-inside text-lg text-white">
            <li>HTML | CSS | Javascript | C++ | Java | Python | Matlab</li>
            <li>Bootstrap | Tailwind CSS | Next JS | React JS | Express JS | Node JS | Angular JS</li>
            <li>Oracle (SQL Developer, APEX) | PostgreSQL | MongoDB</li>
            <li>Microsoft Word | Microsoft Excel | Microsoft PowerPoint | Canva | Figma</li>
          </ul>
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-10 animate-scroll">
              <Image src="/html.png" alt="HTML" width={60} height={60} />
              <Image src="/css.png" alt="CSS" width={60} height={60} />
              <Image src="/javascript.png" alt="JavaScript" width={60} height={60} />
              <Image src="/c++.png" alt="C++" width={60} height={60} />
              <Image src="/java.png" alt="Java" width={60} height={60} />
              <Image src="/python.png" alt="Python" width={60} height={60} />
              <Image src="/matlab.png" alt="JS" width={60} height={60} />
              <Image src="/bootstrap.png" alt="Bootstrap" width={60} height={60} />
              <Image src="/tailwind.png" alt="TailwindCSS" width={60} height={60} />
              <Image src="/next.png" alt="NextJS" width={60} height={60} />
              <Image src="/react.png" alt="ReactJS" width={60} height={60} />
              <Image src="/express.png" alt="ExpressJS" width={60} height={60} />
              <Image src="/node.png" alt="NodeJS" width={60} height={60} />
              <Image src="/angular.png" alt="AngularJS" width={60} height={60} />
              <Image src="/sqldev.svg" alt="SQLDeveloper" width={60} height={60} />
              <Image src="/postgre.png" alt="PostgreSQL" width={60} height={60} />
              <Image src="/mongodb.png" alt="MongoDB" width={60} height={60} />

              <Image src="/html.png" alt="HTML" width={60} height={60} />
              <Image src="/css.png" alt="CSS" width={60} height={60} />
              <Image src="/javascript.png" alt="JavaScript" width={60} height={60} />
              <Image src="/c++.png" alt="C++" width={60} height={60} />
              <Image src="/java.png" alt="Java" width={60} height={60} />
              <Image src="/python.png" alt="Python" width={60} height={60} />
              <Image src="/matlab.png" alt="JS" width={60} height={60} />
              <Image src="/bootstrap.png" alt="Bootstrap" width={60} height={60} />
              <Image src="/tailwind.png" alt="TailwindCSS" width={60} height={60} />
              <Image src="/next.png" alt="NextJS" width={60} height={60} />
              <Image src="/react.png" alt="ReactJS" width={60} height={60} />
              <Image src="/express.png" alt="ExpressJS" width={60} height={60} />
              <Image src="/node.png" alt="NodeJS" width={60} height={60} />
              <Image src="/angular.png" alt="AngularJS" width={60} height={60} />
              <Image src="/sqldev.svg" alt="SQLDeveloper" width={60} height={60} />
              <Image src="/postgre.png" alt="PostgreSQL" width={60} height={60} />
              <Image src="/mongodb.png" alt="MongoDB" width={60} height={60} />
            </div>
          </div>
        </div>
        <Image
          className="object-cover w-full h-[calc(100vh+40px)] brightness-50"
          src="/me2.jpg"
          alt="my photo"
          width={500}
          height={16}
        />
      </section>

      <section id="projects" className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full animate-slideShow bg-cover bg-center z-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="playfair text-8xl font-extrabold text-white">PROJECTS</h1>
          <a href="#projects" className="px-6 py-3 bg-black text-white rounded-full hover:bg-white hover:text-black transition-all">
            See More
          </a>
        </div>
      </section>

      <section id="contact" className="max-w-screen min-h-screen bg-[rgb(83,18,32)] flex flex-col lg:flex-row items-start lg:items-center ">
        <div className="relative z-10 w-full max-w-4xl p-6">
          <h1 className="text-8xl font-bold text-white">Let's get in touch</h1>
        </div>
        <div className="absolute w-2/3 h-full flex right-0 items-right justify-right bg-black">
          <Image
          className="object-cover w-full h-full brightness-50"
          src="/bunga.jpg"
          alt="flower"
          width={100}
          height={100}
          />
        </div>
        <div className="relative z-10 flex flex-col gap-8 p-6 lg:p-0">
          <div>
            <p className="text-2xl font-bold">Phone</p>
            <p className="text-xl">081221828822</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Email</p>
            <p className="text-xl">duoce2005@gmail.com</p>
          </div>
          <div>
            <p className="text-2xl font-bold" >Linkedin</p>
            <a className="text-xl" href="https://www.linkedin.com/in/claresta-elysia-755852332/">Check out my Linkedin profile</a>
          </div>
          <div>
            <p className="text-2xl font-bold" >Github</p>
            <a className="text-xl" href="https://github.com/claresta1704">Check out my Github Repositories</a>
          </div>
        </div>
      </section>

      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 text-center">
        <aside>
          <p>Copyright © {new Date().getFullYear()} Claresta Elysia - All right reserved</p>
        </aside>
      </footer>
    </>
  );
}
