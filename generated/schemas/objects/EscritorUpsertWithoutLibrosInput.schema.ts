import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateWithoutLibrosInputObjectSchema as EscritorCreateWithoutLibrosInputObjectSchema } from "./EscritorCreateWithoutLibrosInput.schema.ts";
import { EscritorUncheckedCreateWithoutLibrosInputObjectSchema as EscritorUncheckedCreateWithoutLibrosInputObjectSchema } from "./EscritorUncheckedCreateWithoutLibrosInput.schema.ts";
import { EscritorUncheckedUpdateWithoutLibrosInputObjectSchema as EscritorUncheckedUpdateWithoutLibrosInputObjectSchema } from "./EscritorUncheckedUpdateWithoutLibrosInput.schema.ts";
import { EscritorUpdateWithoutLibrosInputObjectSchema as EscritorUpdateWithoutLibrosInputObjectSchema } from "./EscritorUpdateWithoutLibrosInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => EscritorUpdateWithoutLibrosInputObjectSchema), z.lazy(() => EscritorUncheckedUpdateWithoutLibrosInputObjectSchema)]),
			create: z.union([z.lazy(() => EscritorCreateWithoutLibrosInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutLibrosInputObjectSchema)]),
			where: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
		})
		.strict();
export const EscritorUpsertWithoutLibrosInputObjectSchema: z.ZodType<Prisma.EscritorUpsertWithoutLibrosInput> = makeSchema() as unknown as z.ZodType<Prisma.EscritorUpsertWithoutLibrosInput>;
export const EscritorUpsertWithoutLibrosInputObjectZodSchema = makeSchema();
