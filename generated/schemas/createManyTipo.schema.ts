import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { TipoCreateManyInputObjectSchema as TipoCreateManyInputObjectSchema } from "./objects/TipoCreateManyInput.schema.ts";

export const TipoCreateManySchema: z.ZodType<Prisma.TipoCreateManyArgs> = z
	.object({
		data: z.union([
			TipoCreateManyInputObjectSchema,
			z.array(TipoCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.TipoCreateManyArgs>;

export const TipoCreateManyZodSchema = z
	.object({
		data: z.union([
			TipoCreateManyInputObjectSchema,
			z.array(TipoCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
