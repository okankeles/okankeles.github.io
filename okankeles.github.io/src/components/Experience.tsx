import React from 'react';
import styles from '../styles/styles.module.css';

const experienceData = [
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
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.section}>
      <h3 className={styles.sectionTitle}>Work Experience</h3>
      <div className={styles.experienceList}>
        {experienceData.map((job, index) => (
          <div key={index} className={styles.projectCard}> {/* projectCard stilini kullan */}
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
  );
};

export default Experience;