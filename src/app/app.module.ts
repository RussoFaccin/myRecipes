import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// Services
import { RecipeService } from './services/recipe.service';
import { IdbService } from './services/idb.service';
import { RippleDirective } from './directives/ripple.directive';
// Pages
import { HomePageComponent } from './pages/home-page/home-page';
import { EditPageComponent } from './pages/edit-page/edit-page';
import { DetailsPageComponent } from './pages/details-page/details-page';
// Components
import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeItem } from './components/recipe-item/recipe-item';
import { ListItemComponent } from './components/list-item/list-item.component';
import { EditListComponent } from './components/edit-list/edit-list.component';
import { NewRecipeDialogComponent } from './components/new-recipe-dialog/new-recipe-dialog';
import { AppSelectComponent } from './components/app-select/app-select.component';
import { AppDrawerComponent } from './components/app-drawer/app-drawer';
// Directives
import { ClickOutsideDirective } from './directives/click-outside.directive';
// Pipoes
import { CategoryName } from './pipes/category-name.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent, children: [] },
  { path: 'edit', component: EditPageComponent },
  { path: 'details', component: DetailsPageComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    // Pipes
    CategoryName,
    // Directives
    ClickOutsideDirective,
    RippleDirective,
    // Components
    AppComponent,
    AppDrawerComponent,
    RecipeListComponent,
    RecipeItem,
    ListItemComponent,
    EditListComponent,
    NewRecipeDialogComponent,
    AppSelectComponent,
    // Pages
    HomePageComponent,
    EditPageComponent,
    DetailsPageComponent,

  ],
  bootstrap: [AppComponent],
  providers: [RecipeService, IdbService]
})
export class AppModule {}
