import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { AvatarCreateInputObjectSchema as AvatarCreateInputObjectSchema } from "./objects/AvatarCreateInput.schema.ts";
import { AvatarIncludeObjectSchema as AvatarIncludeObjectSchema } from "./objects/AvatarInclude.schema.ts";
import { AvatarSelectObjectSchema as AvatarSelectObjectSchema } from "./objects/AvatarSelect.schema.ts";
import { AvatarUncheckedCreateInputObjectSchema as AvatarUncheckedCreateInputObjectSchema } from "./objects/AvatarUncheckedCreateInput.schema.ts";
import { AvatarUncheckedUpdateInputObjectSchema as AvatarUncheckedUpdateInputObjectSchema } from "./objects/AvatarUncheckedUpdateInput.schema.ts";
import { AvatarUpdateInputObjectSchema as AvatarUpdateInputObjectSchema } from "./objects/AvatarUpdateInput.schema.ts";
import { AvatarWhereUniqueInputObjectSchema as AvatarWhereUniqueInputObjectSchema } from "./objects/AvatarWhereUniqueInput.schema.ts";

export const AvatarUpsertOneSchema: z.ZodType<Prisma.AvatarUpsertArgs> = z
	.object({
		select: AvatarSelectObjectSchema.optional(),
		include: AvatarIncludeObjectSchema.optional(),
		where: AvatarWhereUniqueInputObjectSchema,
		create: z.union([
			AvatarCreateInputObjectSchema,
			AvatarUncheckedCreateInputObjectSchema,
		]),
		update: z.union([
			AvatarUpdateInputObjectSchema,
			AvatarUncheckedUpdateInputObjectSchema,
		]),
	})
	.strict() as unknown as z.ZodType<Prisma.AvatarUpsertArgs>;

export const AvatarUpsertOneZodSchema = z
	.object({
		select: AvatarSelectObjectSchema.optional(),
		include: AvatarIncludeObjectSchema.optional(),
		where: AvatarWhereUniqueInputObjectSchema,
		create: z.union([
			AvatarCreateInputObjectSchema,
			AvatarUncheckedCreateInputObjectSchema,
		]),
		update: z.union([
			AvatarUpdateInputObjectSchema,
			AvatarUncheckedUpdateInputObjectSchema,
		]),
	})
	.strict();
