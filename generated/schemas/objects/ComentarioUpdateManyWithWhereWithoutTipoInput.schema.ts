import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioScalarWhereInputObjectSchema as ComentarioScalarWhereInputObjectSchema } from "./ComentarioScalarWhereInput.schema.ts";
import { ComentarioUncheckedUpdateManyWithoutTipoInputObjectSchema as ComentarioUncheckedUpdateManyWithoutTipoInputObjectSchema } from "./ComentarioUncheckedUpdateManyWithoutTipoInput.schema.ts";
import { ComentarioUpdateManyMutationInputObjectSchema as ComentarioUpdateManyMutationInputObjectSchema } from "./ComentarioUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => ComentarioUpdateManyMutationInputObjectSchema),
				z.lazy(() => ComentarioUncheckedUpdateManyWithoutTipoInputObjectSchema),
			]),
		})
		.strict();
export const ComentarioUpdateManyWithWhereWithoutTipoInputObjectSchema: z.ZodType<Prisma.ComentarioUpdateManyWithWhereWithoutTipoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpdateManyWithWhereWithoutTipoInput>;
export const ComentarioUpdateManyWithWhereWithoutTipoInputObjectZodSchema =
	makeSchema();
