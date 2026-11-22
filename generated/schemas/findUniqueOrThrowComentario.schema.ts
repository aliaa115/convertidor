import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ComentarioIncludeObjectSchema as ComentarioIncludeObjectSchema } from "./objects/ComentarioInclude.schema.ts";
import { ComentarioSelectObjectSchema as ComentarioSelectObjectSchema } from "./objects/ComentarioSelect.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./objects/ComentarioWhereUniqueInput.schema.ts";

export const ComentarioFindUniqueOrThrowSchema: z.ZodType<Prisma.ComentarioFindUniqueOrThrowArgs> =
	z
		.object({
			select: ComentarioSelectObjectSchema.optional(),
			include: ComentarioIncludeObjectSchema.optional(),
			where: ComentarioWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.ComentarioFindUniqueOrThrowArgs>;

export const ComentarioFindUniqueOrThrowZodSchema = z
	.object({
		select: ComentarioSelectObjectSchema.optional(),
		include: ComentarioIncludeObjectSchema.optional(),
		where: ComentarioWhereUniqueInputObjectSchema,
	})
	.strict();
