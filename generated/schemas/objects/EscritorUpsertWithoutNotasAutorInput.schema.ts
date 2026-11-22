import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateWithoutNotasAutorInputObjectSchema as EscritorCreateWithoutNotasAutorInputObjectSchema } from "./EscritorCreateWithoutNotasAutorInput.schema.ts";
import { EscritorUncheckedCreateWithoutNotasAutorInputObjectSchema as EscritorUncheckedCreateWithoutNotasAutorInputObjectSchema } from "./EscritorUncheckedCreateWithoutNotasAutorInput.schema.ts";
import { EscritorUncheckedUpdateWithoutNotasAutorInputObjectSchema as EscritorUncheckedUpdateWithoutNotasAutorInputObjectSchema } from "./EscritorUncheckedUpdateWithoutNotasAutorInput.schema.ts";
import { EscritorUpdateWithoutNotasAutorInputObjectSchema as EscritorUpdateWithoutNotasAutorInputObjectSchema } from "./EscritorUpdateWithoutNotasAutorInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => EscritorUpdateWithoutNotasAutorInputObjectSchema), z.lazy(() => EscritorUncheckedUpdateWithoutNotasAutorInputObjectSchema)]),
			create: z.union([z.lazy(() => EscritorCreateWithoutNotasAutorInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutNotasAutorInputObjectSchema)]),
			where: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
		})
		.strict();
export const EscritorUpsertWithoutNotasAutorInputObjectSchema: z.ZodType<Prisma.EscritorUpsertWithoutNotasAutorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpsertWithoutNotasAutorInput>;
export const EscritorUpsertWithoutNotasAutorInputObjectZodSchema = makeSchema();
