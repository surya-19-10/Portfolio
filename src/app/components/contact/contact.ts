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
