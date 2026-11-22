import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ComentarioIncludeObjectSchema as ComentarioIncludeObjectSchema } from "./objects/ComentarioInclude.schema.ts";
import { ComentarioSelectObjectSchema as ComentarioSelectObjectSchema } from "./objects/ComentarioSelect.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./objects/ComentarioWhereUniqueInput.schema.ts";

export const ComentarioFindUniqueSchema: z.ZodType<Prisma.ComentarioFindUniqueArgs> =
	z
		.object({
			select: ComentarioSelectObjectSchema.optional(),
			include: ComentarioIncludeObjectSchema.optional(),
			where: ComentarioWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.ComentarioFindUniqueArgs>;

export const ComentarioFindUniqueZodSchema = z
	.object({
		select: ComentarioSelectObjectSchema.optional(),
		include: ComentarioIncludeObjectSchema.optional(),
		where: ComentarioWhereUniqueInputObjectSchema,
	})
	.strict();
