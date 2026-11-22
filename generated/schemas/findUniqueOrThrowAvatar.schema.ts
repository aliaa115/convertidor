import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { AvatarIncludeObjectSchema as AvatarIncludeObjectSchema } from "./objects/AvatarInclude.schema.ts";
import { AvatarSelectObjectSchema as AvatarSelectObjectSchema } from "./objects/AvatarSelect.schema.ts";
import { AvatarWhereUniqueInputObjectSchema as AvatarWhereUniqueInputObjectSchema } from "./objects/AvatarWhereUniqueInput.schema.ts";

export const AvatarFindUniqueOrThrowSchema: z.ZodType<Prisma.AvatarFindUniqueOrThrowArgs> = z
	.object({ select: AvatarSelectObjectSchema.optional(), include: AvatarIncludeObjectSchema.optional(), where: AvatarWhereUniqueInputObjectSchema })
	.strict() as unknown as z.ZodType<Prisma.AvatarFindUniqueOrThrowArgs>;

export const AvatarFindUniqueOrThrowZodSchema = z
	.object({ select: AvatarSelectObjectSchema.optional(), include: AvatarIncludeObjectSchema.optional(), where: AvatarWhereUniqueInputObjectSchema })
	.strict();
