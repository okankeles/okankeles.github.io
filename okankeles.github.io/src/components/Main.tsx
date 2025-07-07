import React from 'react';
import styles from '../styles/styles.module.css';

const Main: React.FC = () => {
  return (
    <main>
      <section id="projects" className={styles.section}>
        <h3 className={styles.sectionTitle}>Featured Projects</h3>
        <div className={styles.projectCard}>
          <h4 className={styles.projectTitle}>ENTIR - Digital Logistics Platform</h4>
          <p className={styles.projectDescription}>
            A comprehensive digital platform I developed using NestJS (Node.js) and React Native, providing solutions to trust and inefficiency problems in the logistics sector. The project brings together shippers and carriers, offering JWT-based secure authentication and role-based authorization (RBAC) within a monorepo architecture.
          </p>
          <div className={styles.projectLinks}>
            <a href="https://github.com/okankeles/entir-project" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
          </div>
          <div className={styles.tags}>
            {[
              'NestJS',
              'Node.js',
              'React Native',
              'PostgreSQL',
              'TypeORM',
              'TypeScript',
              'JWT',
              'Monorepo',
            ].map((term, idx) => (
              <span key={idx} className={styles.term}>{term}</span>
            ))}
          </div>
        </div>
        <div className={styles.projectCard}>
          <h4 className={styles.projectTitle}>MSCARGO - Cargo Tracking System with Microservice Architecture</h4>
          <p className={styles.projectDescription}>
            A comprehensive cargo tracking system built with modern software development principles and microservice architecture. The project consists of independent services containerized with Docker, communicating asynchronously via RabbitMQ, and providing observability with Prometheus/Grafana.
          </p>
          <div className={styles.projectLinks}>
            <a href="https://github.com/okankeles/cargo-tracking-project" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
          </div>
          <div className={styles.tags}>
            {[
              'Microservices',
              'Docker',
              'RabbitMQ',
              'Node.js',
              'React',
              'PostgreSQL',
              'Prometheus',
              'Grafana',
              'NGINX',
            ].map((term, idx) => (
              <span key={idx} className={styles.term}>{term}</span>
            ))}
          </div>
        </div>
        <div className={styles.projectCard}>
          <h4 className={styles.projectTitle}>FLYPASS - Cryptographic Password Management Architecture</h4>
          <p className={styles.projectDescription}>
            A mobile application architecture that generates secure passwords using deterministic algorithms without storing data on the server. The system applies the "zero-knowledge" security principle by using `isomorphic-Argon2` for key derivation (KDF) against brute-force attacks and `HMAC-SHA256` for site-specific key generation.
          </p>
          <div className={styles.projectLinks}>
            <a href="https://github.com/okankeles/SecurePasswordMobile" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
          </div>
          <div className={styles.tags}>
            {[
              'Security',
              'Cryptography',
              'Argon2',
              'HMAC-SHA256',
              'React Native',
              'Algorithm Design',
            ].map((term, idx) => (
              <span key={idx} className={styles.term}>{term}</span>
            ))}
          </div>
        </div>
      </section>
      <section id="skills" className={styles.section}>
        <h3 className={styles.sectionTitle}>Technical Skills</h3>
        <div className={styles.skillList}>
          <span>Go</span>
          <span>Java</span>
          <span>C#</span>
          <span>Python</span>
          <span>.Net</span>
          <span>Spring Boot</span>
          <span>Node.js</span>
          <span>Docker</span>
          <span>Kubernetes</span>
          <span>Azure</span>
          <span>CI/CD</span>
          <span>Helm</span>
          <span>ArgoCD</span>
          <span>Microservices</span>
          <span>RabbitMQ</span>
          <span>PostgreSQL</span>
          <span>MySQL</span>
          <span>React</span>
          <span>Next.js</span>
          <span>TypeScript</span>
        </div>
      </section>
      <section id="experience" className={styles.section}>
        <h3 className={styles.sectionTitle}>Work Experience</h3>
        <div className={styles.experienceList}>
          {[
            {
              date: 'FEB 2024 - PRESENT',
              title: 'Software Engineer Intern - DevOps Team',
              company: 'Yapı Kredi Teknoloji',
              description: 'Developed and maintained application development tools using Spring Boot, Go, and React to improve system efficiency. Built and optimized CI/CD pipelines with Docker, Kubernetes, and Helm, ensuring secure and efficient deployments.',
              tags: ['Go', 'Spring Boot', 'React', 'PHP', 'Kubernetes', 'Docker', 'Helm', 'ArgoCD', 'OpenShift'],
            },
            {
              date: 'JUN 2024 - SEP 2024',
              title: 'Software Engineer Intern',
              company: 'Securify Identity',
              description: 'Implemented new features and maintained core services for a web application using .Net, React, and Next.js. Developed several internal micro-service tools to improve efficiency and reduce costs.',
              tags: ['.Net', 'React', 'Next.js', 'Docker', 'Azure'],
            },
            {
              date: 'DEC 2023 - APR 2024',
              title: 'Software Developer',
              company: 'Pointy Nine Agency',
              description: 'Maintained existing micro-services, added new features, and led the development of internal tools. Solved technical challenges related to scalability, security, and system architecture to ensure reliable system operations.',
              tags: ['C#', 'React.JS', 'Next.JS', 'MySQL', 'TypeScript'],
            },
          ].map((job, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.experienceDate}>{job.date}</div>
              <div className={styles.experienceDetails}>
                <h4 className={styles.experienceTitle}>{job.title} · {job.company}</h4>
                <p className={styles.experienceDescription}>{job.description}</p>
                <div className={styles.tags}>
                  {job.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="volunteer" className={styles.section}>
        <h3 className={styles.sectionTitle}>Volunteer Experience</h3>
        <div className={styles.experienceList}>
          {[
            {
              date: 'January 2024 - April 2024',
              title: 'Artificial Intelligence Student Club Autonomous Car Team',
              company: '',
              description: 'Actively contributed to the development of the Autonomous Car Project, specializing in image processing tasks. Utilized MATLAB and Python for tasks such as object detection, lane tracking, and image recognition. Leveraged technologies and libraries like OpenCV, TensorFlow and NumPy to design and implement robust computer vision algorithms. Collaborated closely with a multidisciplinary team to integrate image processing components into the autonomous vehicle system, enhancing its decision-making capabilities.',
              tags: ['MATLAB', 'Python', 'OpenCV', 'TensorFlow', 'NumPy'],
            },
            {
              date: 'February 2022 - September 2022',
              title: 'Google Developer Student Clubs Social Media Designer',
              company: '',
              description: 'As the social media designer, took part in creating a dynamic learning environment for students who into technology and software. Organized classes and seminars about Google Tech from the social media side. Used Adobe Photoshop, Illustrator and Canva for social media posts.',
              tags: ['Social Media', 'Adobe Photoshop', 'Illustrator', 'Canva'],
            },
            {
              date: 'November 2021 - March 2022',
              title: 'AIESEC in Izmir Sales Floor Team Member',
              company: '',
              description: 'Developed the Product Knowledge, Communication Skills, Customer Engagement, Sales Techniques, Team Collaboration, Adaptability and Goal Achievement skills by working on the sales floor team AIESEC which is a global youth-led organization focused on providing leadership development and cross-cultural exchange opportunities.',
              tags: ['Sales', 'Communication', 'Teamwork', 'Leadership'],
            },
          ].map((job, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.experienceDate}>{job.date}</div>
              <div className={styles.experienceDetails}>
                <h4 className={styles.experienceTitle}>{job.title}</h4>
                <p className={styles.experienceDescription}>{job.description}</p>
                <div className={styles.tags}>
                  {job.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="education" className={styles.section}>
        <h3 className={styles.sectionTitle}>Education</h3>
        <div className={styles.projectCard}>
          <div className={styles.experienceDate}>October 2021 - July 2025</div>
          <div className={styles.experienceDetails}>
            <h4 className={styles.experienceTitle}>Bachelor of Science in Computer Engineering</h4>
            <p className={styles.experienceDescription}>
              Ege University, İzmir, Turkey. Focused on computer science, software development, and IT technologies. Developed skills in programming, system design, and technical problem-solving through coursework and projects.
            </p>
            <div className={styles.tags}>
              {[
                'Computer Science',
                'Software Development',
                'IT',
                'Programming',
                'System Design',
              ].map((term, idx) => (
                <span key={idx} className={styles.term}>{term}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;