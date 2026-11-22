import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroScalarWhereInputObjectSchema as LibroScalarWhereInputObjectSchema } from "./LibroScalarWhereInput.schema.ts";
import { LibroUncheckedUpdateManyWithoutTipoInputObjectSchema as LibroUncheckedUpdateManyWithoutTipoInputObjectSchema } from "./LibroUncheckedUpdateManyWithoutTipoInput.schema.ts";
import { LibroUpdateManyMutationInputObjectSchema as LibroUpdateManyMutationInputObjectSchema } from "./LibroUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => LibroUpdateManyMutationInputObjectSchema), z.lazy(() => LibroUncheckedUpdateManyWithoutTipoInputObjectSchema)]),
		})
		.strict();
export const LibroUpdateManyWithWhereWithoutTipoInputObjectSchema: z.ZodType<Prisma.LibroUpdateManyWithWhereWithoutTipoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateManyWithWhereWithoutTipoInput>;
export const LibroUpdateManyWithWhereWithoutTipoInputObjectZodSchema = makeSchema();
