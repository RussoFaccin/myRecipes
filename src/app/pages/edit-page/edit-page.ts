import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
// Services
import { RecipeService } from '../../services/recipe.service';
// Models
import { Recipe, Categories } from '../../models/recipe.model';
import { ReadVarExpr } from '@angular/compiler';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.html',
  styleUrls: ['./edit-page.css']
})
export class EditPageComponent implements AfterViewInit, OnInit {
  @ViewChild('fileInput', {static: true}) fileInput;
  recipe: Recipe;
  @ViewChild('recipeThumb', { read: ElementRef, static: false })
  recipeThumb: any;
  @ViewChild('video', {static: true})
  video: any;
  @ViewChild('thirds', {static: true})
  thirds: any;
  isStreaming = false;
  entries: string[] = this.computeEntries(Categories);
  constructor(private recipeService: RecipeService, private router: Router) {
    if (!this.recipeService.selectedRecipe) {
      this.recipe = new Recipe(null, '', '/assets/img/add-new-image.png');
    } else {
      this.recipe = Recipe.fromJson(this.recipeService.selectedRecipe);
      // this.recipe = this.recipeService.selectedRecipe;
    }
  }
  ngAfterViewInit() {}
  ngOnInit() {}
  addNewThumb() {
    console.log('addNewThumb');
    this.fileInput.nativeElement.click();
  }
  choosePicture(evt) {
    const pic = evt.target.files[0];

    const reader = new FileReader();

    reader.addEventListener("load", evt => {
      console.log("RESULT", evt.target.result);
      const img = new Image();
      img.src = evt.target.result as string; // File contents here

      this.recipe.updateThumb(evt.target.result as string);
    });

    reader.readAsDataURL(pic);
  }
  updateIng(ingredients: string[]) {
    this.recipe.ingredients = ingredients;
  }
  updateInst(instructions: string[]) {
    this.recipe.instructions = instructions;
  }
  onSaveRecipe() {
    this.recipeService.addRecipe(this.recipe);
    this.router.navigate(['']);
  }
  onCancel() {
    this.router.navigate(['']);
  }
  changeCategory(category) {
    this.recipe.category = Categories[category.label];
  }

  computeEntries(entries: any): string[] {
    const localEntries: string[] = [];

    for (const entry in entries) {
      if (!Number(entry) && Number(entry) !== 0) {
        localEntries.push(entry);
      }
    }

    return localEntries;
  }
}
