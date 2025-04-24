import type { CategoryRecipe } from "./categoryRecipe.type";

export type Recipe = {
  id: string;
  name: string;
  rating: number;
  thumbnail: string;
  //   Recipe belongs to CategoryRecipe
  category: CategoryRecipe;
};
