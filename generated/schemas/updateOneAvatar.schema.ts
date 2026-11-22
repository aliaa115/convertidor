import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { AvatarIncludeObjectSchema as AvatarIncludeObjectSchema } from "./objects/AvatarInclude.schema.ts";
import { AvatarSelectObjectSchema as AvatarSelectObjectSchema } from "./objects/AvatarSelect.schema.ts";
import { AvatarUncheckedUpdateInputObjectSchema as AvatarUncheckedUpdateInputObjectSchema } from "./objects/AvatarUncheckedUpdateInput.schema.ts";
import { AvatarUpdateInputObjectSchema as AvatarUpdateInputObjectSchema } from "./objects/AvatarUpdateInput.schema.ts";
import { AvatarWhereUniqueInputObjectSchema as AvatarWhereUniqueInputObjectSchema } from "./objects/AvatarWhereUniqueInput.schema.ts";

export const AvatarUpdateOneSchema: z.ZodType<Prisma.AvatarUpdateArgs> = z
	.object({
		select: AvatarSelectObjectSchema.optional(),
		include: AvatarIncludeObjectSchema.optional(),
		data: z.union([
			AvatarUpdateInputObjectSchema,
			AvatarUncheckedUpdateInputObjectSchema,
		]),
		where: AvatarWhereUniqueInputObjectSchema,
	})
	.strict() as unknown as z.ZodType<Prisma.AvatarUpdateArgs>;

export const AvatarUpdateOneZodSchema = z
	.object({
		select: AvatarSelectObjectSchema.optional(),
		include: AvatarIncludeObjectSchema.optional(),
		data: z.union([
			AvatarUpdateInputObjectSchema,
			AvatarUncheckedUpdateInputObjectSchema,
		]),
		where: AvatarWhereUniqueInputObjectSchema,
	})
	.strict();
