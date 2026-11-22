import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutLibroCategoriasInputObjectSchema as EstadoCreateWithoutLibroCategoriasInputObjectSchema } from "./EstadoCreateWithoutLibroCategoriasInput.schema.ts";
import { EstadoUncheckedCreateWithoutLibroCategoriasInputObjectSchema as EstadoUncheckedCreateWithoutLibroCategoriasInputObjectSchema } from "./EstadoUncheckedCreateWithoutLibroCategoriasInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutLibroCategoriasInputObjectSchema),
				z.lazy(
					() => EstadoUncheckedCreateWithoutLibroCategoriasInputObjectSchema,
				),
			]),
		})
		.strict();
export const EstadoCreateOrConnectWithoutLibroCategoriasInputObjectSchema: z.ZodType<Prisma.EstadoCreateOrConnectWithoutLibroCategoriasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateOrConnectWithoutLibroCategoriasInput>;
export const EstadoCreateOrConnectWithoutLibroCategoriasInputObjectZodSchema =
	makeSchema();
