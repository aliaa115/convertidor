import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateOrConnectWithoutLibroCategoriasInputObjectSchema as EstadoCreateOrConnectWithoutLibroCategoriasInputObjectSchema } from "./EstadoCreateOrConnectWithoutLibroCategoriasInput.schema.ts";
import { EstadoCreateWithoutLibroCategoriasInputObjectSchema as EstadoCreateWithoutLibroCategoriasInputObjectSchema } from "./EstadoCreateWithoutLibroCategoriasInput.schema.ts";
import { EstadoUncheckedCreateWithoutLibroCategoriasInputObjectSchema as EstadoUncheckedCreateWithoutLibroCategoriasInputObjectSchema } from "./EstadoUncheckedCreateWithoutLibroCategoriasInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EstadoCreateWithoutLibroCategoriasInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutLibroCategoriasInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EstadoCreateOrConnectWithoutLibroCategoriasInputObjectSchema).optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCreateNestedOneWithoutLibroCategoriasInputObjectSchema: z.ZodType<Prisma.EstadoCreateNestedOneWithoutLibroCategoriasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateNestedOneWithoutLibroCategoriasInput>;
export const EstadoCreateNestedOneWithoutLibroCategoriasInputObjectZodSchema = makeSchema();
