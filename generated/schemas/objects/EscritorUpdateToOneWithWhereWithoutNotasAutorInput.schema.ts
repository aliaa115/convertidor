import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorUncheckedUpdateWithoutNotasAutorInputObjectSchema as EscritorUncheckedUpdateWithoutNotasAutorInputObjectSchema } from "./EscritorUncheckedUpdateWithoutNotasAutorInput.schema.ts";
import { EscritorUpdateWithoutNotasAutorInputObjectSchema as EscritorUpdateWithoutNotasAutorInputObjectSchema } from "./EscritorUpdateWithoutNotasAutorInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => EscritorUpdateWithoutNotasAutorInputObjectSchema),
				z.lazy(() => EscritorUncheckedUpdateWithoutNotasAutorInputObjectSchema),
			]),
		})
		.strict();
export const EscritorUpdateToOneWithWhereWithoutNotasAutorInputObjectSchema: z.ZodType<Prisma.EscritorUpdateToOneWithWhereWithoutNotasAutorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateToOneWithWhereWithoutNotasAutorInput>;
export const EscritorUpdateToOneWithWhereWithoutNotasAutorInputObjectZodSchema =
	makeSchema();
