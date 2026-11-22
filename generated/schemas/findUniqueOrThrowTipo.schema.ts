import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { TipoIncludeObjectSchema as TipoIncludeObjectSchema } from "./objects/TipoInclude.schema.ts";
import { TipoSelectObjectSchema as TipoSelectObjectSchema } from "./objects/TipoSelect.schema.ts";
import { TipoWhereUniqueInputObjectSchema as TipoWhereUniqueInputObjectSchema } from "./objects/TipoWhereUniqueInput.schema.ts";

export const TipoFindUniqueOrThrowSchema: z.ZodType<Prisma.TipoFindUniqueOrThrowArgs> =
	z
		.object({
			select: TipoSelectObjectSchema.optional(),
			include: TipoIncludeObjectSchema.optional(),
			where: TipoWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.TipoFindUniqueOrThrowArgs>;

export const TipoFindUniqueOrThrowZodSchema = z
	.object({
		select: TipoSelectObjectSchema.optional(),
		include: TipoIncludeObjectSchema.optional(),
		where: TipoWhereUniqueInputObjectSchema,
	})
	.strict();
