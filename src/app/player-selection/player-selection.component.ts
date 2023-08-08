import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Golfer } from '../models/golfer';
import { SnackBarModule } from '../shared/snack-bar/snack-bar.module';
import { SnackBarService } from '../shared/snack-bar/snack-bar.service';
import { TierListComponent } from './tier-list/tier-list.component';

@Component({
  selector: 'app-player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.css'],
  standalone: true,
  imports: [MatButtonModule, TierListComponent, SnackBarModule],
  providers: [SnackBarService],
})
export class PlayerSelectionComponent implements OnInit {
  private tierSelections: Golfer[] = [];

  constructor(private snackBarService: SnackBarService) {}

  ngOnInit() {}

  public setTierSelections(selections: Golfer[]) {
    this.tierSelections = selections;
  }

  public confirmSelections() {
    const emptyTier = this.tierSelections.find((selection: Golfer) => {
      return selection.name === '';
    });

    if (this.tierSelections?.length === 6 && emptyTier === undefined) {
      // TODO: call API to save selections for user.
      this.snackBarService.openSnackBar('Selection confirmed!');
    } else {
      this.snackBarService.openSnackBar(
        'One or more tiers is missing a golfer. Please select one golfer per tier.'
      );
    }
  }
}
