import React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import {
  AiOutlineGithub,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineDownload,
} from "react-icons/ai";
import heroVisual from "./component/user-interface.gif";

const skillGroups = [
  {
    title: "Languages",
    items: ["C++", "JavaScript", "SQL", "HTML", "CSS", "Firebase"],
  },
  {
    title: "Frameworks & Platforms",
    items: [
      "React.js",
      "Node.js",
      "Express.js",
      "Flask",
      "React Native",
      "Computer Vision",
      "Redis",
    ],
  },
  {
    title: "Cloud & Tools",
    items: ["GCP", "AWS", "Azure", "Git", "MongoDB", "MySQL", "SQLite"],
  },
];

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Eternal Robotics, Hyderabad",
    period: "Jun 2024 - Present",
    highlights: [
      "Designed and deployed 20+ cloud functions for alerts, monitoring, event processing, and reporting.",
      "Integrated ANPR and safety computer vision models, reducing manual checks by 70%.",
      "Built Firestore schemas handling 50K+ repair orders per year with reliable event tracking.",
      "Led cloud migration initiatives across GCP, AWS, and Azure to improve scale and reduce cost.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Eternal Robotics, Hyderabad",
    period: "May 2023 - May 2024",
    highlights: [
      "Streamed 100+ cameras through WebSockets for low-latency real-time monitoring.",
      "Built dashboard features used by 100+ active users daily.",
      "Developed PDF generation workflows with advanced filters and 1,500+ images.",
      "Delivered 10+ end-to-end projects using scalable MERN architecture.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Beyond Human Resource (Remote)",
    period: "Sep 2022 - Dec 2022",
    highlights: [
      "Contributed to HR application frontend with JavaScript frameworks.",
      "Used Firebase for multi-platform user data flow and collaborated through Git.",
    ],
  },
  {
    role: "React Native Developer Intern",
    company: "Evaluate Health (Remote)",
    period: "May 2022 - Aug 2022",
    highlights: [
      "Built doctor filtering APIs in a React Native mobile application.",
      "Integrated Firebase auth and validated tokenized API workflows through Swagger.",
    ],
  },
];

const projects = [
  {
    title: "Campus Surveillance System",
    stack: "YOLOv8, DeepStream, React, Node.js",
    description:
      "Developed an AI-based surveillance pipeline for real-time detection, alerting, and long-term incident data tracking.",
  },
  {
    title: "Claim Your Vote",
    stack: "React, Node.js, Express.js, MongoDB",
    description:
      "Built a secure online voting platform with admin-managed room creation and protected authentication flow.",
  },
  {
    title: "Book Your Table",
    stack: "Node.js, Express.js, QR workflows",
    description:
      "Created a QR-enabled restaurant platform for dynamic menus and contactless digital ordering.",
  },
  {
    title: "Diabetes Prediction System",
    stack: "Machine Learning, Python",
    description:
      "Implemented prediction workflows using Logistic Regression and Random Forest with secure report handling.",
  },
];

const achievements = [
  "MERN Stack Certified",
  "CodeChef DSA Certified",
  "84th Global Rank - STARTERS57",
  "97th Global Rank - STARTERS28",
  "Runner-up - Srujanakura Hackathon",
  "3rd Position - ACM Vignan Web Hackathon",
];

const stats = [
  { value: "20+", label: "Cloud Functions Deployed" },
  { value: "50K+", label: "Repair Orders Tracked / Year" },
  { value: "100+", label: "Cameras Streamed in Real Time" },
  { value: "10+", label: "End-to-End Projects Delivered" },
];
const snowflakes = Array.from({ length: 26 }, (_, index) => index + 1);

