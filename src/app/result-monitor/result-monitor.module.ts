import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { IndividualResultsComponent } from './individual-results/individual-results.component';
import { OverallResultsComponent } from './overall-results/overall-results.component';
import { ResultMonitorComponent } from './result-monitor.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatCardModule, MatGridListModule],
  declarations: [
    IndividualResultsComponent,
    OverallResultsComponent,
    ResultMonitorComponent,
  ],
})
export class ResultMonitorModule {}
