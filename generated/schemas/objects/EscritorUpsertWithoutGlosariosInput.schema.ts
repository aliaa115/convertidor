import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateWithoutGlosariosInputObjectSchema as EscritorCreateWithoutGlosariosInputObjectSchema } from "./EscritorCreateWithoutGlosariosInput.schema.ts";
import { EscritorUncheckedCreateWithoutGlosariosInputObjectSchema as EscritorUncheckedCreateWithoutGlosariosInputObjectSchema } from "./EscritorUncheckedCreateWithoutGlosariosInput.schema.ts";
import { EscritorUncheckedUpdateWithoutGlosariosInputObjectSchema as EscritorUncheckedUpdateWithoutGlosariosInputObjectSchema } from "./EscritorUncheckedUpdateWithoutGlosariosInput.schema.ts";
import { EscritorUpdateWithoutGlosariosInputObjectSchema as EscritorUpdateWithoutGlosariosInputObjectSchema } from "./EscritorUpdateWithoutGlosariosInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => EscritorUpdateWithoutGlosariosInputObjectSchema),
				z.lazy(() => EscritorUncheckedUpdateWithoutGlosariosInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => EscritorCreateWithoutGlosariosInputObjectSchema),
				z.lazy(() => EscritorUncheckedCreateWithoutGlosariosInputObjectSchema),
			]),
			where: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
		})
		.strict();
export const EscritorUpsertWithoutGlosariosInputObjectSchema: z.ZodType<Prisma.EscritorUpsertWithoutGlosariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpsertWithoutGlosariosInput>;
export const EscritorUpsertWithoutGlosariosInputObjectZodSchema = makeSchema();
