import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ParrafoScalarWhereInputObjectSchema as ParrafoScalarWhereInputObjectSchema } from "./ParrafoScalarWhereInput.schema.ts";
import { ParrafoUncheckedUpdateManyWithoutCapituloInputObjectSchema as ParrafoUncheckedUpdateManyWithoutCapituloInputObjectSchema } from "./ParrafoUncheckedUpdateManyWithoutCapituloInput.schema.ts";
import { ParrafoUpdateManyMutationInputObjectSchema as ParrafoUpdateManyMutationInputObjectSchema } from "./ParrafoUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ParrafoScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => ParrafoUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => ParrafoUncheckedUpdateManyWithoutCapituloInputObjectSchema,
				),
			]),
		})
		.strict();
export const ParrafoUpdateManyWithWhereWithoutCapituloInputObjectSchema: z.ZodType<Prisma.ParrafoUpdateManyWithWhereWithoutCapituloInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoUpdateManyWithWhereWithoutCapituloInput>;
export const ParrafoUpdateManyWithWhereWithoutCapituloInputObjectZodSchema =
	makeSchema();
