import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { CapituloIncludeObjectSchema as CapituloIncludeObjectSchema } from "./objects/CapituloInclude.schema.ts";
import { CapituloSelectObjectSchema as CapituloSelectObjectSchema } from "./objects/CapituloSelect.schema.ts";
import { CapituloWhereUniqueInputObjectSchema as CapituloWhereUniqueInputObjectSchema } from "./objects/CapituloWhereUniqueInput.schema.ts";

export const CapituloFindUniqueOrThrowSchema: z.ZodType<Prisma.CapituloFindUniqueOrThrowArgs> =
	z
		.object({
			select: CapituloSelectObjectSchema.optional(),
			include: CapituloIncludeObjectSchema.optional(),
			where: CapituloWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.CapituloFindUniqueOrThrowArgs>;

export const CapituloFindUniqueOrThrowZodSchema = z
	.object({
		select: CapituloSelectObjectSchema.optional(),
		include: CapituloIncludeObjectSchema.optional(),
		where: CapituloWhereUniqueInputObjectSchema,
	})
	.strict();
