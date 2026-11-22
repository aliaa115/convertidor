import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { SeguirUsuarioCreateInputObjectSchema as SeguirUsuarioCreateInputObjectSchema } from "./objects/SeguirUsuarioCreateInput.schema.ts";
import { SeguirUsuarioIncludeObjectSchema as SeguirUsuarioIncludeObjectSchema } from "./objects/SeguirUsuarioInclude.schema.ts";
import { SeguirUsuarioSelectObjectSchema as SeguirUsuarioSelectObjectSchema } from "./objects/SeguirUsuarioSelect.schema.ts";
import { SeguirUsuarioUncheckedCreateInputObjectSchema as SeguirUsuarioUncheckedCreateInputObjectSchema } from "./objects/SeguirUsuarioUncheckedCreateInput.schema.ts";

export const SeguirUsuarioCreateOneSchema: z.ZodType<Prisma.SeguirUsuarioCreateArgs> =
	z
		.object({
			select: SeguirUsuarioSelectObjectSchema.optional(),
			include: SeguirUsuarioIncludeObjectSchema.optional(),
			data: z.union([
				SeguirUsuarioCreateInputObjectSchema,
				SeguirUsuarioUncheckedCreateInputObjectSchema,
			]),
		})
		.strict() as unknown as z.ZodType<Prisma.SeguirUsuarioCreateArgs>;

export const SeguirUsuarioCreateOneZodSchema = z
	.object({
		select: SeguirUsuarioSelectObjectSchema.optional(),
		include: SeguirUsuarioIncludeObjectSchema.optional(),
		data: z.union([
			SeguirUsuarioCreateInputObjectSchema,
			SeguirUsuarioUncheckedCreateInputObjectSchema,
		]),
	})
	.strict();
