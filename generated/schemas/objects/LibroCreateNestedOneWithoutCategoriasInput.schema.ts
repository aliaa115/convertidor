import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateOrConnectWithoutCategoriasInputObjectSchema as LibroCreateOrConnectWithoutCategoriasInputObjectSchema } from "./LibroCreateOrConnectWithoutCategoriasInput.schema.ts";
import { LibroCreateWithoutCategoriasInputObjectSchema as LibroCreateWithoutCategoriasInputObjectSchema } from "./LibroCreateWithoutCategoriasInput.schema.ts";
import { LibroUncheckedCreateWithoutCategoriasInputObjectSchema as LibroUncheckedCreateWithoutCategoriasInputObjectSchema } from "./LibroUncheckedCreateWithoutCategoriasInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => LibroCreateWithoutCategoriasInputObjectSchema),
					z.lazy(() => LibroUncheckedCreateWithoutCategoriasInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => LibroCreateOrConnectWithoutCategoriasInputObjectSchema)
				.optional(),
			connect: z.lazy(() => LibroWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const LibroCreateNestedOneWithoutCategoriasInputObjectSchema: z.ZodType<Prisma.LibroCreateNestedOneWithoutCategoriasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateNestedOneWithoutCategoriasInput>;
export const LibroCreateNestedOneWithoutCategoriasInputObjectZodSchema =
	makeSchema();
