import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-individual-results',
  templateUrl: './individual-results.component.html',
  styleUrls: ['./individual-results.component.css'],
})
export class IndividualResultsComponent implements OnInit {
  // constructor(private resultsService: ResultsService) {}
  constructor() {}

  ngOnInit() {
    // this.resultsService.getGroupResults().subscribe((results: Result[]) => {
    //   console.log(results);
    // });
  }
}
