import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { TipoIncludeObjectSchema as TipoIncludeObjectSchema } from "./objects/TipoInclude.schema.ts";
import { TipoSelectObjectSchema as TipoSelectObjectSchema } from "./objects/TipoSelect.schema.ts";
import { TipoUncheckedUpdateInputObjectSchema as TipoUncheckedUpdateInputObjectSchema } from "./objects/TipoUncheckedUpdateInput.schema.ts";
import { TipoUpdateInputObjectSchema as TipoUpdateInputObjectSchema } from "./objects/TipoUpdateInput.schema.ts";
import { TipoWhereUniqueInputObjectSchema as TipoWhereUniqueInputObjectSchema } from "./objects/TipoWhereUniqueInput.schema.ts";

export const TipoUpdateOneSchema: z.ZodType<Prisma.TipoUpdateArgs> = z
	.object({
		select: TipoSelectObjectSchema.optional(),
		include: TipoIncludeObjectSchema.optional(),
		data: z.union([
			TipoUpdateInputObjectSchema,
			TipoUncheckedUpdateInputObjectSchema,
		]),
		where: TipoWhereUniqueInputObjectSchema,
	})
	.strict() as unknown as z.ZodType<Prisma.TipoUpdateArgs>;

export const TipoUpdateOneZodSchema = z
	.object({
		select: TipoSelectObjectSchema.optional(),
		include: TipoIncludeObjectSchema.optional(),
		data: z.union([
			TipoUpdateInputObjectSchema,
			TipoUncheckedUpdateInputObjectSchema,
		]),
		where: TipoWhereUniqueInputObjectSchema,
	})
	.strict();
