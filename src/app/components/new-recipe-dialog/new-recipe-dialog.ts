import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-recipe-dialog',
  templateUrl: './new-recipe-dialog.html',
  styleUrls: ['./new-recipe-dialog.css']
})
export class NewRecipeDialogComponent {
  constructor(private router: Router) {}
  onAddNew() {
    this.router.navigate(['edit']);
  }
}
