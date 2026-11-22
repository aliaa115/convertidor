import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutFavoritosNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutFavoritosNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutFavoritosNestedInput.schema.ts";
import { LibroUpdateOneWithoutFavoritosNestedInputObjectSchema as LibroUpdateOneWithoutFavoritosNestedInputObjectSchema } from "./LibroUpdateOneWithoutFavoritosNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z
				.union([
					z.coerce.date(),
					z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
			updatedAt: z
				.union([
					z.coerce.date(),
					z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
			libro: z
				.lazy(() => LibroUpdateOneWithoutFavoritosNestedInputObjectSchema)
				.optional(),
			estado: z
				.lazy(
					() => EstadoUpdateOneRequiredWithoutFavoritosNestedInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const FavoritoUpdateWithoutEscritorInputObjectSchema: z.ZodType<Prisma.FavoritoUpdateWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoUpdateWithoutEscritorInput>;
export const FavoritoUpdateWithoutEscritorInputObjectZodSchema = makeSchema();
