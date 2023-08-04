import { SelectionChange, SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Golfer } from './golfer';
import { GolferSelectionService } from './golfer-selection.service';

@Component({
  selector: 'app-golfer-selection',
  templateUrl: './golfer-selection.component.html',
  styleUrls: ['./golfer-selection.component.css'],
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule],
})
export class GolferSelectionComponent implements OnInit {
  @Input() public tierNumber: number;
  @Output() public selectedGolfer: EventEmitter<Golfer> =
    new EventEmitter<Golfer>();

  public readonly displayedColumns: string[] = ['select', 'name'];
  public dataSource = new MatTableDataSource<Golfer>();
  public selection = new SelectionModel<Golfer>(false, []);

  constructor(private golferSelectionService: GolferSelectionService) {}

  ngOnInit() {
    this.golferSelectionService
      .getGolfers(this.tierNumber)
      .subscribe((golfers: Golfer[]) => {
        this.dataSource.data = golfers;
      });

    this.selection.changed.subscribe((change: SelectionChange<Golfer>) => {
      this.selectedGolfer.emit(change.added[0]);
    });
  }
}
