import React from "react";
import GoogleFonts from "react-google-fonts";
import "./App.css";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-pink-100 to-pink-300">
      <GoogleFonts
        href="https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:wght@400;700&display=swap"
        fonts={[
          { font: "Lobster", weights: [400] },
          { font: "Roboto", weights: [400, 700] },
        ]}
      />
      <div
        className="bg-gradient-to-r from-pink-100 to-pink-300 p-0 m-0 min-h-screen rounded-lg flex flex-col"
        style={{
          // backgroundImage: `url('path/to/your/background-image.jpg')`,
          backgroundSize: "cover",
        }}
      >
        <nav className="flex items-center justify-between p-5 border-b-2 border-pink-800 bg-zinc-200/80">
          <h1 className="font-Lobster text-4xl justify-center text-pink-800">
            Hemamalini S
          </h1>
          <ul className="flex space-x-8 text-pink-800">
            <li className="text-lg transition ease-in-out delay-150 hover:scale-110">
              {" "}
              <a href="#About"> About me</a>
            </li>
            <li className="text-lg transition ease-in-out delay-150 hover:scale-110">
              {" "}
              <a href="#Skills"> Skills</a>
            </li>
            <li className="text-lg transition ease-in-out delay-150 hover:scale-110">
              <a href="#Projects">Projects</a></li>
            <li className="text-lg transition ease-in-out delay-150 hover:scale-110"><a href="#Contact">Contact</a></li>
          </ul>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/hemamalini_srinivas/"
              target="_blank"
            >
              <img
                src="https://imgs.search.brave.com/y0wg4Bs-IQbhxEnVpX1JdoMX15czTZTBB-fPROkOhCc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODg2NGVjNmQyNzgy/OWRiOWNmNmRhNTgu/cG5n"
                alt="instagram"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/hemamalini-srinivas-191a96256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <img
                src="https://imgs.search.brave.com/zwJFq8HZCfdNxCitURQ0hprWpjaaiQs7EpDv7WPysSo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvNDkvNDkwNjgu/cG5n"
                alt="linkedinlink"
                className="w-8 h-8 "
              />
            </a>
          </div>
        </nav>
        <div className="body1 flex items-center justify-center p-10 h-max">
          <img
            src="https://imgs.search.brave.com/PsIdoo7mNZhEUNKuoIueaxThdrf7gKDEsabjIwUR3NE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRhLzlh/L2I4LzRhOWFiODRj/MWY4NGYzZjU1OWE3/ZTA1MWZjMWQyN2Mx/LmpwZw"
            alt="my-image"
            className="w-64 border-2  border-black mr-20 justify-center rounded transition ease-in-out delay-150 hover:scale-110"
          />
          <section id="About" className="ml-10 w-1/3 border-2 border-pink-800 bg-cyan-100 rounded-xl p-14 bg-cyan-100 m-24">
            <h2 className="text-3xl font-Roboto font-semibold mb-4 text-pink-800">
              About Me
            </h2>
            <p className="text-lg text-pink-800">
              Hi! I'm Hemamalini, a passionate student with a keen interest in
              web development. I love creating beautiful and functional websites
              using modern technologies.
            </p>
          </section>
        </div>
      </div>
      <div className="body2 flex flex-row rounded-lg m-0">
        <section id="Skills" className=" w-1/2 border-2 border-pink-800 bg-cyan-100 rounded-xl p-14 bg-cyan-100 m-14">
          <h2 className="text-3xl font-Roboto font-semibold mb-4 text-pink-800">
            Skills
          </h2>
          <ul className="ml-6 text-pink-800">
            <li className="text-lg">HTML, CSS, JavaScript</li>
            <li className="text-lg">React.js</li>
            <li className="text-lg">Tailwind CSS</li>
          </ul>
        </section>

        <section id="Projects" className="w-1/2 border-2 border-pink-800 bg-cyan-100 rounded-xl p-14 bg-cyan-100 m-14">
          <h2 className="text-3xl font-Roboto font-semibold mb-4 text-pink-800">
            Projects
          </h2>
          <p className="text-lg text-pink-800">Does this count?</p>
        </section>

        <section id="Contact" className="w-1/3 border-2 border-pink-800 bg-cyan-100 rounded-xl p-14 bg-cyan-100 m-14">
          <h2 className="text-3xl font-Roboto font-semibold mb-4 text-pink-800">
            Contact
          </h2>
          <p className="text-lg text-pink-800">WhatsApp: 8660968853<br/></p>
          <p className="text-lg text-pink-800"><a href="mailto:hpinkkydoggy@gmail.com">Send an Email</a>
</p>
        </section>
      </div>
    </div>
  );
};

export default App;
