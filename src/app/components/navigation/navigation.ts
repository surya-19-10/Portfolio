import { Component, HostListener, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  themeService = inject(ThemeService);
  activeSection = 'hero';
  isScrolled = false;
  isMobileMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    
    const sections = ['hero', 'experience', 'education', 'projects', 'skills', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = sectionId;
    }
    this.closeMobileMenu();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
