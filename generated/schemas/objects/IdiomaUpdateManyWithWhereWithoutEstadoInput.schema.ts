import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { IdiomaScalarWhereInputObjectSchema as IdiomaScalarWhereInputObjectSchema } from "./IdiomaScalarWhereInput.schema.ts";
import { IdiomaUncheckedUpdateManyWithoutEstadoInputObjectSchema as IdiomaUncheckedUpdateManyWithoutEstadoInputObjectSchema } from "./IdiomaUncheckedUpdateManyWithoutEstadoInput.schema.ts";
import { IdiomaUpdateManyMutationInputObjectSchema as IdiomaUpdateManyMutationInputObjectSchema } from "./IdiomaUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => IdiomaScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => IdiomaUpdateManyMutationInputObjectSchema),
				z.lazy(() => IdiomaUncheckedUpdateManyWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const IdiomaUpdateManyWithWhereWithoutEstadoInputObjectSchema: z.ZodType<Prisma.IdiomaUpdateManyWithWhereWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaUpdateManyWithWhereWithoutEstadoInput>;
export const IdiomaUpdateManyWithWhereWithoutEstadoInputObjectZodSchema =
	makeSchema();
