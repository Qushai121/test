import type { Recipe } from "./recipe.type";

export type CategoryRecipe = {
  id: number | string;
  name: string;
  icon: string;
  // jika ada di ruang admin ada input color dan bentukan cardnya sebagai preview akhir
  colorScheme: string;
  //   Category Recipe has many recipe
  // recipes: Recipe[];
};
