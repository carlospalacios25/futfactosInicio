import { Component } from '@angular/core';

@Component({
  selector: 'app-clasicos',
  templateUrl: './clasicos.component.html',
  styleUrls: ['./clasicos.component.css']
})
export class ClasicosComponent {
  modalActive = false;
  modalData: any = {};

  clasicosData = {
    'america-nacional': {
      title: 'Clásico Colombiano: América vs. Nacional',
      team1: 'América de Cali',
      team2: 'Atlético Nacional',
      team1Logo: 'https://i.pinimg.com/736x/8a/71/55/8a7155ca40482c27012efac4d134985e.jpg',
      team2Logo: 'https://images.seeklogo.com/logo-png/16/1/club-atletico-nacional-de-medellin-logo-png_seeklogo-169187.png',
      bestMatches: [
        { date: '1990', score: 'América 5-0 Nacional', description: 'Mayor goleada en la historia del clásico' },
        { date: '2005', score: 'Nacional 4-1 América', description: 'Goleada de Nacional en Medellín' },
        { date: '2016', score: 'América 3-2 Nacional', description: 'Partido clave en la Libertadores' }
      ],
      stats: {
        totalMatches: '350+',
        totalGoals: '600+',
        highestScore: '5-0 (1990)',
        lastMatch: '2-2 (2023)'
      },
      curiosities: 'El primer clásico se jugó en 1948 y terminó 2-2. La rivalidad aumentó en los años 80 cuando ambos dominaron el fútbol colombiano.'
    },
    // Datos para los otros 11 clásicos con la misma estructura
    'real-barca': {
      title: 'El Clásico: Real Madrid vs. Barcelona',
      team1: 'Real Madrid',
      team2: 'Barcelona',
      team1Logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
      team2Logo: 'https://specials-images.forbesimg.com/imageserve/65f2d5c080790f47bcfa620f/960x0.jpg',
      bestMatches: [
        { date: '1943', score: 'Real Madrid 11-1 Barcelona', description: 'Mayor goleada en la historia del clásico' },
        { date: '2010', score: 'Barcelona 5-0 Real Madrid', description: 'Exhibición tiki-taka de Guardiola' },
        { date: '2020', score: 'Real Madrid 2-0 Barcelona', description: 'Partido clave en la lucha por el título' }
      ],
      stats: {
        totalMatches: '250+',
        totalGoals: '900+',
        highestScore: '11-1 (1943)',
        lastMatch: '3-2 Barcelona (2024)'
      },
      curiosities: 'El Clásico es el partido de clubes más visto en el mundo, con más de 650 millones de espectadores en 2017.'
    },
    // ... (datos para los otros 10 clásicos)
  };

  openModal(clasicoId: string) {
    this.modalData = this.clasicosData[clasicoId as keyof typeof this.clasicosData];
    this.modalActive = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modalActive = false;
    document.body.style.overflow = 'auto';
  }
}
