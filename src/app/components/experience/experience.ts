import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface Job {
  role: string;
  company: string;
  project?: string;
  duration: string;
  location?: string;
  highlights: string[];
  skills: string[];
  isCurrent?: boolean;
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  jobs: Job[] = [
    {
      role: 'Software Developer',
      company: 'BNP Paribas',
      project: 'Caplink',
      duration: 'Jan 2025 - Present',
      location: 'Chennai, INDIA',
      highlights: [
        'Designed and implemented microservices using Java 11 and Spring Boot 3, following RESTful API standards and microservices architecture.',
        'Developed a Backend-for-Frontend (BFF) proxy layer to abstract backend endpoints from the frontend team, improving security and modularity.',
        'Learned Angular 16 and built a whitelisting module for the admin portal. Transitioned from YAML-based access control to a dynamic Oracle SQL-backed UI, enabling real-time user access management and revocation.',
        'Integrated Gen AI tools (via Continue plugin) into IntelliJ and VS Code to automate unit test generation, resolve Sonar and Fortify issues, optimize code, and auto-generate mapper methods from YAML schemas - boosting delivery speed and code quality.',
        'Successfully migrated legacy services from Spring Boot 2 to Spring Boot 3, ensuring compatibility and performance improvements.',
        'Integrated external market value APIs using mTLS authentication to ensure secure, real-time data ingestion.',
        'Promoted to AI Catalyst, where I led internal enablement by training teammates on Gen AI usage, prompt engineering techniques, AI Agents like Roo-Code, and hosted seminars to drive adoption and maximize productivity.'
      ],
      skills: ['Java 11', 'Spring Boot 3', 'REST APIs', 'BFF Architecture', 'Angular 16', 'Oracle SQL', 'Gen AI / Continue', 'mTLS', 'AI Catalyst', 'Roo-Code'],
      isCurrent: true
    },
    {
      role: 'Backend Developer',
      company: 'Wipro',
      project: 'Medicare',
      duration: 'Oct 2021 - Jan 2025',
      location: 'Chennai, INDIA',
      highlights: [
        'Identified and rectified bugs in existing software, significantly improving code performance and reliability.',
        'Applied SOLID design principles and object-oriented techniques to ensure code maintainability and extensibility.',
        'Developed high-performance RESTful APIs using Java 8 and Spring Boot.',
        'Implemented Spring task Scheduling to calculate commission amounts quarterly and monthly based on product sales by agents.',
        'Utilized ORM tool like JPA and pagination to enhance data processing efficiency and reduce retrieval time for large datasets from the database.',
        'Additionally, integrated third-party APIs to check license activation for agents, ensuring seamless and efficient verification processes within the system.'
      ],
      skills: ['Java 8', 'Spring Boot', 'REST APIs', 'SOLID Principles', 'Spring Task Scheduling', 'JPA / Hibernate', 'Pagination', 'Third-Party Integration']
    }
  ];
}
