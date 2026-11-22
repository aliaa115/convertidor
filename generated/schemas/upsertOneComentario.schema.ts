import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ComentarioCreateInputObjectSchema as ComentarioCreateInputObjectSchema } from "./objects/ComentarioCreateInput.schema.ts";
import { ComentarioIncludeObjectSchema as ComentarioIncludeObjectSchema } from "./objects/ComentarioInclude.schema.ts";
import { ComentarioSelectObjectSchema as ComentarioSelectObjectSchema } from "./objects/ComentarioSelect.schema.ts";
import { ComentarioUncheckedCreateInputObjectSchema as ComentarioUncheckedCreateInputObjectSchema } from "./objects/ComentarioUncheckedCreateInput.schema.ts";
import { ComentarioUncheckedUpdateInputObjectSchema as ComentarioUncheckedUpdateInputObjectSchema } from "./objects/ComentarioUncheckedUpdateInput.schema.ts";
import { ComentarioUpdateInputObjectSchema as ComentarioUpdateInputObjectSchema } from "./objects/ComentarioUpdateInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./objects/ComentarioWhereUniqueInput.schema.ts";

export const ComentarioUpsertOneSchema: z.ZodType<Prisma.ComentarioUpsertArgs> =
	z
		.object({
			select: ComentarioSelectObjectSchema.optional(),
			include: ComentarioIncludeObjectSchema.optional(),
			where: ComentarioWhereUniqueInputObjectSchema,
			create: z.union([
				ComentarioCreateInputObjectSchema,
				ComentarioUncheckedCreateInputObjectSchema,
			]),
			update: z.union([
				ComentarioUpdateInputObjectSchema,
				ComentarioUncheckedUpdateInputObjectSchema,
			]),
		})
		.strict() as unknown as z.ZodType<Prisma.ComentarioUpsertArgs>;

export const ComentarioUpsertOneZodSchema = z
	.object({
		select: ComentarioSelectObjectSchema.optional(),
		include: ComentarioIncludeObjectSchema.optional(),
		where: ComentarioWhereUniqueInputObjectSchema,
		create: z.union([
			ComentarioCreateInputObjectSchema,
			ComentarioUncheckedCreateInputObjectSchema,
		]),
		update: z.union([
			ComentarioUpdateInputObjectSchema,
			ComentarioUncheckedUpdateInputObjectSchema,
		]),
	})
	.strict();
