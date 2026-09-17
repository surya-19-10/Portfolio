import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

export interface ProjectData {
  title: string;
  category?: string;
  duration?: string;
  location?: string;
  description: string;
  longDescription: string;
  techStack: string[];
  architecture: {
    frontend: string;
    backend: string;
    database: string;
  };
  features: string[];
}

@Component({
  selector: 'app-project-detail-dialog',
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './project-detail-dialog.html',
  styleUrl: './project-detail-dialog.scss',
})
export class ProjectDetailDialog {
  constructor(
    public dialogRef: MatDialogRef<ProjectDetailDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectData
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
