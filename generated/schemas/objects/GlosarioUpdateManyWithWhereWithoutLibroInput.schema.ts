import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { GlosarioScalarWhereInputObjectSchema as GlosarioScalarWhereInputObjectSchema } from "./GlosarioScalarWhereInput.schema.ts";
import { GlosarioUncheckedUpdateManyWithoutLibroInputObjectSchema as GlosarioUncheckedUpdateManyWithoutLibroInputObjectSchema } from "./GlosarioUncheckedUpdateManyWithoutLibroInput.schema.ts";
import { GlosarioUpdateManyMutationInputObjectSchema as GlosarioUpdateManyMutationInputObjectSchema } from "./GlosarioUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => GlosarioScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => GlosarioUpdateManyMutationInputObjectSchema),
				z.lazy(() => GlosarioUncheckedUpdateManyWithoutLibroInputObjectSchema),
			]),
		})
		.strict();
export const GlosarioUpdateManyWithWhereWithoutLibroInputObjectSchema: z.ZodType<Prisma.GlosarioUpdateManyWithWhereWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioUpdateManyWithWhereWithoutLibroInput>;
export const GlosarioUpdateManyWithWhereWithoutLibroInputObjectZodSchema =
	makeSchema();
