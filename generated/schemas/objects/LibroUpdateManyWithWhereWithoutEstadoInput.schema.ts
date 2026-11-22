import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroScalarWhereInputObjectSchema as LibroScalarWhereInputObjectSchema } from "./LibroScalarWhereInput.schema.ts";
import { LibroUncheckedUpdateManyWithoutEstadoInputObjectSchema as LibroUncheckedUpdateManyWithoutEstadoInputObjectSchema } from "./LibroUncheckedUpdateManyWithoutEstadoInput.schema.ts";
import { LibroUpdateManyMutationInputObjectSchema as LibroUpdateManyMutationInputObjectSchema } from "./LibroUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => LibroUpdateManyMutationInputObjectSchema), z.lazy(() => LibroUncheckedUpdateManyWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const LibroUpdateManyWithWhereWithoutEstadoInputObjectSchema: z.ZodType<Prisma.LibroUpdateManyWithWhereWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateManyWithWhereWithoutEstadoInput>;
export const LibroUpdateManyWithWhereWithoutEstadoInputObjectZodSchema = makeSchema();
