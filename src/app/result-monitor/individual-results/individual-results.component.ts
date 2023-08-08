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
  public results: Result[] = [];

  constructor(private resultsService: ResultsService) {}

  ngOnInit() {
    console.log('got here');
    this.resultsService.getGroupResults().subscribe((results: Result[]) => {
      this.results = results;
      console.log(results);
    });
  }
}
