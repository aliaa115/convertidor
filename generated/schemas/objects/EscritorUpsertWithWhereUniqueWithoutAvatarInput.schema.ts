import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateWithoutAvatarInputObjectSchema as EscritorCreateWithoutAvatarInputObjectSchema } from "./EscritorCreateWithoutAvatarInput.schema.ts";
import { EscritorUncheckedCreateWithoutAvatarInputObjectSchema as EscritorUncheckedCreateWithoutAvatarInputObjectSchema } from "./EscritorUncheckedCreateWithoutAvatarInput.schema.ts";
import { EscritorUncheckedUpdateWithoutAvatarInputObjectSchema as EscritorUncheckedUpdateWithoutAvatarInputObjectSchema } from "./EscritorUncheckedUpdateWithoutAvatarInput.schema.ts";
import { EscritorUpdateWithoutAvatarInputObjectSchema as EscritorUpdateWithoutAvatarInputObjectSchema } from "./EscritorUpdateWithoutAvatarInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => EscritorUpdateWithoutAvatarInputObjectSchema), z.lazy(() => EscritorUncheckedUpdateWithoutAvatarInputObjectSchema)]),
			create: z.union([z.lazy(() => EscritorCreateWithoutAvatarInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutAvatarInputObjectSchema)]),
		})
		.strict();
export const EscritorUpsertWithWhereUniqueWithoutAvatarInputObjectSchema: z.ZodType<Prisma.EscritorUpsertWithWhereUniqueWithoutAvatarInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpsertWithWhereUniqueWithoutAvatarInput>;
export const EscritorUpsertWithWhereUniqueWithoutAvatarInputObjectZodSchema = makeSchema();
