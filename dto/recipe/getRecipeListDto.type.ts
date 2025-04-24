import type { Recipe } from "~/model/recipe.type";
import type { ListResponseDto } from "../common/listResponseDto.type";

// Biasanya Data List bukan langsung dari model type tapi karena tidak ada specifikasi data yang di hilangkan atau di tambah jadi valid 
// namun jika beda harus buat seperti di category recipe
export type GetRecipeListResponseDto = ListResponseDto<Recipe>;
