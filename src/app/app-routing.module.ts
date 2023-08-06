import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerSelectionComponent } from './player-selection/player-selection.component';
import { ResultMonitorComponent } from './result-monitor/result-monitor.component';
import { TournamentPrepComponent } from './tournament-prep/tournament-prep.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tournament-prep', component: TournamentPrepComponent },
  { path: 'player-selection', component: PlayerSelectionComponent },
  { path: 'result-monitor', component: ResultMonitorComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
