import { Component } from '@angular/core';
import { Navigation } from './components/navigation/navigation';
import { Hero } from './components/hero/hero';
import { Experience } from './components/experience/experience';
import { Education } from './components/education/education';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Navigation,
    Hero,
    Experience,
    Education,
    Projects,
    Skills,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'portfolio';
}
