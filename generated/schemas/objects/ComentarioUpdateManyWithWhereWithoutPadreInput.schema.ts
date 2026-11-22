import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioScalarWhereInputObjectSchema as ComentarioScalarWhereInputObjectSchema } from "./ComentarioScalarWhereInput.schema.ts";
import { ComentarioUncheckedUpdateManyWithoutPadreInputObjectSchema as ComentarioUncheckedUpdateManyWithoutPadreInputObjectSchema } from "./ComentarioUncheckedUpdateManyWithoutPadreInput.schema.ts";
import { ComentarioUpdateManyMutationInputObjectSchema as ComentarioUpdateManyMutationInputObjectSchema } from "./ComentarioUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => ComentarioUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => ComentarioUncheckedUpdateManyWithoutPadreInputObjectSchema,
				),
			]),
		})
		.strict();
export const ComentarioUpdateManyWithWhereWithoutPadreInputObjectSchema: z.ZodType<Prisma.ComentarioUpdateManyWithWhereWithoutPadreInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpdateManyWithWhereWithoutPadreInput>;
export const ComentarioUpdateManyWithWhereWithoutPadreInputObjectZodSchema =
	makeSchema();
