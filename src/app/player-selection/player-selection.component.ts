import { Component, OnInit } from '@angular/core';
import { TierListComponent } from './tier-list/tier-list.component';

@Component({
  selector: 'app-player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.css'],
  standalone: true,
  impoarts: [TierListComponent],
})
export class PlayerSelectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
