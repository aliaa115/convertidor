import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { AvatarCreateManyInputObjectSchema as AvatarCreateManyInputObjectSchema } from "./objects/AvatarCreateManyInput.schema.ts";
import { AvatarSelectObjectSchema as AvatarSelectObjectSchema } from "./objects/AvatarSelect.schema.ts";

export const AvatarCreateManyAndReturnSchema: z.ZodType<Prisma.AvatarCreateManyAndReturnArgs> = z
	.object({ select: AvatarSelectObjectSchema.optional(), data: z.union([AvatarCreateManyInputObjectSchema, z.array(AvatarCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict() as unknown as z.ZodType<Prisma.AvatarCreateManyAndReturnArgs>;

export const AvatarCreateManyAndReturnZodSchema = z
	.object({ select: AvatarSelectObjectSchema.optional(), data: z.union([AvatarCreateManyInputObjectSchema, z.array(AvatarCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict();
