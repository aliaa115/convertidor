import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorUncheckedUpdateWithoutAvatarInputObjectSchema as EscritorUncheckedUpdateWithoutAvatarInputObjectSchema } from "./EscritorUncheckedUpdateWithoutAvatarInput.schema.ts";
import { EscritorUpdateWithoutAvatarInputObjectSchema as EscritorUpdateWithoutAvatarInputObjectSchema } from "./EscritorUpdateWithoutAvatarInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => EscritorUpdateWithoutAvatarInputObjectSchema), z.lazy(() => EscritorUncheckedUpdateWithoutAvatarInputObjectSchema)]),
		})
		.strict();
export const EscritorUpdateWithWhereUniqueWithoutAvatarInputObjectSchema: z.ZodType<Prisma.EscritorUpdateWithWhereUniqueWithoutAvatarInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateWithWhereUniqueWithoutAvatarInput>;
export const EscritorUpdateWithWhereUniqueWithoutAvatarInputObjectZodSchema = makeSchema();
