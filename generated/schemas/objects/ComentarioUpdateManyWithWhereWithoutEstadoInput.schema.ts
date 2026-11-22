import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioScalarWhereInputObjectSchema as ComentarioScalarWhereInputObjectSchema } from "./ComentarioScalarWhereInput.schema.ts";
import { ComentarioUncheckedUpdateManyWithoutEstadoInputObjectSchema as ComentarioUncheckedUpdateManyWithoutEstadoInputObjectSchema } from "./ComentarioUncheckedUpdateManyWithoutEstadoInput.schema.ts";
import { ComentarioUpdateManyMutationInputObjectSchema as ComentarioUpdateManyMutationInputObjectSchema } from "./ComentarioUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => ComentarioUpdateManyMutationInputObjectSchema), z.lazy(() => ComentarioUncheckedUpdateManyWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const ComentarioUpdateManyWithWhereWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ComentarioUpdateManyWithWhereWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpdateManyWithWhereWithoutEstadoInput>;
export const ComentarioUpdateManyWithWhereWithoutEstadoInputObjectZodSchema = makeSchema();
