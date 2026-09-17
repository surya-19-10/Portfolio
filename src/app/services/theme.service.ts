import { Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio_theme';
  currentTheme = signal<Theme>('dark');

  constructor() {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme | null;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        this.setTheme(savedTheme);
      } else {
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        this.setTheme(prefersLight ? 'light' : 'dark');
      }
    }
  }

  toggleTheme(): void {
    const nextTheme = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
  }

  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.THEME_KEY, theme);
      if (theme === 'light') {
        document.documentElement.classList.add('light-theme');
        document.documentElement.classList.remove('dark-theme');
      } else {
        document.documentElement.classList.add('dark-theme');
        document.documentElement.classList.remove('light-theme');
      }
    }
  }
}
