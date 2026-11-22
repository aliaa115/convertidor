import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateOrConnectWithoutFavoritosInputObjectSchema as EstadoCreateOrConnectWithoutFavoritosInputObjectSchema } from "./EstadoCreateOrConnectWithoutFavoritosInput.schema.ts";
import { EstadoCreateWithoutFavoritosInputObjectSchema as EstadoCreateWithoutFavoritosInputObjectSchema } from "./EstadoCreateWithoutFavoritosInput.schema.ts";
import { EstadoUncheckedCreateWithoutFavoritosInputObjectSchema as EstadoUncheckedCreateWithoutFavoritosInputObjectSchema } from "./EstadoUncheckedCreateWithoutFavoritosInput.schema.ts";
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
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCreateNestedOneWithoutFavoritosInputObjectSchema: z.ZodType<Prisma.EstadoCreateNestedOneWithoutFavoritosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateNestedOneWithoutFavoritosInput>;
export const EstadoCreateNestedOneWithoutFavoritosInputObjectZodSchema =
	makeSchema();
