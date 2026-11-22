import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorUncheckedUpdateWithoutSeguidoresInputObjectSchema as EscritorUncheckedUpdateWithoutSeguidoresInputObjectSchema } from "./EscritorUncheckedUpdateWithoutSeguidoresInput.schema.ts";
import { EscritorUpdateWithoutSeguidoresInputObjectSchema as EscritorUpdateWithoutSeguidoresInputObjectSchema } from "./EscritorUpdateWithoutSeguidoresInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => EscritorUpdateWithoutSeguidoresInputObjectSchema),
				z.lazy(() => EscritorUncheckedUpdateWithoutSeguidoresInputObjectSchema),
			]),
		})
		.strict();
export const EscritorUpdateToOneWithWhereWithoutSeguidoresInputObjectSchema: z.ZodType<Prisma.EscritorUpdateToOneWithWhereWithoutSeguidoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateToOneWithWhereWithoutSeguidoresInput>;
export const EscritorUpdateToOneWithWhereWithoutSeguidoresInputObjectZodSchema =
	makeSchema();
