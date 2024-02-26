import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DialogComponent } from '../dialog/dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, DialogComponent, MatIconModule, ConfirmDialogComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  public displayedColumns: string[] = ['campaignName', 'campaignId', 'startDate', 'endDate', 'budget', 'icon'];
  public dataSource: any = [];

  constructor (private db: AngularFirestore, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.getSearch()
  }

  openDialog() {
    this.matDialog.open(DialogComponent, {
      width: '70%'
    })
  }

  public getSearch() {
    this.db.collection('userSearch').snapshotChanges().subscribe(actions => {
      this.dataSource = actions.map(a => {
        const data = a.payload.doc.data() as { [key: string]: any };
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  editRule(row: any) {
    this.matDialog.open(DialogComponent, {
      width: '70%',
      data: row,
    })
  }

  deleteRow(row: any, event: MouseEvent) {
    event.stopPropagation();

    const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      width: '20%',
      data: { message: "Are you sure to delete the alert rule for " + row.campaignName + "?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.db.collection('userSearch').doc(row.id).delete()
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
      }
    });
  }
}
