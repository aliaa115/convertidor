import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorUncheckedCreateNestedManyWithoutAvatarInputObjectSchema as EscritorUncheckedCreateNestedManyWithoutAvatarInputObjectSchema } from "./EscritorUncheckedCreateNestedManyWithoutAvatarInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string(),
			url: z.string(),
			escritores: z
				.lazy(
					() => EscritorUncheckedCreateNestedManyWithoutAvatarInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const AvatarUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AvatarUncheckedCreateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.AvatarUncheckedCreateInput>;
export const AvatarUncheckedCreateInputObjectZodSchema = makeSchema();
