import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
}

@Component({
  selector: 'app-education',
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  educationList: EducationItem[] = [
    {
      institution: 'Siddartha Institute of Science & Technology, Puttur',
      degree: 'Bachelor’s Degree in Electronics & Communication Engineering (ECE)',
      duration: 'Aug 2017 - Aug 2021',
      grade: 'Graduated with 81%'
    }
  ];
}
