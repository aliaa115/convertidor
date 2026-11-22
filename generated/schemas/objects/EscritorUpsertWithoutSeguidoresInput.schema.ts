import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateWithoutSeguidoresInputObjectSchema as EscritorCreateWithoutSeguidoresInputObjectSchema } from "./EscritorCreateWithoutSeguidoresInput.schema.ts";
import { EscritorUncheckedCreateWithoutSeguidoresInputObjectSchema as EscritorUncheckedCreateWithoutSeguidoresInputObjectSchema } from "./EscritorUncheckedCreateWithoutSeguidoresInput.schema.ts";
import { EscritorUncheckedUpdateWithoutSeguidoresInputObjectSchema as EscritorUncheckedUpdateWithoutSeguidoresInputObjectSchema } from "./EscritorUncheckedUpdateWithoutSeguidoresInput.schema.ts";
import { EscritorUpdateWithoutSeguidoresInputObjectSchema as EscritorUpdateWithoutSeguidoresInputObjectSchema } from "./EscritorUpdateWithoutSeguidoresInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => EscritorUpdateWithoutSeguidoresInputObjectSchema), z.lazy(() => EscritorUncheckedUpdateWithoutSeguidoresInputObjectSchema)]),
			create: z.union([z.lazy(() => EscritorCreateWithoutSeguidoresInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutSeguidoresInputObjectSchema)]),
			where: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
		})
		.strict();
export const EscritorUpsertWithoutSeguidoresInputObjectSchema: z.ZodType<Prisma.EscritorUpsertWithoutSeguidoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpsertWithoutSeguidoresInput>;
export const EscritorUpsertWithoutSeguidoresInputObjectZodSchema = makeSchema();
