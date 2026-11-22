import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateWithoutMarcadoresInputObjectSchema as EscritorCreateWithoutMarcadoresInputObjectSchema } from "./EscritorCreateWithoutMarcadoresInput.schema.ts";
import { EscritorUncheckedCreateWithoutMarcadoresInputObjectSchema as EscritorUncheckedCreateWithoutMarcadoresInputObjectSchema } from "./EscritorUncheckedCreateWithoutMarcadoresInput.schema.ts";
import { EscritorUncheckedUpdateWithoutMarcadoresInputObjectSchema as EscritorUncheckedUpdateWithoutMarcadoresInputObjectSchema } from "./EscritorUncheckedUpdateWithoutMarcadoresInput.schema.ts";
import { EscritorUpdateWithoutMarcadoresInputObjectSchema as EscritorUpdateWithoutMarcadoresInputObjectSchema } from "./EscritorUpdateWithoutMarcadoresInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => EscritorUpdateWithoutMarcadoresInputObjectSchema),
				z.lazy(() => EscritorUncheckedUpdateWithoutMarcadoresInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => EscritorCreateWithoutMarcadoresInputObjectSchema),
				z.lazy(() => EscritorUncheckedCreateWithoutMarcadoresInputObjectSchema),
			]),
			where: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
		})
		.strict();
export const EscritorUpsertWithoutMarcadoresInputObjectSchema: z.ZodType<Prisma.EscritorUpsertWithoutMarcadoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpsertWithoutMarcadoresInput>;
export const EscritorUpsertWithoutMarcadoresInputObjectZodSchema = makeSchema();
