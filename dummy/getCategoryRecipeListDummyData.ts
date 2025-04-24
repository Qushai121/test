import type { GetCategoryRecipeListResponseDto } from "~/dto/categoryRecipe/getCategoryRecipeListDto.type";

export const getCategoryRecipeListDummyData: GetCategoryRecipeListResponseDto =
  {
    data: [
      {
        id: 1,
        name: "Cupcake",
        icon: "/categoryRecipe/Frame.svg",
        colorScheme: "#F0FEEB",
        countRecipes: 22,
      },
      {
        id: 2,
        name: "Pizza",
        icon: "/categoryRecipe/pizza 1.svg",
        colorScheme: "#E4F2F4",
        countRecipes: 25,
      },
      {
        id: 3,
        name: "Kebab",
        icon: "/categoryRecipe/kebab 1.svg",
        colorScheme: "#EAEEFA",
        countRecipes: 12,
      },
      {
        id: 4,
        name: "Salmon",
        icon: "/categoryRecipe/salmon 1.svg",
        colorScheme: "#F9EEF3",
        countRecipes: 22,
      },
      {
        id: 5,
        name: "Doughnut",
        icon: "/categoryRecipe/doughnut 1.svg",
        colorScheme: "#F3F7D9",
        countRecipes: 25,
      },
    ],
    message: "Successfully get category recipe list",
    totalRecord: 5,
  };
