import Footer from "../components/Footer";
import "./Cv.css";

const Cv = () => {
  return (
    <div className="page-container">
      <div className="cv-wrapper">
        {/* Sidebar */}
        <aside className="cv-sidebar">
          <img src="/images/profile.jpeg" alt="Profile" className="cv-photo" />
          <h2 className="cv-name">Ahmed Nasir</h2>

          <a href="/Ahmed_CV.pdf" download className="cv-download">
            📥 Download CV
          </a>

          <div className="cv-skills">
            <h3>🛠 Skills</h3>
            <ul className="skills-list">
              <li>C/C++</li>
              <li>MySQL</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>REST APIs</li>
              <li>Git & GitHub</li>
              <li>Assembly</li>
              <li>OOP</li>
              <li>Data Structures</li>
              <li>SOLID Principles</li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="cv-container">
          <h1 className="cv-heading">Curriculum Vitae</h1>

          <section className="cv-section fade-in">
            <h2>👨‍💻 Profile</h2>
            <p>
              As a Computer Science student in my 6th semester at FAST NUCES,
              Lahore, I have built a solid foundation in C++ and Python, with
              strong problem-solving skills and a deep understanding of core
              concepts such as OOP, data structures, algorithms, databases,
              artificial intelligence, compilers, and operating systems. I’m
              passionate about applying these skills to real-world challenges
              and continuously expanding my knowledge through hands-on
              experience and practical projects.
            </p>
          </section>

          <section className="cv-section fade-in">
            <h2>💼 Experience</h2>
            <ul>
              <li>
                <strong>Software Engineer Intern</strong> – TGI – June-2025 –
                present
              </li>
            </ul>
          </section>

          <section className="cv-section fade-in">
            <h2>🎓 Education</h2>
            <ul>
              <li>
                <strong>BS Computer Science</strong> – FAST NUCES – 2022–2025
              </li>
              <li>
                <strong>FSc Pre-Eng</strong> – Government College University
                Lahore – 2022
              </li>
              <li>
                <strong>Matriculation</strong> – Crescent Model Higher Secondary
                School – 2020
              </li>
            </ul>
          </section>

          <section className="cv-section fade-in">
            <h2>📞 Contact</h2>
            <p>
              Email:{" "}
              <a href="mailto:ahmednasir1212a@gmail.com">
                ahmednasir1212a@gmail.com
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/ahmed-nasir-6761b527a/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/ahmed-nasir-6761b527a/
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/Ahmed-Nasir-6644"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Ahmed-Nasir-6644
              </a>
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Cv;
