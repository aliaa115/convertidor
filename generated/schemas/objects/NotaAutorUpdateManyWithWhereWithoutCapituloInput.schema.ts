import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NotaAutorScalarWhereInputObjectSchema as NotaAutorScalarWhereInputObjectSchema } from "./NotaAutorScalarWhereInput.schema.ts";
import { NotaAutorUncheckedUpdateManyWithoutCapituloInputObjectSchema as NotaAutorUncheckedUpdateManyWithoutCapituloInputObjectSchema } from "./NotaAutorUncheckedUpdateManyWithoutCapituloInput.schema.ts";
import { NotaAutorUpdateManyMutationInputObjectSchema as NotaAutorUpdateManyMutationInputObjectSchema } from "./NotaAutorUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => NotaAutorScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => NotaAutorUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => NotaAutorUncheckedUpdateManyWithoutCapituloInputObjectSchema,
				),
			]),
		})
		.strict();
export const NotaAutorUpdateManyWithWhereWithoutCapituloInputObjectSchema: z.ZodType<Prisma.NotaAutorUpdateManyWithWhereWithoutCapituloInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorUpdateManyWithWhereWithoutCapituloInput>;
export const NotaAutorUpdateManyWithWhereWithoutCapituloInputObjectZodSchema =
	makeSchema();
