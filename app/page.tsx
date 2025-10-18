import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

export default function Home() {
  return (
    <>
    <main className="max-w-screen min-h-screen bg-[rgb(83,18,32)] flex items-center justify-center p-6">
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

      <section className="max-w-screen min-h-screen bg-[rgb(30,30,30)] lg:grid lg:grid-cols-2 flex flex-col justify-center m-0">
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

      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full animate-slideShow bg-cover bg-center z-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="playfair text-8xl font-extrabold text-white">PROJECTS</h1>
          <a href="#projects" className="px-6 py-3 bg-black text-white rounded-full hover:bg-white hover:text-black transition-all">
            See More
          </a>
        </div>
      </section>

      <section className="max-w-screen min-h-screen bg-[rgb(83,18,32)] flex flex-col lg:flex-row items-start lg:items-center ">
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
