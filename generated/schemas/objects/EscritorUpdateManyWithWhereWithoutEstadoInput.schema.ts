import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorScalarWhereInputObjectSchema as EscritorScalarWhereInputObjectSchema } from "./EscritorScalarWhereInput.schema.ts";
import { EscritorUncheckedUpdateManyWithoutEstadoInputObjectSchema as EscritorUncheckedUpdateManyWithoutEstadoInputObjectSchema } from "./EscritorUncheckedUpdateManyWithoutEstadoInput.schema.ts";
import { EscritorUpdateManyMutationInputObjectSchema as EscritorUpdateManyMutationInputObjectSchema } from "./EscritorUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => EscritorUpdateManyMutationInputObjectSchema), z.lazy(() => EscritorUncheckedUpdateManyWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const EscritorUpdateManyWithWhereWithoutEstadoInputObjectSchema: z.ZodType<Prisma.EscritorUpdateManyWithWhereWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateManyWithWhereWithoutEstadoInput>;
export const EscritorUpdateManyWithWhereWithoutEstadoInputObjectZodSchema = makeSchema();
