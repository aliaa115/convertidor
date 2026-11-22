import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorUncheckedUpdateWithoutSiguiendoInputObjectSchema as EscritorUncheckedUpdateWithoutSiguiendoInputObjectSchema } from "./EscritorUncheckedUpdateWithoutSiguiendoInput.schema.ts";
import { EscritorUpdateWithoutSiguiendoInputObjectSchema as EscritorUpdateWithoutSiguiendoInputObjectSchema } from "./EscritorUpdateWithoutSiguiendoInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => EscritorUpdateWithoutSiguiendoInputObjectSchema), z.lazy(() => EscritorUncheckedUpdateWithoutSiguiendoInputObjectSchema)]),
		})
		.strict();
export const EscritorUpdateToOneWithWhereWithoutSiguiendoInputObjectSchema: z.ZodType<Prisma.EscritorUpdateToOneWithWhereWithoutSiguiendoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateToOneWithWhereWithoutSiguiendoInput>;
export const EscritorUpdateToOneWithWhereWithoutSiguiendoInputObjectZodSchema = makeSchema();
