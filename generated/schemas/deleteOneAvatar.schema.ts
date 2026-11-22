import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { AvatarIncludeObjectSchema as AvatarIncludeObjectSchema } from "./objects/AvatarInclude.schema.ts";
import { AvatarSelectObjectSchema as AvatarSelectObjectSchema } from "./objects/AvatarSelect.schema.ts";
import { AvatarWhereUniqueInputObjectSchema as AvatarWhereUniqueInputObjectSchema } from "./objects/AvatarWhereUniqueInput.schema.ts";

export const AvatarDeleteOneSchema: z.ZodType<Prisma.AvatarDeleteArgs> = z
	.object({ select: AvatarSelectObjectSchema.optional(), include: AvatarIncludeObjectSchema.optional(), where: AvatarWhereUniqueInputObjectSchema })
	.strict() as unknown as z.ZodType<Prisma.AvatarDeleteArgs>;

export const AvatarDeleteOneZodSchema = z.object({ select: AvatarSelectObjectSchema.optional(), include: AvatarIncludeObjectSchema.optional(), where: AvatarWhereUniqueInputObjectSchema }).strict();
