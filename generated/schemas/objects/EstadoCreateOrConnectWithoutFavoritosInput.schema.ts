import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutFavoritosInputObjectSchema as EstadoCreateWithoutFavoritosInputObjectSchema } from "./EstadoCreateWithoutFavoritosInput.schema.ts";
import { EstadoUncheckedCreateWithoutFavoritosInputObjectSchema as EstadoUncheckedCreateWithoutFavoritosInputObjectSchema } from "./EstadoUncheckedCreateWithoutFavoritosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutFavoritosInputObjectSchema),
				z.lazy(() => EstadoUncheckedCreateWithoutFavoritosInputObjectSchema),
			]),
		})
		.strict();
export const EstadoCreateOrConnectWithoutFavoritosInputObjectSchema: z.ZodType<Prisma.EstadoCreateOrConnectWithoutFavoritosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateOrConnectWithoutFavoritosInput>;
export const EstadoCreateOrConnectWithoutFavoritosInputObjectZodSchema =
	makeSchema();
