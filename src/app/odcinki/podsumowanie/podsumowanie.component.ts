import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-podsumowanie',
  templateUrl: './podsumowanie.component.html',
  styleUrls: ['./podsumowanie.component.css']
})
export class PodsumowanieComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PodsumowanieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
    }

  ngOnInit() {
  }

  zamknij() {
    this.dialogRef.close();
  }

}
