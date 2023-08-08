import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Golfer } from '../../../models/golfer';
import * as mockGolferData from './mock-golfers.json';

@Injectable()
export class GolferSelectionService {
  data = mockGolferData;

  constructor() {}

  public getGolfers(tier: number): Observable<Golfer[]> {
    const allGolfers: Golfer[] = this.data.golfers as Golfer[];
    const tierGolfers: Golfer[] = allGolfers.filter((golfer: Golfer) => {
      return golfer.tier === tier;
    });

    return of(tierGolfers);
  }
}
