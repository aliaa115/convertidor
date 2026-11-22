import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ComentarioCreateInputObjectSchema as ComentarioCreateInputObjectSchema } from "./objects/ComentarioCreateInput.schema.ts";
import { ComentarioIncludeObjectSchema as ComentarioIncludeObjectSchema } from "./objects/ComentarioInclude.schema.ts";
import { ComentarioSelectObjectSchema as ComentarioSelectObjectSchema } from "./objects/ComentarioSelect.schema.ts";
import { ComentarioUncheckedCreateInputObjectSchema as ComentarioUncheckedCreateInputObjectSchema } from "./objects/ComentarioUncheckedCreateInput.schema.ts";

export const ComentarioCreateOneSchema: z.ZodType<Prisma.ComentarioCreateArgs> =
	z
		.object({
			select: ComentarioSelectObjectSchema.optional(),
			include: ComentarioIncludeObjectSchema.optional(),
			data: z.union([
				ComentarioCreateInputObjectSchema,
				ComentarioUncheckedCreateInputObjectSchema,
			]),
		})
		.strict() as unknown as z.ZodType<Prisma.ComentarioCreateArgs>;

export const ComentarioCreateOneZodSchema = z
	.object({
		select: ComentarioSelectObjectSchema.optional(),
		include: ComentarioIncludeObjectSchema.optional(),
		data: z.union([
			ComentarioCreateInputObjectSchema,
			ComentarioUncheckedCreateInputObjectSchema,
		]),
	})
	.strict();
