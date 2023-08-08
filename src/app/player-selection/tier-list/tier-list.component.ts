import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Golfer } from '../../models/golfer';
import { GolferSelectionComponent } from './golfer-selection/golfer-selection.component';

@Component({
  selector: 'app-tier-list',
  standalone: true,
  imports: [CommonModule, GolferSelectionComponent, MatExpansionModule],
  templateUrl: './tier-list.component.html',
  styleUrls: ['./tier-list.component.css'],
})
export class TierListComponent implements OnInit {
  public selectedGolfers: Golfer[] = [];
  @Output() public golferSelections: EventEmitter<Golfer[]> = new EventEmitter<
    Golfer[]
  >();

  constructor() {}

  ngOnInit() {}

  public golferSelected(golfer: Golfer) {
    this.selectedGolfers[golfer.tier - 1] = golfer;

    this.golferSelections.emit(this.selectedGolfers);
  }

  public getSelectedGolfer(tier: number): Golfer {
    return this.selectedGolfers[tier - 1] || { name: '', tier: -1 };
  }
}
