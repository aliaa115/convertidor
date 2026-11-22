import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { EstadoIncludeObjectSchema as EstadoIncludeObjectSchema } from "./objects/EstadoInclude.schema.ts";
import { EstadoSelectObjectSchema as EstadoSelectObjectSchema } from "./objects/EstadoSelect.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./objects/EstadoWhereUniqueInput.schema.ts";

export const EstadoFindUniqueOrThrowSchema: z.ZodType<Prisma.EstadoFindUniqueOrThrowArgs> =
	z
		.object({
			select: EstadoSelectObjectSchema.optional(),
			include: EstadoIncludeObjectSchema.optional(),
			where: EstadoWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.EstadoFindUniqueOrThrowArgs>;

export const EstadoFindUniqueOrThrowZodSchema = z
	.object({
		select: EstadoSelectObjectSchema.optional(),
		include: EstadoIncludeObjectSchema.optional(),
		where: EstadoWhereUniqueInputObjectSchema,
	})
	.strict();
