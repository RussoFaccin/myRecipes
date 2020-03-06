export enum Categories {
  AVES,
  BEBIDAS,
  BOLOS_E_TORTAS,
  CARNES,
  DOCES_E_SOBREMESAS,
  LANCHES,
  MASSAS,
  PEIXES_E_FRUTOS_DO_MAR,
  SALADAS_E_MOLHOS,
  SAUDAVEIS,
  SOPAS
}

export class Recipe {
  constructor(
    public id: number = null,
    public title: string,
    public thumb: string = null,
    public category: any = Categories.AVES,
    public ingredients: string[] = [''],
    public instructions: string[] = ['']
  ) {
    this.thumb = this.thumb  == null ? 'assets/img/add-new-image.png' : this.thumb;
  }
  static fromJson(jsonData) {
    return new Recipe(
      jsonData.id,
      jsonData.title,
      jsonData.thumb,
      jsonData.category,
      jsonData.ingredients,
      jsonData.instructions
    );
  }
  updateThumb(thumb: string) {
    this.thumb = thumb;
  }
}
