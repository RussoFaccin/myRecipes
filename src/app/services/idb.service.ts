import { Injectable } from "@angular/core";
// Models
import { Categories, Recipe } from "../models/recipe.model";

@Injectable({
  providedIn: "root"
})
export class IdbService {
  dbName: string = "MyRecipes";
  storeName: string = "Recipes";
  idb: IDBDatabase;
  store: IDBObjectStore;
  openDB() {
    return new Promise((resolve, reject) => {
      if (!window.indexedDB) {
        console.error(
          "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."
        );
        reject(
          "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."
        );
      }

      let openRequest: IDBOpenDBRequest = indexedDB.open(this.dbName, 1);

      openRequest.addEventListener("upgradeneeded", () => {
        this.idb = openRequest.result;
        this.store = this.idb.createObjectStore(this.storeName, {
          keyPath: "id",
          autoIncrement: true
        });

        this.store.createIndex("title", "title", { unique: false });
        this.store.createIndex("category", "category", { unique: false });
      });

      openRequest.addEventListener("error", err => {
        reject(err);
      });

      openRequest.addEventListener("success", evt => {
        this.idb = openRequest.result;
        resolve(true);
      });
    });
  }
  async getData() {
    await this.openDB();
    let transaction: IDBTransaction = this.idb.transaction(this.storeName, 'readonly');
    let store: IDBObjectStore = transaction.objectStore(this.storeName);

    let request = store.getAll();

    return new Promise((resolve, reject) => {
      request.addEventListener('success', (evt) => {
        resolve(request.result);
      });

      request.addEventListener('error', (evt) => {
        reject(request.error);
      });
    });
  }
  async addRecipe(recipe: Recipe) {
    if (!recipe.id) {
      delete recipe.id;
    }
    await this.openDB();
    let transaction: IDBTransaction = this.idb.transaction(this.storeName, 'readwrite');
    let store: IDBObjectStore = transaction.objectStore(this.storeName);

    let request = store.put(recipe);

    return new Promise((resolve, reject) => {
      request.addEventListener('success', (evt) => {
        resolve(request.result)
      });
    });
  }
  async deleteRecipe(recipeIndex: number) {
    await this.openDB();
    let transaction: IDBTransaction = this.idb.transaction(this.storeName, 'readwrite');
    let store: IDBObjectStore = transaction.objectStore(this.storeName);

    let request = store.delete(recipeIndex);

    return new Promise((resolve, reject) => {
      request.addEventListener('success', (evt) => {
        resolve(true)
      });

      request.addEventListener('error', (err) => {
        reject(err);
      })
    });
  }
}
