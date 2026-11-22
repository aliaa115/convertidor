import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { MarcadorIncludeObjectSchema as MarcadorIncludeObjectSchema } from "./objects/MarcadorInclude.schema.ts";
import { MarcadorSelectObjectSchema as MarcadorSelectObjectSchema } from "./objects/MarcadorSelect.schema.ts";
import { MarcadorWhereUniqueInputObjectSchema as MarcadorWhereUniqueInputObjectSchema } from "./objects/MarcadorWhereUniqueInput.schema.ts";

export const MarcadorFindUniqueOrThrowSchema: z.ZodType<Prisma.MarcadorFindUniqueOrThrowArgs> =
	z
		.object({
			select: MarcadorSelectObjectSchema.optional(),
			include: MarcadorIncludeObjectSchema.optional(),
			where: MarcadorWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.MarcadorFindUniqueOrThrowArgs>;

export const MarcadorFindUniqueOrThrowZodSchema = z
	.object({
		select: MarcadorSelectObjectSchema.optional(),
		include: MarcadorIncludeObjectSchema.optional(),
		where: MarcadorWhereUniqueInputObjectSchema,
	})
	.strict();
