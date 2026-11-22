import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCategoriaScalarWhereInputObjectSchema as LibroCategoriaScalarWhereInputObjectSchema } from "./LibroCategoriaScalarWhereInput.schema.ts";
import { LibroCategoriaUncheckedUpdateManyWithoutCategoriaInputObjectSchema as LibroCategoriaUncheckedUpdateManyWithoutCategoriaInputObjectSchema } from "./LibroCategoriaUncheckedUpdateManyWithoutCategoriaInput.schema.ts";
import { LibroCategoriaUpdateManyMutationInputObjectSchema as LibroCategoriaUpdateManyMutationInputObjectSchema } from "./LibroCategoriaUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroCategoriaScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => LibroCategoriaUpdateManyMutationInputObjectSchema),
				z.lazy(
					() =>
						LibroCategoriaUncheckedUpdateManyWithoutCategoriaInputObjectSchema,
				),
			]),
		})
		.strict();
export const LibroCategoriaUpdateManyWithWhereWithoutCategoriaInputObjectSchema: z.ZodType<Prisma.LibroCategoriaUpdateManyWithWhereWithoutCategoriaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaUpdateManyWithWhereWithoutCategoriaInput>;
export const LibroCategoriaUpdateManyWithWhereWithoutCategoriaInputObjectZodSchema =
	makeSchema();
