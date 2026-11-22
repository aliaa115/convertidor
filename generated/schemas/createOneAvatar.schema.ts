import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { AvatarCreateInputObjectSchema as AvatarCreateInputObjectSchema } from "./objects/AvatarCreateInput.schema.ts";
import { AvatarIncludeObjectSchema as AvatarIncludeObjectSchema } from "./objects/AvatarInclude.schema.ts";
import { AvatarSelectObjectSchema as AvatarSelectObjectSchema } from "./objects/AvatarSelect.schema.ts";
import { AvatarUncheckedCreateInputObjectSchema as AvatarUncheckedCreateInputObjectSchema } from "./objects/AvatarUncheckedCreateInput.schema.ts";

export const AvatarCreateOneSchema: z.ZodType<Prisma.AvatarCreateArgs> = z
	.object({
		select: AvatarSelectObjectSchema.optional(),
		include: AvatarIncludeObjectSchema.optional(),
		data: z.union([
			AvatarCreateInputObjectSchema,
			AvatarUncheckedCreateInputObjectSchema,
		]),
	})
	.strict() as unknown as z.ZodType<Prisma.AvatarCreateArgs>;

export const AvatarCreateOneZodSchema = z
	.object({
		select: AvatarSelectObjectSchema.optional(),
		include: AvatarIncludeObjectSchema.optional(),
		data: z.union([
			AvatarCreateInputObjectSchema,
			AvatarUncheckedCreateInputObjectSchema,
		]),
	})
	.strict();
