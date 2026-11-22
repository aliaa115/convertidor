import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorUncheckedUpdateWithoutGlosariosInputObjectSchema as EscritorUncheckedUpdateWithoutGlosariosInputObjectSchema } from "./EscritorUncheckedUpdateWithoutGlosariosInput.schema.ts";
import { EscritorUpdateWithoutGlosariosInputObjectSchema as EscritorUpdateWithoutGlosariosInputObjectSchema } from "./EscritorUpdateWithoutGlosariosInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => EscritorUpdateWithoutGlosariosInputObjectSchema), z.lazy(() => EscritorUncheckedUpdateWithoutGlosariosInputObjectSchema)]),
		})
		.strict();
export const EscritorUpdateToOneWithWhereWithoutGlosariosInputObjectSchema: z.ZodType<Prisma.EscritorUpdateToOneWithWhereWithoutGlosariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateToOneWithWhereWithoutGlosariosInput>;
export const EscritorUpdateToOneWithWhereWithoutGlosariosInputObjectZodSchema = makeSchema();
