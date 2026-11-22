import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateWithoutSiguiendoInputObjectSchema as EscritorCreateWithoutSiguiendoInputObjectSchema } from "./EscritorCreateWithoutSiguiendoInput.schema.ts";
import { EscritorUncheckedCreateWithoutSiguiendoInputObjectSchema as EscritorUncheckedCreateWithoutSiguiendoInputObjectSchema } from "./EscritorUncheckedCreateWithoutSiguiendoInput.schema.ts";
import { EscritorUncheckedUpdateWithoutSiguiendoInputObjectSchema as EscritorUncheckedUpdateWithoutSiguiendoInputObjectSchema } from "./EscritorUncheckedUpdateWithoutSiguiendoInput.schema.ts";
import { EscritorUpdateWithoutSiguiendoInputObjectSchema as EscritorUpdateWithoutSiguiendoInputObjectSchema } from "./EscritorUpdateWithoutSiguiendoInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => EscritorUpdateWithoutSiguiendoInputObjectSchema), z.lazy(() => EscritorUncheckedUpdateWithoutSiguiendoInputObjectSchema)]),
			create: z.union([z.lazy(() => EscritorCreateWithoutSiguiendoInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutSiguiendoInputObjectSchema)]),
			where: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
		})
		.strict();
export const EscritorUpsertWithoutSiguiendoInputObjectSchema: z.ZodType<Prisma.EscritorUpsertWithoutSiguiendoInput> = makeSchema() as unknown as z.ZodType<Prisma.EscritorUpsertWithoutSiguiendoInput>;
export const EscritorUpsertWithoutSiguiendoInputObjectZodSchema = makeSchema();
