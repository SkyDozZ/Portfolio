import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

export interface Project {
  title: string;
  description: string;
  link?: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Portfolio',
      description: 'Site personnel réalisé avec Angular 19 et TailwindCSS.',
      link: 'https://monportfolio.com'
    },
    {
      title: 'Maquette de site web - Alinéa ASMR',
      description: 'Maquette réalisé avec Angular 19 et TailwindCSS.',
      link: 'https://monportfolio.com'
    },
    {
      title: 'AssurApp',
      description: 'Projet scolaire réalise en Java + Spring Boot et Angular 19.',
      link: 'https://monportfolio.com'
    }
   
  ];
}
