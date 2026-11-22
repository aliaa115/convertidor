import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroScalarWhereInputObjectSchema as LibroScalarWhereInputObjectSchema } from "./LibroScalarWhereInput.schema.ts";
import { LibroUncheckedUpdateManyWithoutIdiomaInputObjectSchema as LibroUncheckedUpdateManyWithoutIdiomaInputObjectSchema } from "./LibroUncheckedUpdateManyWithoutIdiomaInput.schema.ts";
import { LibroUpdateManyMutationInputObjectSchema as LibroUpdateManyMutationInputObjectSchema } from "./LibroUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => LibroUpdateManyMutationInputObjectSchema), z.lazy(() => LibroUncheckedUpdateManyWithoutIdiomaInputObjectSchema)]),
		})
		.strict();
export const LibroUpdateManyWithWhereWithoutIdiomaInputObjectSchema: z.ZodType<Prisma.LibroUpdateManyWithWhereWithoutIdiomaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateManyWithWhereWithoutIdiomaInput>;
export const LibroUpdateManyWithWhereWithoutIdiomaInputObjectZodSchema = makeSchema();
