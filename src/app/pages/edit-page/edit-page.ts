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
  ngAfterViewInit() {
    this.video = this.video.nativeElement;
  }
  ngOnInit() {}
  addNewThumb() {
    const fileInput = document.createElement('input');
    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute('accept', 'image/*');
    
    fileInput.addEventListener('change', (evt) => {
      const imgSrc = fileInput.files[0];
      const reader = new FileReader();
      
      reader.readAsDataURL(imgSrc)
      reader.addEventListener('load', (evt) => {
        this.recipe.updateThumb(reader.result as string);
        this.isStreaming = false;
      });
    });
    fileInput.click();
  }
  takePicture() {
    // Canvas
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', '300');
    canvas.setAttribute('height', '300');
    const context = canvas.getContext('2d');
    context.drawImage(this.video, 0, 0, 300, 300);
    const thumb: string = canvas.toDataURL();
    this.recipe.updateThumb(thumb);
    this.isStreaming = false;
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
