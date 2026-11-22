import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateNestedManyWithoutAvatarInputObjectSchema as EscritorCreateNestedManyWithoutAvatarInputObjectSchema } from "./EscritorCreateNestedManyWithoutAvatarInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string(),
			url: z.string(),
			escritores: z.lazy(() => EscritorCreateNestedManyWithoutAvatarInputObjectSchema).optional(),
		})
		.strict();
export const AvatarCreateInputObjectSchema: z.ZodType<Prisma.AvatarCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AvatarCreateInput>;
export const AvatarCreateInputObjectZodSchema = makeSchema();
