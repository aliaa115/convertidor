import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioScalarWhereInputObjectSchema as ComentarioScalarWhereInputObjectSchema } from "./ComentarioScalarWhereInput.schema.ts";
import { ComentarioUncheckedUpdateManyWithoutEscritorInputObjectSchema as ComentarioUncheckedUpdateManyWithoutEscritorInputObjectSchema } from "./ComentarioUncheckedUpdateManyWithoutEscritorInput.schema.ts";
import { ComentarioUpdateManyMutationInputObjectSchema as ComentarioUpdateManyMutationInputObjectSchema } from "./ComentarioUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => ComentarioUpdateManyMutationInputObjectSchema), z.lazy(() => ComentarioUncheckedUpdateManyWithoutEscritorInputObjectSchema)]),
		})
		.strict();
export const ComentarioUpdateManyWithWhereWithoutEscritorInputObjectSchema: z.ZodType<Prisma.ComentarioUpdateManyWithWhereWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpdateManyWithWhereWithoutEscritorInput>;
export const ComentarioUpdateManyWithWhereWithoutEscritorInputObjectZodSchema = makeSchema();
