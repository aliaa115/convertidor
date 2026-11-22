import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EtiquetaUpdateManyMutationInputObjectSchema as EtiquetaUpdateManyMutationInputObjectSchema } from "./objects/EtiquetaUpdateManyMutationInput.schema.ts";
import { EtiquetaWhereInputObjectSchema as EtiquetaWhereInputObjectSchema } from "./objects/EtiquetaWhereInput.schema.ts";

export const EtiquetaUpdateManySchema: z.ZodType<Prisma.EtiquetaUpdateManyArgs> = z
	.object({ data: EtiquetaUpdateManyMutationInputObjectSchema, where: EtiquetaWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.EtiquetaUpdateManyArgs>;

export const EtiquetaUpdateManyZodSchema = z.object({ data: EtiquetaUpdateManyMutationInputObjectSchema, where: EtiquetaWhereInputObjectSchema.optional() }).strict();
