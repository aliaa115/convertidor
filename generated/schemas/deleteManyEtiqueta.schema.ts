import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EtiquetaWhereInputObjectSchema as EtiquetaWhereInputObjectSchema } from "./objects/EtiquetaWhereInput.schema.ts";

export const EtiquetaDeleteManySchema: z.ZodType<Prisma.EtiquetaDeleteManyArgs> = z
	.object({ where: EtiquetaWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.EtiquetaDeleteManyArgs>;

export const EtiquetaDeleteManyZodSchema = z.object({ where: EtiquetaWhereInputObjectSchema.optional() }).strict();
