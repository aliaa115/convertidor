import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorUncheckedUpdateWithoutMarcadoresInputObjectSchema as EscritorUncheckedUpdateWithoutMarcadoresInputObjectSchema } from "./EscritorUncheckedUpdateWithoutMarcadoresInput.schema.ts";
import { EscritorUpdateWithoutMarcadoresInputObjectSchema as EscritorUpdateWithoutMarcadoresInputObjectSchema } from "./EscritorUpdateWithoutMarcadoresInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => EscritorUpdateWithoutMarcadoresInputObjectSchema),
				z.lazy(() => EscritorUncheckedUpdateWithoutMarcadoresInputObjectSchema),
			]),
		})
		.strict();
export const EscritorUpdateToOneWithWhereWithoutMarcadoresInputObjectSchema: z.ZodType<Prisma.EscritorUpdateToOneWithWhereWithoutMarcadoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateToOneWithWhereWithoutMarcadoresInput>;
export const EscritorUpdateToOneWithWhereWithoutMarcadoresInputObjectZodSchema =
	makeSchema();
