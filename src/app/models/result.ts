import { Golfer } from './golfer';
import { GolferResult } from './golfer-result';
import { User } from './user';

export interface Result {
  user: User;
  golferSelections: GolferResult[];
  totalWinnings: number;
}
