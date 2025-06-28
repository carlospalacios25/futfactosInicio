import { Component, OnInit, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto'; // Importa Chart.js

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements AfterViewInit {
  mundialesChart: any;
  championsChart: any;

  ngAfterViewInit() {
    // Mundial Chart
    const ctx1 = document.getElementById('mundialesChart') as HTMLCanvasElement;
    this.mundialesChart = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: ['Brasil', 'Alemania', 'Italia', 'Argentina', 'Francia', 'Uruguay', 'España', 'Inglaterra'],
        datasets: [{
          label: 'Copas del Mundo',
          data: [5, 4, 4, 3, 2, 2, 1, 1],
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Selecciones con más Copas del Mundo',
            font: { size: 16 }
          }
        }
      }
    });

    // Champions Chart
    const ctx2 = document.getElementById('championsChart') as HTMLCanvasElement;
    this.championsChart = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Real Madrid', 'AC Milan', 'Bayern Munich', 'Liverpool', 'Barcelona', 'Ajax', 'PSG'],
        datasets: [{
          label: 'Champions League ganadas',
          data: [14, 7, 6, 6, 5, 4, 1],
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Clubes con más Champions League',
            font: { size: 16 }
          }
        }
      }
    });
  }

  // Opcional: Destruir las gráficas al salir para evitar memoria
  ngOnDestroy() {
    if (this.mundialesChart) this.mundialesChart.destroy();
    if (this.championsChart) this.championsChart.destroy();
  }
}
