import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EtiquetaCreateInputObjectSchema as EtiquetaCreateInputObjectSchema } from "./objects/EtiquetaCreateInput.schema.ts";
import { EtiquetaIncludeObjectSchema as EtiquetaIncludeObjectSchema } from "./objects/EtiquetaInclude.schema.ts";
import { EtiquetaSelectObjectSchema as EtiquetaSelectObjectSchema } from "./objects/EtiquetaSelect.schema.ts";
import { EtiquetaUncheckedCreateInputObjectSchema as EtiquetaUncheckedCreateInputObjectSchema } from "./objects/EtiquetaUncheckedCreateInput.schema.ts";
import { EtiquetaUncheckedUpdateInputObjectSchema as EtiquetaUncheckedUpdateInputObjectSchema } from "./objects/EtiquetaUncheckedUpdateInput.schema.ts";
import { EtiquetaUpdateInputObjectSchema as EtiquetaUpdateInputObjectSchema } from "./objects/EtiquetaUpdateInput.schema.ts";
import { EtiquetaWhereUniqueInputObjectSchema as EtiquetaWhereUniqueInputObjectSchema } from "./objects/EtiquetaWhereUniqueInput.schema.ts";

export const EtiquetaUpsertOneSchema: z.ZodType<Prisma.EtiquetaUpsertArgs> = z
	.object({
		select: EtiquetaSelectObjectSchema.optional(),
		include: EtiquetaIncludeObjectSchema.optional(),
		where: EtiquetaWhereUniqueInputObjectSchema,
		create: z.union([EtiquetaCreateInputObjectSchema, EtiquetaUncheckedCreateInputObjectSchema]),
		update: z.union([EtiquetaUpdateInputObjectSchema, EtiquetaUncheckedUpdateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.EtiquetaUpsertArgs>;

export const EtiquetaUpsertOneZodSchema = z
	.object({
		select: EtiquetaSelectObjectSchema.optional(),
		include: EtiquetaIncludeObjectSchema.optional(),
		where: EtiquetaWhereUniqueInputObjectSchema,
		create: z.union([EtiquetaCreateInputObjectSchema, EtiquetaUncheckedCreateInputObjectSchema]),
		update: z.union([EtiquetaUpdateInputObjectSchema, EtiquetaUncheckedUpdateInputObjectSchema]),
	})
	.strict();
