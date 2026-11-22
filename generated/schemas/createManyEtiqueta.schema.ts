import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { EtiquetaCreateManyInputObjectSchema as EtiquetaCreateManyInputObjectSchema } from "./objects/EtiquetaCreateManyInput.schema.ts";

export const EtiquetaCreateManySchema: z.ZodType<Prisma.EtiquetaCreateManyArgs> =
	z
		.object({
			data: z.union([
				EtiquetaCreateManyInputObjectSchema,
				z.array(EtiquetaCreateManyInputObjectSchema),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.EtiquetaCreateManyArgs>;

export const EtiquetaCreateManyZodSchema = z
	.object({
		data: z.union([
			EtiquetaCreateManyInputObjectSchema,
			z.array(EtiquetaCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
