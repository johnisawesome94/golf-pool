import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { IndividualResultsComponent } from './individual-results/individual-results.component';
import { OverallResultsComponent } from './overall-results/overall-results.component';
import { ResultMonitorComponent } from './result-monitor.component';

@NgModule({
  imports: [MatButtonModule, MatCardModule],
  declarations: [
    IndividualResultsComponent,
    OverallResultsComponent,
    ResultMonitorComponent,
  ],
})
export class ResultMonitorModule {}
