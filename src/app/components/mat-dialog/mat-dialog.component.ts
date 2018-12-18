import {Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'geek-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.scss']
})
export class MatDialogComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<MatDialogComponent >,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {}

  public close (isDelete) {
    this.matDialogRef.close(isDelete);
  }
}
