import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorScalarWhereInputObjectSchema as EscritorScalarWhereInputObjectSchema } from "./EscritorScalarWhereInput.schema.ts";
import { EscritorUncheckedUpdateManyWithoutAvatarInputObjectSchema as EscritorUncheckedUpdateManyWithoutAvatarInputObjectSchema } from "./EscritorUncheckedUpdateManyWithoutAvatarInput.schema.ts";
import { EscritorUpdateManyMutationInputObjectSchema as EscritorUpdateManyMutationInputObjectSchema } from "./EscritorUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => EscritorUpdateManyMutationInputObjectSchema), z.lazy(() => EscritorUncheckedUpdateManyWithoutAvatarInputObjectSchema)]),
		})
		.strict();
export const EscritorUpdateManyWithWhereWithoutAvatarInputObjectSchema: z.ZodType<Prisma.EscritorUpdateManyWithWhereWithoutAvatarInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateManyWithWhereWithoutAvatarInput>;
export const EscritorUpdateManyWithWhereWithoutAvatarInputObjectZodSchema = makeSchema();
