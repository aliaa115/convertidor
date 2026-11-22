import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EscritorUpdateOneWithoutFavoritosNestedInputObjectSchema as EscritorUpdateOneWithoutFavoritosNestedInputObjectSchema } from "./EscritorUpdateOneWithoutFavoritosNestedInput.schema.ts";
import { LibroUpdateOneWithoutFavoritosNestedInputObjectSchema as LibroUpdateOneWithoutFavoritosNestedInputObjectSchema } from "./LibroUpdateOneWithoutFavoritosNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			escritor: z.lazy(() => EscritorUpdateOneWithoutFavoritosNestedInputObjectSchema).optional(),
			libro: z.lazy(() => LibroUpdateOneWithoutFavoritosNestedInputObjectSchema).optional(),
		})
		.strict();
export const FavoritoUpdateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.FavoritoUpdateWithoutEstadoInput> = makeSchema() as unknown as z.ZodType<Prisma.FavoritoUpdateWithoutEstadoInput>;
export const FavoritoUpdateWithoutEstadoInputObjectZodSchema = makeSchema();
