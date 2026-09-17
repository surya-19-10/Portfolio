import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  email = 'damasprakash@gmail.com';
  githubUrl = 'https://github.com/surya-19-10/';
  linkedinUrl = 'https://linkedin.com/in/surya-prakash-597148176';
  copySuccess = false;

  copyEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      this.copySuccess = true;
      setTimeout(() => {
        this.copySuccess = false;
      }, 2000);
    });
  }
}

