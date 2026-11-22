import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EtiquetaIncludeObjectSchema as EtiquetaIncludeObjectSchema } from "./objects/EtiquetaInclude.schema.ts";
import { EtiquetaSelectObjectSchema as EtiquetaSelectObjectSchema } from "./objects/EtiquetaSelect.schema.ts";
import { EtiquetaUncheckedUpdateInputObjectSchema as EtiquetaUncheckedUpdateInputObjectSchema } from "./objects/EtiquetaUncheckedUpdateInput.schema.ts";
import { EtiquetaUpdateInputObjectSchema as EtiquetaUpdateInputObjectSchema } from "./objects/EtiquetaUpdateInput.schema.ts";
import { EtiquetaWhereUniqueInputObjectSchema as EtiquetaWhereUniqueInputObjectSchema } from "./objects/EtiquetaWhereUniqueInput.schema.ts";

export const EtiquetaUpdateOneSchema: z.ZodType<Prisma.EtiquetaUpdateArgs> = z
	.object({
		select: EtiquetaSelectObjectSchema.optional(),
		include: EtiquetaIncludeObjectSchema.optional(),
		data: z.union([EtiquetaUpdateInputObjectSchema, EtiquetaUncheckedUpdateInputObjectSchema]),
		where: EtiquetaWhereUniqueInputObjectSchema,
	})
	.strict() as unknown as z.ZodType<Prisma.EtiquetaUpdateArgs>;

export const EtiquetaUpdateOneZodSchema = z
	.object({
		select: EtiquetaSelectObjectSchema.optional(),
		include: EtiquetaIncludeObjectSchema.optional(),
		data: z.union([EtiquetaUpdateInputObjectSchema, EtiquetaUncheckedUpdateInputObjectSchema]),
		where: EtiquetaWhereUniqueInputObjectSchema,
	})
	.strict();
