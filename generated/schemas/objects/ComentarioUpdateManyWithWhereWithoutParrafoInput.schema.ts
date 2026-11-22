import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioScalarWhereInputObjectSchema as ComentarioScalarWhereInputObjectSchema } from "./ComentarioScalarWhereInput.schema.ts";
import { ComentarioUncheckedUpdateManyWithoutParrafoInputObjectSchema as ComentarioUncheckedUpdateManyWithoutParrafoInputObjectSchema } from "./ComentarioUncheckedUpdateManyWithoutParrafoInput.schema.ts";
import { ComentarioUpdateManyMutationInputObjectSchema as ComentarioUpdateManyMutationInputObjectSchema } from "./ComentarioUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => ComentarioUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => ComentarioUncheckedUpdateManyWithoutParrafoInputObjectSchema,
				),
			]),
		})
		.strict();
export const ComentarioUpdateManyWithWhereWithoutParrafoInputObjectSchema: z.ZodType<Prisma.ComentarioUpdateManyWithWhereWithoutParrafoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpdateManyWithWhereWithoutParrafoInput>;
export const ComentarioUpdateManyWithWhereWithoutParrafoInputObjectZodSchema =
	makeSchema();
