import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { TipoCreateInputObjectSchema as TipoCreateInputObjectSchema } from "./objects/TipoCreateInput.schema.ts";
import { TipoIncludeObjectSchema as TipoIncludeObjectSchema } from "./objects/TipoInclude.schema.ts";
import { TipoSelectObjectSchema as TipoSelectObjectSchema } from "./objects/TipoSelect.schema.ts";
import { TipoUncheckedCreateInputObjectSchema as TipoUncheckedCreateInputObjectSchema } from "./objects/TipoUncheckedCreateInput.schema.ts";
import { TipoUncheckedUpdateInputObjectSchema as TipoUncheckedUpdateInputObjectSchema } from "./objects/TipoUncheckedUpdateInput.schema.ts";
import { TipoUpdateInputObjectSchema as TipoUpdateInputObjectSchema } from "./objects/TipoUpdateInput.schema.ts";
import { TipoWhereUniqueInputObjectSchema as TipoWhereUniqueInputObjectSchema } from "./objects/TipoWhereUniqueInput.schema.ts";

export const TipoUpsertOneSchema: z.ZodType<Prisma.TipoUpsertArgs> = z
	.object({
		select: TipoSelectObjectSchema.optional(),
		include: TipoIncludeObjectSchema.optional(),
		where: TipoWhereUniqueInputObjectSchema,
		create: z.union([TipoCreateInputObjectSchema, TipoUncheckedCreateInputObjectSchema]),
		update: z.union([TipoUpdateInputObjectSchema, TipoUncheckedUpdateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.TipoUpsertArgs>;

export const TipoUpsertOneZodSchema = z
	.object({
		select: TipoSelectObjectSchema.optional(),
		include: TipoIncludeObjectSchema.optional(),
		where: TipoWhereUniqueInputObjectSchema,
		create: z.union([TipoCreateInputObjectSchema, TipoUncheckedCreateInputObjectSchema]),
		update: z.union([TipoUpdateInputObjectSchema, TipoUncheckedUpdateInputObjectSchema]),
	})
	.strict();
