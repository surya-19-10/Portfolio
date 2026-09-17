# Software Developer Portfolio Development Plan

## 1. Project Overview
* **Objective:** Build a responsive, high-performance personal portfolio to showcase professional experience and technical projects.
* **Core Tech Stack:** Angular 20, Angular Material (Material 3 integration), SCSS.
* **Design System:** Modern, dark-themed UI emphasizing clean aesthetics, utilizing Material 3 design tokens and responsive CSS Grid/Flexbox layouts.

## 2. Architecture & Application Structure

### Core Modules
* `CoreModule`: Singleton services, interceptors, global error handling.
* `SharedModule`: Reusable Angular Material components, custom UI elements (buttons, cards, icons).
* `PortfolioModule`: Main feature module containing all portfolio sections.

### Component Tree
* `app-root`
    * `app-navigation` (Sticky top bar with anchor links)
    * `app-hero` (Introduction, high-impact headline)
    * `app-experience` (Professional timeline)
    * `app-projects` (Detailed case studies)
    * `app-skills` (Technical proficiency grid)
    * `app-contact` (Call to action, social links)
    * `app-footer`

## 3. Content Strategy

### Hero Section
* **Headline:** Full-Stack Software Engineer
* **Sub-headline:** Building scalable, microservices-driven applications and modern web interfaces.
* **Call to Action:** "View Projects" / "Contact Me"

### Experience Section (Timeline)
* **Comcast** (Starting Aug 2026) - Software Engineer
* **BNP Paribas** - Software Engineer (Highlight 4 years of enterprise-level development)

### Projects Section
* **CineConnect**
    * *Description:* A professional networking and job platform tailored for the cinema industry.
    * *Tech Stack:* Angular, Java, Spring Boot, Microservices, SQL.
    * *Highlights:* Modern UI implementation, secure backend integration, scalable database architecture.
* *(Placeholder for additional projects/open source contributions)*

### Skills Grid
* **Frontend:** Angular 20, Angular Material, SCSS, TypeScript.
* **Backend:** Java, Spring Boot, Microservices, RESTful APIs.
* **Database:** SQL, relational database management.
* **Tools:** Git, CI/CD pipelines, Agile workflows.

## 4. Development Phases

### Phase 1: Setup & Scaffolding
1.  Initialize Angular 20 workspace: `ng new portfolio --style=scss --routing`.
2.  Install Angular Material: `ng add @angular/material`.
3.  Configure custom Material 3 typography and dark theme palettes in `styles.scss`.
4.  Generate core modules and components.

### Phase 2: Design & Theming
1.  Implement a dark mode toggle service (optional) or enforce a strict dark theme.
2.  Define SCSS variables for primary, accent, and background colors to ensure UI consistency.
3.  Create global typography mixins matching Material 3 specifications.

### Phase 3: Component Implementation
1.  **Navigation:** Implement smooth scrolling to page sections.
2.  **Experience:** Use `mat-stepper` or a custom CSS timeline to display career progression.
3.  **Projects:** Utilize `mat-card` with hover effects and dialogs (`mat-dialog`) for expanding project details (e.g., deep diving into CineConnect's architecture).
4.  **Skills:** Implement a responsive grid using `mat-grid-list` or standard CSS Grid.

### Phase 4: Optimization & Deployment
1.  Implement lazy loading for routes (if expanding beyond a single page).
2.  Optimize image assets (WebP format) and icons.
3.  Ensure strict accessibility (a11y) compliance (ARIA labels, keyboard navigation).
