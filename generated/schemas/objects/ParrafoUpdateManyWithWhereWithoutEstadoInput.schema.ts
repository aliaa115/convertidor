import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ParrafoScalarWhereInputObjectSchema as ParrafoScalarWhereInputObjectSchema } from "./ParrafoScalarWhereInput.schema.ts";
import { ParrafoUncheckedUpdateManyWithoutEstadoInputObjectSchema as ParrafoUncheckedUpdateManyWithoutEstadoInputObjectSchema } from "./ParrafoUncheckedUpdateManyWithoutEstadoInput.schema.ts";
import { ParrafoUpdateManyMutationInputObjectSchema as ParrafoUpdateManyMutationInputObjectSchema } from "./ParrafoUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ParrafoScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => ParrafoUpdateManyMutationInputObjectSchema),
				z.lazy(() => ParrafoUncheckedUpdateManyWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const ParrafoUpdateManyWithWhereWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ParrafoUpdateManyWithWhereWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoUpdateManyWithWhereWithoutEstadoInput>;
export const ParrafoUpdateManyWithWhereWithoutEstadoInputObjectZodSchema =
	makeSchema();
