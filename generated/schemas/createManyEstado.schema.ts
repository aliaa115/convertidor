import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { EstadoCreateManyInputObjectSchema as EstadoCreateManyInputObjectSchema } from "./objects/EstadoCreateManyInput.schema.ts";

export const EstadoCreateManySchema: z.ZodType<Prisma.EstadoCreateManyArgs> = z
	.object({
		data: z.union([
			EstadoCreateManyInputObjectSchema,
			z.array(EstadoCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.EstadoCreateManyArgs>;

export const EstadoCreateManyZodSchema = z
	.object({
		data: z.union([
			EstadoCreateManyInputObjectSchema,
			z.array(EstadoCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
