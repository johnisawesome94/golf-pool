import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Result } from '../models/result';
import * as mockGolferData from './individual-results/individual-results.json';

@Injectable()
export class ResultsService {
  data = mockGolferData;

  constructor() {}

  public getGroupResults(): Observable<Result[]> {
    return of(this.data.results as Result[]);
  }
}
