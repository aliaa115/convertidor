import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { GlosarioIncludeObjectSchema as GlosarioIncludeObjectSchema } from "./objects/GlosarioInclude.schema.ts";
import { GlosarioSelectObjectSchema as GlosarioSelectObjectSchema } from "./objects/GlosarioSelect.schema.ts";
import { GlosarioWhereUniqueInputObjectSchema as GlosarioWhereUniqueInputObjectSchema } from "./objects/GlosarioWhereUniqueInput.schema.ts";

export const GlosarioFindUniqueSchema: z.ZodType<Prisma.GlosarioFindUniqueArgs> =
	z
		.object({
			select: GlosarioSelectObjectSchema.optional(),
			include: GlosarioIncludeObjectSchema.optional(),
			where: GlosarioWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.GlosarioFindUniqueArgs>;

export const GlosarioFindUniqueZodSchema = z
	.object({
		select: GlosarioSelectObjectSchema.optional(),
		include: GlosarioIncludeObjectSchema.optional(),
		where: GlosarioWhereUniqueInputObjectSchema,
	})
	.strict();
