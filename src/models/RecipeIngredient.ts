export default interface RecipeIngredient {
  id: number;
  measure: string;
  recipeId: number;
  ingredientId: number;
  ingredient: {
    id: number;
    name: string;
  }
}
