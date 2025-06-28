import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent {
  @ViewChild('balonContainer') balonContainer!: ElementRef;
  @ViewChild('areaIzquierda') areaIzquierda!: ElementRef;
  @ViewChild('areaCentro') areaCentro!: ElementRef;
  @ViewChild('areaDerecha') areaDerecha!: ElementRef;

  // Variables para el juego del tirador
  direcciones = ['izquierda', 'centro', 'derecha'];
  resultado = '';
  resultadoExito = false;
  tiros = 0;
  goles = 0;
  balonPateado = false;
  mostrarAnimacionPortero = false;
  posicionPortero = '50%';
  transformBalon = '';
  transitionBalon = '';
  direccionActual = '';

  // Variables para el juego del portero
  resultadoPortero = '';
  resultadoExitoPortero = false;
  tirosPortero = 0;
  atajadas = 0;
  mostrarJugadorPateando = false;
  mostrarAnimacionGuante = false;
  posicionGuante = '50%';

  // Calcula el porcentaje de goles
  get porcentajeGoles(): number {
    return this.tiros > 0 ? Math.round((this.goles / this.tiros) * 100) : 0;
  }

  // Calcula el porcentaje de atajadas
  get porcentajeAtajadas(): number {
    return this.tirosPortero > 0 ? Math.round((this.atajadas / this.tirosPortero) * 100) : 0;
  }

  // Métodos para el juego del tirador
  patear(direccionUsuario: string) {
    if (this.balonPateado) return;

    this.direccionActual = direccionUsuario;
    this.balonPateado = true;
    this.tiros++;

    const direccionPortero = this.direcciones[Math.floor(Math.random() * 3)];
    this.moverPortero(direccionPortero);

    setTimeout(() => {
      if (direccionUsuario !== direccionPortero) {
        this.resultado = `✅ ¡Gol! El portero fue a la ${direccionPortero}`;
        this.resultadoExito = true;
        this.goles++;
      } else {
        this.resultado = `❌ ¡Atajada! El portero atrapó el balón`;
        this.resultadoExito = false;
      }

      this.animarBalon(direccionUsuario);
    }, 300);
  }

  moverPortero(direccion: string) {
    this.mostrarAnimacionPortero = true;

    switch(direccion) {
      case 'izquierda':
        this.posicionPortero = '20%';
        break;
      case 'derecha':
        this.posicionPortero = '80%';
        break;
      default:
        this.posicionPortero = '50%';
    }

    setTimeout(() => {
      this.mostrarAnimacionPortero = false;
    }, 500);
  }

  animarBalon(direccion: string) {
    let translateX = '0px';

    switch(direccion) {
      case 'izquierda':
        translateX = '-100px';
        break;
      case 'derecha':
        translateX = '100px';
        break;
    }

    this.transformBalon = `translate(${translateX}, -200px) scale(0.8)`;
    this.transitionBalon = 'transform 0.8s ease-out';

    setTimeout(() => {
      this.resetearBalon();
    }, 1000);
  }

  resetearBalon() {
    this.balonPateado = false;
    this.transformBalon = '';
    this.transitionBalon = '';
  }

  empezarArrastre(event: DragEvent) {
    if (this.balonPateado) {
      event.preventDefault();
      return;
    }

    event.dataTransfer?.setData('text/plain', 'balon');
    event.dataTransfer?.setDragImage(this.balonContainer.nativeElement, 25, 25);
  }

  patearBalon() {
    if (!this.balonPateado) {
      this.patear('centro');
    }
  }

  reiniciar() {
    this.resultado = '';
    this.tiros = 0;
    this.goles = 0;
    this.balonPateado = false;
    this.posicionPortero = '50%';
    this.transformBalon = '';
    this.transitionBalon = '';
  }

  // Métodos para el juego del portero
  atajar(direccionPortero: string) {
    if (this.mostrarJugadorPateando) return;

    this.mostrarJugadorPateando = true;
    this.tirosPortero++;

    // Mover el guante a la posición seleccionada
    switch(direccionPortero) {
      case 'izquierda':
        this.posicionGuante = '20%';
        break;
      case 'derecha':
        this.posicionGuante = '80%';
        break;
      default:
        this.posicionGuante = '50%';
    }

    // Animación del guante
    this.mostrarAnimacionGuante = true;

    // Dirección aleatoria del jugador
    const direccionJugador = this.direcciones[Math.floor(Math.random() * 3)];

    setTimeout(() => {
      if (direccionPortero === direccionJugador) {
        this.resultadoPortero = `🧤 ¡Atajada! Fuiste a la ${direccionPortero}`;
        this.resultadoExitoPortero = true;
        this.atajadas++;
      } else {
        this.resultadoPortero = `⚽ ¡Gol! El jugador pateó a la ${direccionJugador}`;
        this.resultadoExitoPortero = false;
      }

      this.mostrarAnimacionGuante = false;

      setTimeout(() => {
        this.mostrarJugadorPateando = false;
        this.posicionGuante = '50%';
      }, 1000);
    }, 500);
  }

  reiniciarPortero() {
    this.resultadoPortero = '';
    this.tirosPortero = 0;
    this.atajadas = 0;
    this.mostrarJugadorPateando = false;
    this.mostrarAnimacionGuante = false;
    this.posicionGuante = '50%';
  }
}
