import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header id="hero">
        <h1>OKAN KELEŞ</h1>
        <h2>Mid-level Software Engineer</h2>
        <p>
          Full Stack Software Engineer at Yapı Kredi Teknoloji in the Login and Transaction Security team. I develop secure backend microservices using Java and Spring Boot, and mobile SDKs with iOS (Swift) and Android (Kotlin). I lead the migration of monolithic architectures to microservices and manage cloud-native processes with Docker, Kubernetes, and CI/CD tools.
        </p>
        <div className="links">
          <a href="https://github.com/okankeles" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/okankeles/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:kelesokann@gmail.com">Email</a>
          <a href="/cv.pdf" target="_blank" rel="noreferrer">Download CV</a>
        </div>
      </header>

      <main>
        {/* EXPERIENCE SECTION */}
        <section id="experience">
          <h3>Work Experience</h3>
          
          <div className="project-card">
            <h4>Software Engineer (Mid-level) - Yapı Kredi Teknoloji</h4>
            <span className="resume-date">August 2025 - Present (Promoted to Mid-level in October 2026)</span>
            <p>
              Managing bank-wide authentication systems and end-to-end login flows across web and mobile channels. Designing high-performance services using Java, PHP, PL/SQL, and Python, and providing secure SDK integrations for iOS and Android platforms.
            </p>
            <div className="tags">
              <span>Java</span><span>Spring Boot</span><span>Swift</span>
              <span>Kotlin</span><span>Microservices</span><span>Security</span>
            </div>
          </div>

          <div className="project-card">
            <h4>DevOps Engineer - Yapı Kredi Teknoloji</h4>
            <span className="resume-date">February 2025 - August 2025</span>
            <p>
              Optimized internal CI/CD pipelines using Docker, Helm, Kustomize, SonarQube, and Fortify. Managed and scaled cloud-native applications with Kubernetes (AKS, OpenShift) and ArgoCD.
            </p>
            <div className="tags">
              <span>Docker</span><span>Kubernetes</span><span>Helm</span>
              <span>ArgoCD</span><span>CI/CD</span>
            </div>
          </div>

          <div className="project-card">
            <h4>Software Engineer - Powea Sustainable Energy Solution</h4>
            <span className="resume-date">March 2023 - September 2024 (Remote / Part-time)</span>
            <p>
              Designed scalable backend microservices (Python/Java) integrating Reinforcement Learning models for dynamic pricing charge schedules, reducing operational costs by 40%. Developed a mobile app for iOS (Swift) and Android (Kotlin) offering smart charging and route optimization.
            </p>
            <div className="tags">
              <span>Python</span><span>Java</span><span>Swift</span>
              <span>Kotlin</span><span>Machine Learning</span>
            </div>
          </div>

          <div className="project-card">
            <h4>Software Engineer Intern - Securify Identity</h4>
            <span className="resume-date">June 2024 - September 2024</span>
            <p>
              Participated in developing and containerizing internal tools with Docker, aligning with microservices architecture. Gained production-level deployment experience on Azure cloud infrastructure.
            </p>
            <div className="tags">
              <span>.Net</span><span>React</span><span>Next.js</span>
              <span>Docker</span><span>Azure</span>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects">
          <h3>Featured Projects</h3>
          
          <div className="project-card">
            <h4>Trendyol BaaS (Banking-as-a-Service) Integration</h4>
            <p>
              Developed the secure login and transaction verification backend (Java Spring Boot) for the Trendyol BaaS partnership. Completed iOS (Swift) and Android (Kotlin) mobile SDK integrations for seamless user authentication within the partner ecosystem by implementing advanced security measures like SEAL V3 device registration.
            </p>
            <div className="tags">
              <span>Java Spring Boot</span><span>SEAL V3</span><span>Swift</span>
              <span>Kotlin</span><span>Security SDK</span>
            </div>
          </div>

          <div className="project-card">
            <h4>Yapı Kredi Kripto - Inter-App Routing & SSO System</h4>
            <p>
              Developed a bidirectional inter-app routing architecture and Single Sign-On (SSO) login flow between the Yapı Kredi Kripto app and the main banking application. Designed token validation with custom DTOs, dynamic consent flows, and deep-link processing mechanisms.
            </p>
            <div className="tags">
              <span>SSO</span><span>Inter-App Routing</span><span>Deep Linking</span>
              <span>Backend Architecture</span>
            </div>
          </div>

          <div className="project-card">
            <h4>ENTIR - Digital Logistics Platform</h4>
            <p>
              A comprehensive digital platform developed using NestJS (Node.js) and React Native that connects shippers and carriers. Offers JWT-based secure authentication and role-based authorization (RBAC) within a monorepo architecture.
            </p>
            <div className="project-links">
              <a href="https://github.com/okankeles/entir-project" target="_blank" rel="noreferrer">View on GitHub →</a>
            </div>
            <div className="tags">
              <span>NestJS</span><span>React Native</span><span>PostgreSQL</span>
              <span>JWT</span><span>Monorepo</span>
            </div>
          </div>

          <div className="project-card">
            <h4>MSCARGO - Microservice Cargo Tracking System</h4>
            <p>
              A comprehensive cargo tracking system consisting of independent services containerized with Docker, communicating asynchronously via RabbitMQ, and providing observability with Prometheus/Grafana.
            </p>
            <div className="project-links">
              <a href="https://github.com/okankeles/cargo-tracking-project" target="_blank" rel="noreferrer">View on GitHub →</a>
            </div>
            <div className="tags">
              <span>Microservices</span><span>Docker</span><span>RabbitMQ</span>
              <span>Prometheus</span><span>Grafana</span>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education">
          <h3>Education</h3>
          <div className="project-card">
            <h4>B.S. in Computer Engineering - Ege University</h4>
            <span className="resume-date">October 2021 - June 2025</span>
            <p>
              Izmir, Turkey. Focused on computer science, software development, and IT technologies.
            </p>
            <div className="tags">
              <span>Computer Science</span><span>Software Development</span><span>System Design</span>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills">
          <h3>Technical Skills</h3>
          <div className="skill-list">
            <span>Java</span><span>Spring Boot</span><span>Swift</span><span>Kotlin</span>
            <span>Python</span><span>Go</span><span>PHP</span><span>C#</span>
            <span>.Net</span><span>Node.js</span><span>Docker</span><span>Kubernetes</span>
            <span>Azure</span><span>CI/CD</span><span>Helm</span><span>ArgoCD</span>
            <span>Microservices</span><span>RabbitMQ</span><span>PostgreSQL</span>
            <span>MySQL</span><span>React</span><span>Next.js</span><span>TypeScript</span>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Okan Keleş. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
