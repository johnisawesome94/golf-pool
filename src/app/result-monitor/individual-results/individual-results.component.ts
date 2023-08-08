import { Component, OnInit } from '@angular/core';
import { Result } from '../../models/result';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-individual-results',
  templateUrl: './individual-results.component.html',
  styleUrls: ['./individual-results.component.css'],
  providers: [ResultsService],
})
export class IndividualResultsComponent implements OnInit {
  constructor(private resultsService: ResultsService) {}
  // constructor() {}

  ngOnInit() {
    console.log('got here');
    this.resultsService.getGroupResults().subscribe((results: Result[]) => {
      console.log(results);
    });
  }
}
