import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCategoriaScalarWhereInputObjectSchema as LibroCategoriaScalarWhereInputObjectSchema } from "./LibroCategoriaScalarWhereInput.schema.ts";
import { LibroCategoriaUncheckedUpdateManyWithoutLibroInputObjectSchema as LibroCategoriaUncheckedUpdateManyWithoutLibroInputObjectSchema } from "./LibroCategoriaUncheckedUpdateManyWithoutLibroInput.schema.ts";
import { LibroCategoriaUpdateManyMutationInputObjectSchema as LibroCategoriaUpdateManyMutationInputObjectSchema } from "./LibroCategoriaUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroCategoriaScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => LibroCategoriaUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => LibroCategoriaUncheckedUpdateManyWithoutLibroInputObjectSchema,
				),
			]),
		})
		.strict();
export const LibroCategoriaUpdateManyWithWhereWithoutLibroInputObjectSchema: z.ZodType<Prisma.LibroCategoriaUpdateManyWithWhereWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaUpdateManyWithWhereWithoutLibroInput>;
export const LibroCategoriaUpdateManyWithWhereWithoutLibroInputObjectZodSchema =
	makeSchema();
