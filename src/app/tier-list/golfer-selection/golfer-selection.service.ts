import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Golfer } from './golfer';
import * as mockGolferData from './mock-golfers.json';

@Injectable()
export class GolferSelectionService {
  data = mockGolferData;

  constructor() {}

  public getGolfers(tier: number): Observable<Golfer[]> {
    const allGolfers: Golfer[] = this.data.golfers as Golfer[];
    console.log(allGolfers);
    const tierGolfers: Golfer[] = allGolfers.filter((golfer: Golfer) => {
      return golfer.tier === tier;
    });
    console.log(tierGolfers);

    return of(tierGolfers);
    // return of([{ name: 'hi', tier: 1 }]);
  }
}
