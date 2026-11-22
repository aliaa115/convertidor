import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EtiquetaCreateInputObjectSchema as EtiquetaCreateInputObjectSchema } from "./objects/EtiquetaCreateInput.schema.ts";
import { EtiquetaIncludeObjectSchema as EtiquetaIncludeObjectSchema } from "./objects/EtiquetaInclude.schema.ts";
import { EtiquetaSelectObjectSchema as EtiquetaSelectObjectSchema } from "./objects/EtiquetaSelect.schema.ts";
import { EtiquetaUncheckedCreateInputObjectSchema as EtiquetaUncheckedCreateInputObjectSchema } from "./objects/EtiquetaUncheckedCreateInput.schema.ts";

export const EtiquetaCreateOneSchema: z.ZodType<Prisma.EtiquetaCreateArgs> = z
	.object({
		select: EtiquetaSelectObjectSchema.optional(),
		include: EtiquetaIncludeObjectSchema.optional(),
		data: z.union([EtiquetaCreateInputObjectSchema, EtiquetaUncheckedCreateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.EtiquetaCreateArgs>;

export const EtiquetaCreateOneZodSchema = z
	.object({
		select: EtiquetaSelectObjectSchema.optional(),
		include: EtiquetaIncludeObjectSchema.optional(),
		data: z.union([EtiquetaCreateInputObjectSchema, EtiquetaUncheckedCreateInputObjectSchema]),
	})
	.strict();
