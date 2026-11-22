import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateWithoutUsuarioInputObjectSchema as EscritorCreateWithoutUsuarioInputObjectSchema } from "./EscritorCreateWithoutUsuarioInput.schema.ts";
import { EscritorUncheckedCreateWithoutUsuarioInputObjectSchema as EscritorUncheckedCreateWithoutUsuarioInputObjectSchema } from "./EscritorUncheckedCreateWithoutUsuarioInput.schema.ts";
import { EscritorUncheckedUpdateWithoutUsuarioInputObjectSchema as EscritorUncheckedUpdateWithoutUsuarioInputObjectSchema } from "./EscritorUncheckedUpdateWithoutUsuarioInput.schema.ts";
import { EscritorUpdateWithoutUsuarioInputObjectSchema as EscritorUpdateWithoutUsuarioInputObjectSchema } from "./EscritorUpdateWithoutUsuarioInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => EscritorUpdateWithoutUsuarioInputObjectSchema), z.lazy(() => EscritorUncheckedUpdateWithoutUsuarioInputObjectSchema)]),
			create: z.union([z.lazy(() => EscritorCreateWithoutUsuarioInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutUsuarioInputObjectSchema)]),
			where: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
		})
		.strict();
export const EscritorUpsertWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.EscritorUpsertWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.EscritorUpsertWithoutUsuarioInput>;
export const EscritorUpsertWithoutUsuarioInputObjectZodSchema = makeSchema();
