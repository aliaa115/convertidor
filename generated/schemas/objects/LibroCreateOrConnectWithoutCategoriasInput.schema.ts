import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateWithoutCategoriasInputObjectSchema as LibroCreateWithoutCategoriasInputObjectSchema } from "./LibroCreateWithoutCategoriasInput.schema.ts";
import { LibroUncheckedCreateWithoutCategoriasInputObjectSchema as LibroUncheckedCreateWithoutCategoriasInputObjectSchema } from "./LibroUncheckedCreateWithoutCategoriasInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => LibroCreateWithoutCategoriasInputObjectSchema),
				z.lazy(() => LibroUncheckedCreateWithoutCategoriasInputObjectSchema),
			]),
		})
		.strict();
export const LibroCreateOrConnectWithoutCategoriasInputObjectSchema: z.ZodType<Prisma.LibroCreateOrConnectWithoutCategoriasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateOrConnectWithoutCategoriasInput>;
export const LibroCreateOrConnectWithoutCategoriasInputObjectZodSchema =
	makeSchema();
