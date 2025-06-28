import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { EquiposComponent } from './equipos/equipos.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { ClasicosComponent } from './clasicos/clasicos.component';
import { HistoriaComponent } from './historia/historia.component';
import { JuegoComponent } from './juego/juego.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'equipos', component: EquiposComponent },
  { path: 'jugadores', component: JugadoresComponent },
  { path: 'clasicos', component: ClasicosComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'juego', component: JuegoComponent },
  { path: '**', redirectTo: '' }
];
