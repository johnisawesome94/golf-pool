import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Golfer } from './golfer';
import * as mockGolferData from './mock-golfers.json';

@Injectable()
export class GolferSelectionService {
  data = mockGolferData;

  constructor(private http: HttpClient) {}

  public getGolfers(tier: number): Observable<Golfer[]> {
    const allGolfers: Golfer[] = this.data as Golfer[];
    const tierGolfers: Golfer[] = allGolfers.filter((golfer: Golfer) => {
      return golfer.tier === tier;
    });

    return of(tierGolfers);
  }
}