function PortfolioV2() {
  const resumeFileName = "BharathMaradanaResume_1.pdf";
  const resumePath = "./BharathMaradanaResume_1.pdf";

  return (
    <div className="App">
      <div className="snow-layer" aria-hidden="true">
        {snowflakes.map((flake) => (
          <span key={flake} className="snowflake" style={{ "--i": flake }}></span>
        ))}
      </div>

      <header className="site-header">
        <nav className="navbar portfolio-navbar navbar-expand-lg">
          <div className="container-fluid shell">
            <div className="navbar-inner">
              <a className="navbar-brand brand" href="#home">
                Bharath<span className="brand-mark">.M</span>
              </a>
              <ul className="nav nav-center">
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience">
                    Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
              <a
                className="nav-resume-btn"
                href={resumePath}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="portfolio-section hero-section section-full">
          <div className="shell">
            <div className="hero-simple-grid">
              <div className="hero-content">
                <span className="role-badge">FULL STACK AI DEVELOPER</span>
                <h1 className="hero-title">
                  Building practical products with{" "}
                  <span className="texthead">AI and full-stack engineering</span>
                </h1>
                <p className="hero-highlight">
                  Real-time systems, clean architecture, and measurable business impact.
                </p>
                <p className="hero-summary">
                  I am Bharath Maradana, currently at Eternal Robotics. I build and
                  deliver reliable systems that combine computer vision, scalable backend
                  services, and polished user-facing dashboards.
                </p>

                <div className="hero-actions">
                  <a className="hero-btn primary" href="#projects">
                    View Projects
                  </a>
                  <a
                    className="hero-btn secondary"
                    href={resumePath}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineDownload style={{ marginRight: "0.4rem" }} />
                    Download Resume
                  </a>
                </div>

                <div className="social-links">
                  <a
                    className="social-link"
                    href="https://www.linkedin.com/in/bharath-maradana/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SlSocialLinkedin />
                  </a>
                  <a
                    className="social-link"
                    href="https://github.com/BharathMaradana"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineGithub />
                  </a>
                  <a className="social-link" href="tel:+917569967428">
                    <AiOutlinePhone />
                  </a>
                  <a className="social-link" href="mailto:bharathmaradana86@gmail.com">
                    <AiOutlineMail />
                  </a>
                </div>
              </div>
              <div className="hero-image-wrap">
                <img src={heroVisual} alt="Landing visual" className="hero-image" />
              </div>
            </div>

            <div className="hero-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-chip">
                  <h4>{stat.value}</h4>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="portfolio-section section-full">
          <div className="shell">
            <div className="section-title-wrap">
              <p className="section-kicker">Profile</p>
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle">
                Product-minded engineer focused on measurable outcomes and scale.
              </p>
            </div>
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="portfolio-card">
                  <p>
                    Innovative and results-driven developer with strong experience in
                    full-stack web development, AI model integration, and cloud
                    operations. I enjoy taking systems from concept to production with
                    reliability and performance at the center.
                  </p>
                  <p className="about-edu">
                    B.Tech in Computer Science Engineering, Vignan&apos;s Institute of
                    Information Technology (CGPA: 9.27)
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="portfolio-card">
                  <h5>Core Focus</h5>
                  <div className="skill-tags">
                    <span>Full Stack Development</span>
                    <span>Computer Vision Integration</span>
                    <span>Cloud Migration</span>
                    <span>Real-time Dashboards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="portfolio-section section-full section-alt">
          <div className="shell">
            <div className="section-title-wrap">
              <p className="section-kicker">Capabilities</p>
              <h2 className="section-title">Technical Skills</h2>
            </div>
            <div className="row g-4">
              {skillGroups.map((group) => (
                <div key={group.title} className="col-lg-4 col-md-6">
                  <div className="light-box box-hover portfolio-card h-100">
                    <h5>{group.title}</h5>
                    <div className="skill-tags">
                      {group.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="portfolio-section section-full">
          <div className="shell">
            <div className="section-title-wrap">
              <p className="section-kicker">Journey</p>
              <h2 className="section-title">Professional Timeline</h2>
            </div>
            <div className="timeline-modern">
              {experiences.map((experience, index) => (
                <article
                  key={`${experience.company}-${experience.role}`}
                  className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content portfolio-card box-hover">
                    <p className="timeline-date">{experience.period}</p>
                    <h5>{experience.role}</h5>
                    <p className="portfolio-meta">{experience.company}</p>
                    <ul className="portfolio-list">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="portfolio-section section-full section-alt">
          <div className="shell">
            <div className="section-title-wrap">
              <p className="section-kicker">Builds</p>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">
                Scroll sideways or use controls for project cards.
              </p>
            </div>

            <div
              id="projectCarousel"
              className="carousel slide projects-carousel"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                {projects.map((project, index) => (
                  <button
                    key={project.title}
                    type="button"
                    data-bs-target="#projectCarousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : undefined}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <div className="project-slide portfolio-card">
                      <h4>{project.title}</h4>
                      <p className="portfolio-meta">{project.stack}</p>
                      <p>{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#projectCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#projectCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>

        <section className="portfolio-section section-full">
          <div className="shell">
            <div className="section-title-wrap">
              <p className="section-kicker">Recognition</p>
              <h2 className="section-title">Certifications & Achievements</h2>
            </div>
            <div className="achievements-track">
              <div className="achievements-row">
                {achievements.concat(achievements).map((achievement, index) => (
                  <div key={`${achievement}-${index}`} className="portfolio-achievement">
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="portfolio-section section-full section-alt">
          <div className="shell">
            <div className="section-title-wrap">
              <p className="section-kicker">Connect</p>
              <h2 className="section-title">Let&apos;s Build Something Great</h2>
            </div>
            <div className="row contact-details g-4">
              <div className="col-lg-4">
                <div className="light-box box-hover h-100">
                  <h5>Resume</h5>
                  <p>
                    <a href={resumePath} target="_blank" rel="noreferrer">
                      View / Download Resume
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="light-box box-hover h-100">
                  <h5>Email</h5>
                  <p>
                    <a href="mailto:bharathmaradana86@gmail.com">
                      bharathmaradana86@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="light-box box-hover h-100">
                  <h5>Phone</h5>
                  <p>
                    <a href="tel:+917569967428">+91 75699 67428</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="portfolio-footer">
        Copyright 2026 Bharath Maradana. All rights reserved.
      </footer>
    </div>
  );
}

export default PortfolioV2;
