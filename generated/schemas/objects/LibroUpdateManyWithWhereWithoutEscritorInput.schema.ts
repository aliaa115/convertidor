import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroScalarWhereInputObjectSchema as LibroScalarWhereInputObjectSchema } from "./LibroScalarWhereInput.schema.ts";
import { LibroUncheckedUpdateManyWithoutEscritorInputObjectSchema as LibroUncheckedUpdateManyWithoutEscritorInputObjectSchema } from "./LibroUncheckedUpdateManyWithoutEscritorInput.schema.ts";
import { LibroUpdateManyMutationInputObjectSchema as LibroUpdateManyMutationInputObjectSchema } from "./LibroUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => LibroUpdateManyMutationInputObjectSchema),
				z.lazy(() => LibroUncheckedUpdateManyWithoutEscritorInputObjectSchema),
			]),
		})
		.strict();
export const LibroUpdateManyWithWhereWithoutEscritorInputObjectSchema: z.ZodType<Prisma.LibroUpdateManyWithWhereWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateManyWithWhereWithoutEscritorInput>;
export const LibroUpdateManyWithWhereWithoutEscritorInputObjectZodSchema =
	makeSchema();
