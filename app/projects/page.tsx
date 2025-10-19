"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
      <div className="fixed top-4 left-0 z-100 px-8">
        <Image
          className="object-cover"
          src="/logo.png"
          alt="logo"
          height={120}
          width={120}
        />
      </div>
      <Link href="/" className="fixed top-4 right-0 z-100 px-8">
        <Image
          className="dark:invert cursor-pointer"
          src="/arrow-back.png"
          alt="Back"
          width={60}
          height={60}
        />
      </Link>

    <main className="min-h-screen max-w-screen bg-[rgb(18,50,20)] text-white flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-8">
      <div className="relative z-10 flex flex-col px-10 gap-10">
        <div className="flex flex-row items-center gap-10">
          <h1 className="oswald font-extrabold text-8xl">PROJECT 01</h1>
            <div className="group px-4 py-2 flex flex-row items-center gap-2 bg-white text-xl text-black rounded-full hover:bg-black hover:text-white transition-all">
              <Image
                className="object-cover w-full h-full group-hover:invert"
                src="/logo-github.png"
                alt="github"
                width={20}
                height={20}
              />
              <Link href="https://github.com/MrJov100/UAS_Front-End-Programming_Kelompok-6">
                Github
              </Link>
            </div>
        </div>
        <p className="text-xl w-full lg:w-1/2">
          This website was developed by me and my team as the final project for the Front-End Programming course. With theme of healthy living, this website was created to strengthen our understanding of web development using EJS, CSS, JavaScript, and database integration using PostgreSQL. FitSteps was designed to encourage readers to adopt a healthy lifestyle while promoting trendy sports shoes and providing schedules for upcoming sports events. The website also allows users to share their own posts about healthy living. Through this project, I improved my teamwork skill and gained valuable experience in building a database integrated web application.
        </p>
      </div>
      <div className="absolute w-2/3 h-[100vh] flex right-0 items-right justify-right bg-black">
        <Image
          className="object-cover w-full h-full brightness-40"
          src="/fitsteps.png"
          alt="fitsteps"
          width={100}
          height={100}
        />
      </div>
    </main>

    <section className="min-h-screen max-w-screen bg-[rgb(83,18,32)] text-white flex flex-col items-center justify-center lg:justify-end lg:flex-row gap-8">
      <div className="relative z-10 flex flex-col px-10 gap-10 items-end text-end">
        <div className="flex flex-row items-center gap-10">
          <h1 className="oswald font-extrabold text-8xl">PROJECT 02</h1>
            <div className="group px-4 py-2 flex flex-row items-center gap-2 bg-white text-xl text-black rounded-full hover:bg-black hover:text-white transition-all">
              <Image
                className="object-cover w-full h-full group-hover:invert"
                src="/logo-github.png"
                alt="github"
                width={20}
                height={20}
              />
              <Link href="https://github.com/claresta1704/Tugas3_535230026_Claresta-Elysia">
                Github
              </Link>
            </div>
        </div>
        <p className="text-xl w-full lg:w-1/2">
          This website was created as an assignment for a Front-End Programming course. The goal of this project was to learn about Bootstrap 5 in building a responsive website. I was instructed to create a website with a lifestyle theme, so I creatively showcased aspects of my current lifestyle and personal interests. I utilized various Bootstrap 5 components such as carousel, offcanvas, dropdown, card, toast, and form elements. Through this project, I was able to enhance my understanding of website design with Bootstrap 5 and further develop my creativity in designing visually appealing and functional web pages.
        </p>
      </div>
      <div className="absolute w-2/3 h-[100vh] flex left-0 items-left justify-left bg-black">
        <Image
          className="object-cover w-full h-full brightness-40"
          src="/lifestyle.png"
          alt="lifestyle"
          width={100}
          height={100}
        />
      </div>
    </section>

    <section className="min-h-screen max-w-screen bg-[rgb(18,50,20)] text-white flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-8">
      <div className="relative z-10 flex flex-col px-10 gap-10">
        <div className="flex flex-row items-center gap-10">
          <h1 className="oswald font-extrabold text-8xl">PROJECT 03</h1>
            <div className="group px-4 py-2 flex flex-row items-center gap-2 bg-white text-xl text-black rounded-full hover:bg-black hover:text-white transition-all">
              <Image
                className="object-cover w-full h-full group-hover:invert"
                src="/logo-github.png"
                alt="github"
                width={20}
                height={20}
              />
              <Link href="https://github.com/wei5002/UAS_SoftwareDevelopment_Kelompok7">
                Github
              </Link>
            </div>
        </div>
        <p className="text-xl w-full lg:w-1/2">
          This project was developed by my team and me as the final assignment for Software Development course. The main objective was to build a complete application from frontend to backend, integrated with a database. 
          DigiSteels is a web-based platform that offers high-quality stainless steel materials at various price in collaboration with our partner, Maju Makmur Stainless Steel. The website provides an efficient online ordering system that streamlines the distribution process of stainless steel materials for our partner.
          The project was built using Node.js, Express.js, Next.js, and MongoDB for the database.
        </p>
      </div>
      <div className="absolute w-2/3 h-[100vh] flex right-0 items-right justify-right bg-black">
        <Image
          className="object-cover w-full h-full brightness-40"
          src="/digisteels.png"
          alt="digisteels"
          width={100}
          height={100}
        />
      </div>
    </section>

    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 text-center">
      <aside>
        <p>Copyright © {new Date().getFullYear()} Claresta Elysia - All right reserved.</p>
      </aside>
    </footer>
    </>
  );
}
