function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-5 bg-black border-b border-emerald-500 sticky top-0 z-50">
        <h1 className="text-xl font-bold text-emerald-400">
          Misbah Firdose H
        </h1>

        <div className="space-x-6">
          <a href="#about" className="hover:text-emerald-400">About</a>
          <a href="#projects" className="hover:text-emerald-400">Projects</a>
          <a href="#clubs" className="hover:text-emerald-400">Clubs & Leadership</a>
          <a href="#contact" className="hover:text-emerald-400">Contact</a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center text-center py-20">

        <img
          src="/misbah.jpeg"
          alt="profile"
          className="w-40 h-40 object-cover border-4 border-emerald-500"
        />

        <h1 className="text-5xl font-bold">
          <span className="text-emerald-400">Misbah Firdose H</span>
        </h1>

        <p className="text-xl mt-4 text-gray-400">
          Full Stack Developer | AI Enthusiast | Software Developer
        </p>

        {/* BUTTONS */}
        <div className="mt-6 space-x-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-emerald-500 text-black px-6 py-2 rounded hover:bg-emerald-400 transition"
          >
            View Resume
          </a>

          <a
            href="https://github.com/misbah0786"
            target="_blank"
            rel="noreferrer"
            className="border border-emerald-500 px-6 py-2 rounded hover:bg-emerald-500 hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/misbah-firdose-h-784200299/"
            target="_blank"
            rel="noreferrer"
            className="border border-emerald-500 px-6 py-2 rounded hover:bg-emerald-500 hover:text-black transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-10 py-16">
        <h2 className="text-3xl font-semibold text-emerald-400">About Me</h2>

        <p className="mt-4 text-gray-400 max-w-2xl">
          A result-oriented individual with a strong passion for programming and
          problem-solving. I aim to contribute to dynamic environments by building
          impactful applications while continuously upgrading my technical skills.
        </p>

        <p className="mt-4 text-gray-400 max-w-2xl">
          I have a keen interest in artificial intelligence, machine learning, and full-stack development,
          and I enjoy working on real-world problems involving data, automation, and intelligent systems.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-10 py-16">
        <h2 className="text-3xl font-semibold text-emerald-400">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-gray-900 border border-emerald-500 p-6 rounded-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold">Drowsiness Detection</h3>
            <p className="mt-2 text-gray-400">
              Real-time driver alert system using OpenCV & Mediapipe.
            </p>
            <a
              href="https://github.com/misbah0786/SIC_PROJECT-DROWSINESS-DETECTION"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400"
            >
              GitHub
            </a>
          </div>

          <div className="bg-gray-900 border border-emerald-500 p-6 rounded-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold">Finance Assistant</h3>
            <p className="mt-2 text-gray-400">
              AI-powered budgeting system with Streamlit.
            </p>
            <a
              href="https://github.com/misbah0786/AI-POWERED-PERSONAL-FINANCE-ASSISTANT"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400"
            >
              GitHub
            </a>
          </div>

          <div className="bg-gray-900 border border-emerald-500 p-6 rounded-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold">URL Shortener</h3>
            <p className="mt-2 text-gray-400">
              MERN stack URL shortener with CRUD.
            </p>
            <a
              href="https://github.com/misbah0786/MERN-URL-SHORTNER"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400"
            >
              GitHub
            </a>
          </div>

        </div>
      </section>

      {/* CLUBS */}
<section id="clubs" className="px-10 py-16">
  <h2 className="text-3xl font-semibold text-emerald-400">
    Clubs & Leadership
  </h2>

  <div className="grid md:grid-cols-2 gap-6 mt-8">

    <div className="bg-gray-900 border border-emerald-500 p-6 rounded-lg hover:scale-105 transition">
      <h3 className="text-xl font-bold">TEDxCIT Bengaluru</h3>
      <p className="mt-2 text-gray-400">
        Curator for 2 years, involved in speaker selection and organizing large-scale events.
      </p>
    </div>

    <div className="bg-gray-900 border border-emerald-500 p-6 rounded-lg hover:scale-105 transition">
      <h3 className="text-xl font-bold">Under25 CIT</h3>
      <p className="mt-2 text-gray-400">
        Marketing team member and Hospitality Lead for events.
      </p>
    </div>

    <div className="bg-gray-900 border border-emerald-500 p-6 rounded-lg hover:scale-105 transition">
      <h3 className="text-xl font-bold">Chiguru Fest</h3>
      <p className="mt-2 text-gray-400">
        Organizing team member for 3 years, handling event coordination.
      </p>
    </div>

    <div className="bg-gray-900 border border-emerald-500 p-6 rounded-lg hover:scale-105 transition">
      <h3 className="text-xl font-bold">MLSA</h3>
      <p className="mt-2 text-gray-400">
        Social Media Manager for Microsoft Learn Student Ambassadors.
      </p>
    </div>

    <div className="bg-gray-900 border border-emerald-500 p-6 rounded-lg hover:scale-105 transition md:col-span-2">
      <h3 className="text-xl font-bold">Algorand Blockchain Club</h3>
      <p className="mt-2 text-gray-400">
        Club Lead, organizing workshops and mentoring students in blockchain.
      </p>
    </div>

  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="text-center py-16 border-t border-emerald-500">
        <h2 className="text-3xl font-semibold text-emerald-400">Contact</h2>

        <p className="mt-4 text-gray-400">
          📧 misbahfirdose2020@gmail.com
        </p>

        <div className="mt-4 space-x-6">
          <a href="https://github.com/misbah0786" target="_blank" rel="noreferrer" className="hover:text-emerald-400">GitHub</a>
          <a href="https://www.linkedin.com/in/misbah-firdose-h-784200299/" target="_blank" rel="noreferrer" className="hover:text-emerald-400">LinkedIn</a>
        </div>
      </section>

    </div>
  );
}

export default App;