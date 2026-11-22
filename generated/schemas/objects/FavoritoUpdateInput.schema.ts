import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EscritorUpdateOneWithoutFavoritosNestedInputObjectSchema as EscritorUpdateOneWithoutFavoritosNestedInputObjectSchema } from "./EscritorUpdateOneWithoutFavoritosNestedInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutFavoritosNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutFavoritosNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutFavoritosNestedInput.schema.ts";
import { LibroUpdateOneWithoutFavoritosNestedInputObjectSchema as LibroUpdateOneWithoutFavoritosNestedInputObjectSchema } from "./LibroUpdateOneWithoutFavoritosNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			escritor: z.lazy(() => EscritorUpdateOneWithoutFavoritosNestedInputObjectSchema).optional(),
			libro: z.lazy(() => LibroUpdateOneWithoutFavoritosNestedInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoUpdateOneRequiredWithoutFavoritosNestedInputObjectSchema).optional(),
		})
		.strict();
export const FavoritoUpdateInputObjectSchema: z.ZodType<Prisma.FavoritoUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.FavoritoUpdateInput>;
export const FavoritoUpdateInputObjectZodSchema = makeSchema();
