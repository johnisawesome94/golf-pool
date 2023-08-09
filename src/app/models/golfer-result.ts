import { Golfer } from './golfer';

export interface GolferResult extends Golfer {
  winnings: number;
  tierRank: number;
  madeCut?: boolean;
}
