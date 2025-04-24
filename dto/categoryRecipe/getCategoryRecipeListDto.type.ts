import type { ListResponseDto } from "../common/listResponseDto.type";

export type GetCategoryRecipeListResponseDto =
  ListResponseDto<GetCategoryRecipeListResponseDataDto>;

export type GetCategoryRecipeListResponseDataDto = {
  id: number;
  name: string;
  icon: string;
  colorScheme: string;
  countRecipes: number;
};
