import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule, MatCardModule, MatIconModule, MatChipsModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  categories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: 'desktop_windows',
      skills: ['Angular 20', 'Angular Material', 'SCSS / CSS3', 'TypeScript', 'RxJS', 'HTML5', 'Responsive Design']
    },
    {
      title: 'Backend Systems',
      icon: 'dns',
      skills: ['Java', 'Spring Boot', 'RESTful APIs', 'Microservices', 'Spring Cloud', 'Spring Security', 'Maven']
    },
    {
      title: 'Databases',
      icon: 'storage',
      skills: ['SQL', 'Oracle SQL', 'PostgreSQL', 'MySQL', 'Relational DB Design', 'Query Tuning', 'Indexes']
    },
    {
      title: 'AI & Gen AI',
      icon: 'auto_awesome',
      skills: ['Prompt Engineer', 'Gen AI', 'AI Agents', 'Opencode', 'Claude', 'Skills', 'Commands']
    },
    {
      title: 'Tools & DevOps',
      icon: 'architecture',
      skills: ['Git / GitHub', 'CI/CD Pipelines', 'Docker', 'Kubernetes', 'Agile / Scrum', 'Linux CLI']
    }
  ];
}
