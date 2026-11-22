import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCategoriaScalarWhereInputObjectSchema as LibroCategoriaScalarWhereInputObjectSchema } from "./LibroCategoriaScalarWhereInput.schema.ts";
import { LibroCategoriaUncheckedUpdateManyWithoutEstadoInputObjectSchema as LibroCategoriaUncheckedUpdateManyWithoutEstadoInputObjectSchema } from "./LibroCategoriaUncheckedUpdateManyWithoutEstadoInput.schema.ts";
import { LibroCategoriaUpdateManyMutationInputObjectSchema as LibroCategoriaUpdateManyMutationInputObjectSchema } from "./LibroCategoriaUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroCategoriaScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => LibroCategoriaUpdateManyMutationInputObjectSchema), z.lazy(() => LibroCategoriaUncheckedUpdateManyWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const LibroCategoriaUpdateManyWithWhereWithoutEstadoInputObjectSchema: z.ZodType<Prisma.LibroCategoriaUpdateManyWithWhereWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaUpdateManyWithWhereWithoutEstadoInput>;
export const LibroCategoriaUpdateManyWithWhereWithoutEstadoInputObjectZodSchema = makeSchema();
