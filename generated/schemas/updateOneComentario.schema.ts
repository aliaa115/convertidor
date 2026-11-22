import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ComentarioIncludeObjectSchema as ComentarioIncludeObjectSchema } from "./objects/ComentarioInclude.schema.ts";
import { ComentarioSelectObjectSchema as ComentarioSelectObjectSchema } from "./objects/ComentarioSelect.schema.ts";
import { ComentarioUncheckedUpdateInputObjectSchema as ComentarioUncheckedUpdateInputObjectSchema } from "./objects/ComentarioUncheckedUpdateInput.schema.ts";
import { ComentarioUpdateInputObjectSchema as ComentarioUpdateInputObjectSchema } from "./objects/ComentarioUpdateInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./objects/ComentarioWhereUniqueInput.schema.ts";

export const ComentarioUpdateOneSchema: z.ZodType<Prisma.ComentarioUpdateArgs> =
	z
		.object({
			select: ComentarioSelectObjectSchema.optional(),
			include: ComentarioIncludeObjectSchema.optional(),
			data: z.union([
				ComentarioUpdateInputObjectSchema,
				ComentarioUncheckedUpdateInputObjectSchema,
			]),
			where: ComentarioWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.ComentarioUpdateArgs>;

export const ComentarioUpdateOneZodSchema = z
	.object({
		select: ComentarioSelectObjectSchema.optional(),
		include: ComentarioIncludeObjectSchema.optional(),
		data: z.union([
			ComentarioUpdateInputObjectSchema,
			ComentarioUncheckedUpdateInputObjectSchema,
		]),
		where: ComentarioWhereUniqueInputObjectSchema,
	})
	.strict();
