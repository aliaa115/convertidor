import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateOrConnectWithoutFavoritosInputObjectSchema as EstadoCreateOrConnectWithoutFavoritosInputObjectSchema } from "./EstadoCreateOrConnectWithoutFavoritosInput.schema.ts";
import { EstadoCreateWithoutFavoritosInputObjectSchema as EstadoCreateWithoutFavoritosInputObjectSchema } from "./EstadoCreateWithoutFavoritosInput.schema.ts";
import { EstadoUncheckedCreateWithoutFavoritosInputObjectSchema as EstadoUncheckedCreateWithoutFavoritosInputObjectSchema } from "./EstadoUncheckedCreateWithoutFavoritosInput.schema.ts";
import { EstadoUncheckedUpdateWithoutFavoritosInputObjectSchema as EstadoUncheckedUpdateWithoutFavoritosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutFavoritosInput.schema.ts";
import { EstadoUpdateToOneWithWhereWithoutFavoritosInputObjectSchema as EstadoUpdateToOneWithWhereWithoutFavoritosInputObjectSchema } from "./EstadoUpdateToOneWithWhereWithoutFavoritosInput.schema.ts";
import { EstadoUpdateWithoutFavoritosInputObjectSchema as EstadoUpdateWithoutFavoritosInputObjectSchema } from "./EstadoUpdateWithoutFavoritosInput.schema.ts";
import { EstadoUpsertWithoutFavoritosInputObjectSchema as EstadoUpsertWithoutFavoritosInputObjectSchema } from "./EstadoUpsertWithoutFavoritosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EstadoCreateWithoutFavoritosInputObjectSchema),
					z.lazy(() => EstadoUncheckedCreateWithoutFavoritosInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EstadoCreateOrConnectWithoutFavoritosInputObjectSchema)
				.optional(),
			upsert: z
				.lazy(() => EstadoUpsertWithoutFavoritosInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(
						() => EstadoUpdateToOneWithWhereWithoutFavoritosInputObjectSchema,
					),
					z.lazy(() => EstadoUpdateWithoutFavoritosInputObjectSchema),
					z.lazy(() => EstadoUncheckedUpdateWithoutFavoritosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EstadoUpdateOneRequiredWithoutFavoritosNestedInputObjectSchema: z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutFavoritosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutFavoritosNestedInput>;
export const EstadoUpdateOneRequiredWithoutFavoritosNestedInputObjectZodSchema =
	makeSchema();
