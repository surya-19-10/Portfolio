import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ProjectDetailDialog, ProjectData } from './project-detail-dialog/project-detail-dialog';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: ProjectData[] = [
    {
      title: 'Caplink',
      category: 'Professional Project',
      duration: 'Jan 2025 - Present',
      location: 'Chennai, INDIA',
      description: 'An enterprise microservices platform built with Java 8/11, Spring Boot 3, Angular 16, mTLS API security, and dynamic Oracle SQL authorization whitelisting.',
      longDescription: 'Caplink is a mission-critical financial microservices platform engineered for secure data processing, real-time market value ingestion, and dynamic authorization. It incorporates a Backend-for-Frontend (BFF) proxy layer to decouple client applications from backend endpoints, dynamic Oracle SQL access control, mTLS authentication, and cutting-edge Gen AI integration for rapid delivery.',
      techStack: ['Java 8 / 11', 'Spring Boot 3', 'Microservices', 'RESTful APIs', 'BFF Proxy', 'Angular 16', 'Oracle SQL', 'mTLS', 'Gen AI / Continue', 'Roo-Code'],
      architecture: {
        frontend: 'Learned Angular 16 to build a dynamic Whitelisting Module for the admin portal, replacing static YAML access control with an Oracle SQL-backed UI for real-time access management and revocation.',
        backend: 'Designed & implemented RESTful microservices in Java 8 / Spring Boot 3 with a Backend-for-Frontend (BFF) proxy layer abstracting backend endpoints, featuring mTLS authentication for external market value API data ingestion.',
        database: 'Oracle SQL database powering dynamic access control whitelisting rules, real-time permission management, and financial data transactions.'
      },
      features: [
        'Designed and implemented microservices using Java 8 and Spring Boot 3, following RESTful API standards and microservices architecture.',
        'Developed a Backend-for-Frontend (BFF) proxy layer to abstract backend endpoints from the frontend team, improving security and modularity.',
        'Learned Angular 16 and built a whitelisting module for the admin portal. Transitioned from YAML-based access control to a dynamic Oracle SQL-backed UI, enabling real-time user access management and revocation.',
        'Integrated Gen AI tools (via Continue plugin) into IntelliJ and VS Code to automate unit test generation, resolve Sonar and Fortify issues, optimize code, and auto-generate mapper methods from YAML schemas - boosting delivery speed and code quality.',
        'Successfully migrated legacy services from Spring Boot 2 to Spring Boot 3, ensuring compatibility and performance improvements.',
        'Integrated external market value APIs using mTLS authentication to ensure secure, real-time data ingestion.',
        'Promoted to AI Catalyst, where I led internal enablement by training teammates on Gen AI usage, prompt engineering techniques, AI Agents like Roo-Code and hosted seminars to drive adoption and maximize productivity.'
      ]
    },
    {
      title: 'CineConnect',
      category: 'Personal Project',
      description: 'A professional networking and job platform tailored for the cinema industry.',
      longDescription: 'CineConnect is a dedicated ecosystem designed to bridge the gap between filmmakers, talent, crew, and production agencies. It implements an intelligent matching engine that maps specialized crew profiles directly to pending cinematic project requirements, enabling secure collaborations and digital portfolio showcases.',
      techStack: ['Angular 20', 'Angular Material', 'Java', 'Spring Boot', 'Microservices', 'SQL', 'JWT Authentication', 'Git'],
      architecture: {
        frontend: 'Dynamic SPA using Angular 20, built on standalone architecture. Interacts with APIs reactively via RxJS. Designed with custom SCSS utility components.',
        backend: 'Java Spring Boot microservices ecosystem routing notifications, search queries, matching workflows, and file uploads.',
        database: 'Structured PostgreSQL relational database handling user authentication, profile credentials, and matching logic. Queries optimized with specific indexing.'
      },
      features: [
        'Secure multi-role authentication (Talent, Production House, Recruiter).',
        'Intelligent matchmaking algorithms utilizing tech-stack criteria and availability filters.',
        'Real-time job dashboard and custom dynamic profiles for actors/crew.',
        'Collaborative space for scheduling reviews, casting calls, and audition tracking.'
      ]
    }
  ];

  constructor(private dialog: MatDialog) {}

  openCaseStudy(project: ProjectData): void {
    this.dialog.open(ProjectDetailDialog, {
      width: '90%',
      maxWidth: '800px',
      data: project,
      panelClass: 'custom-dialog-container',
      autoFocus: false
    });
  }
}
