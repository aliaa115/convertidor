import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateOrConnectWithoutCategoriasInputObjectSchema as EstadoCreateOrConnectWithoutCategoriasInputObjectSchema } from "./EstadoCreateOrConnectWithoutCategoriasInput.schema.ts";
import { EstadoCreateWithoutCategoriasInputObjectSchema as EstadoCreateWithoutCategoriasInputObjectSchema } from "./EstadoCreateWithoutCategoriasInput.schema.ts";
import { EstadoUncheckedCreateWithoutCategoriasInputObjectSchema as EstadoUncheckedCreateWithoutCategoriasInputObjectSchema } from "./EstadoUncheckedCreateWithoutCategoriasInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EstadoCreateWithoutCategoriasInputObjectSchema),
					z.lazy(() => EstadoUncheckedCreateWithoutCategoriasInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EstadoCreateOrConnectWithoutCategoriasInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCreateNestedOneWithoutCategoriasInputObjectSchema: z.ZodType<Prisma.EstadoCreateNestedOneWithoutCategoriasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateNestedOneWithoutCategoriasInput>;
export const EstadoCreateNestedOneWithoutCategoriasInputObjectZodSchema =
	makeSchema();
