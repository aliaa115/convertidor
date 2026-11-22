import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ParrafoIncludeObjectSchema as ParrafoIncludeObjectSchema } from "./objects/ParrafoInclude.schema.ts";
import { ParrafoSelectObjectSchema as ParrafoSelectObjectSchema } from "./objects/ParrafoSelect.schema.ts";
import { ParrafoWhereUniqueInputObjectSchema as ParrafoWhereUniqueInputObjectSchema } from "./objects/ParrafoWhereUniqueInput.schema.ts";

export const ParrafoFindUniqueOrThrowSchema: z.ZodType<Prisma.ParrafoFindUniqueOrThrowArgs> =
	z
		.object({
			select: ParrafoSelectObjectSchema.optional(),
			include: ParrafoIncludeObjectSchema.optional(),
			where: ParrafoWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.ParrafoFindUniqueOrThrowArgs>;

export const ParrafoFindUniqueOrThrowZodSchema = z
	.object({
		select: ParrafoSelectObjectSchema.optional(),
		include: ParrafoIncludeObjectSchema.optional(),
		where: ParrafoWhereUniqueInputObjectSchema,
	})
	.strict();
