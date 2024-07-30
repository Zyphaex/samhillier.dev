import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Sam Hillier</h1>
        <h2>Full Stack Developer</h2>
      </header>
      <main>
        <section>
          <h3>Skills</h3>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </section>
        <section>
          <h3>About Me</h3>
          <p>
            I'm a Computer Science graduate from Nottingham Trent University, a
            Full-Stack Web Developer and Software Engineer with a proven record
            of academic and project success.
          </p>
          <p>
            If you're interested in working with me or have a question, please
            feel free to get in touch.
          </p>
          <img
            src="https://raw.githubusercontent.com/Zyphaex/portfolio/main/src/assets/images/sam-hillier.jpg"
            width="200"
            height="200"
            alt="Sam Hillier"
          ></img>
        </section>
        <section>
          <h3>Projects</h3>
          <article>
            <a
              href="https://cs2.team"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit CS2.TEAM website"
            >
              <h4>CS2.TEAM</h4>
            </a>
            <p>
              Find esports teams and players on CS2.TEAM. Level up your gaming
              identity with our professional esports networking platform.
            </p>
          </article>
          <article>
            <a
              href="https://enjindex.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit ENJindex website"
            >
              <h4>ENJindex</h4>
            </a>
            <p>ENJindex, explore NFTs and crypto collectibles.</p>
          </article>
        </section>
      </main>
      <footer>
        <section>
          <a
            href="https://github.com/Zyphaex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/samhillier"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/Zyphaex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X profile"
          >
            X
          </a>
          <a
            href="https://instagram.com/Zyphaex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
          >
            Instagram
          </a>
        </section>
        <section>
          <iframe
            src="https://github.com/sponsors/Zyphaex/button"
            id="sponsor"
            title="GitHub Sponsor"
            height="32"
            width="114"
            style={{ border: 0, borderRadius: "6px" }}
          ></iframe>
        </section>
        <section>
          <nav>
            <a href="#" aria-label="About page">
              About
            </a>
            <a href="#" aria-label="Contact page">
              Contact
            </a>
            <a href="#" aria-label="Terms and Conditions page">
              Terms & Conditions
            </a>
            <a href="#" aria-label="Privacy Policy page">
              Privacy Policy
            </a>
          </nav>
          <p>© 2024 Sam Hillier. All Rights Reserved.</p>
        </section>
      </footer>
    </>
  );
}

export default App;
