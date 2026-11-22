import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { AvatarCreateManyInputObjectSchema as AvatarCreateManyInputObjectSchema } from "./objects/AvatarCreateManyInput.schema.ts";

export const AvatarCreateManySchema: z.ZodType<Prisma.AvatarCreateManyArgs> = z
	.object({
		data: z.union([
			AvatarCreateManyInputObjectSchema,
			z.array(AvatarCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.AvatarCreateManyArgs>;

export const AvatarCreateManyZodSchema = z
	.object({
		data: z.union([
			AvatarCreateManyInputObjectSchema,
			z.array(AvatarCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
