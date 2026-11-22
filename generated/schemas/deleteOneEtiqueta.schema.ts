import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { EtiquetaIncludeObjectSchema as EtiquetaIncludeObjectSchema } from "./objects/EtiquetaInclude.schema.ts";
import { EtiquetaSelectObjectSchema as EtiquetaSelectObjectSchema } from "./objects/EtiquetaSelect.schema.ts";
import { EtiquetaWhereUniqueInputObjectSchema as EtiquetaWhereUniqueInputObjectSchema } from "./objects/EtiquetaWhereUniqueInput.schema.ts";

export const EtiquetaDeleteOneSchema: z.ZodType<Prisma.EtiquetaDeleteArgs> = z
	.object({
		select: EtiquetaSelectObjectSchema.optional(),
		include: EtiquetaIncludeObjectSchema.optional(),
		where: EtiquetaWhereUniqueInputObjectSchema,
	})
	.strict() as unknown as z.ZodType<Prisma.EtiquetaDeleteArgs>;

export const EtiquetaDeleteOneZodSchema = z
	.object({
		select: EtiquetaSelectObjectSchema.optional(),
		include: EtiquetaIncludeObjectSchema.optional(),
		where: EtiquetaWhereUniqueInputObjectSchema,
	})
	.strict();
