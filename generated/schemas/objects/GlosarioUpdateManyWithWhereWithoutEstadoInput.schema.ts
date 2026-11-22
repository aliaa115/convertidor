import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { GlosarioScalarWhereInputObjectSchema as GlosarioScalarWhereInputObjectSchema } from "./GlosarioScalarWhereInput.schema.ts";
import { GlosarioUncheckedUpdateManyWithoutEstadoInputObjectSchema as GlosarioUncheckedUpdateManyWithoutEstadoInputObjectSchema } from "./GlosarioUncheckedUpdateManyWithoutEstadoInput.schema.ts";
import { GlosarioUpdateManyMutationInputObjectSchema as GlosarioUpdateManyMutationInputObjectSchema } from "./GlosarioUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => GlosarioScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => GlosarioUpdateManyMutationInputObjectSchema),
				z.lazy(() => GlosarioUncheckedUpdateManyWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const GlosarioUpdateManyWithWhereWithoutEstadoInputObjectSchema: z.ZodType<Prisma.GlosarioUpdateManyWithWhereWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioUpdateManyWithWhereWithoutEstadoInput>;
export const GlosarioUpdateManyWithWhereWithoutEstadoInputObjectZodSchema =
	makeSchema();
