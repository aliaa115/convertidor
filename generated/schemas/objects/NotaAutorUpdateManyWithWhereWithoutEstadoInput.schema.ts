import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NotaAutorScalarWhereInputObjectSchema as NotaAutorScalarWhereInputObjectSchema } from "./NotaAutorScalarWhereInput.schema.ts";
import { NotaAutorUncheckedUpdateManyWithoutEstadoInputObjectSchema as NotaAutorUncheckedUpdateManyWithoutEstadoInputObjectSchema } from "./NotaAutorUncheckedUpdateManyWithoutEstadoInput.schema.ts";
import { NotaAutorUpdateManyMutationInputObjectSchema as NotaAutorUpdateManyMutationInputObjectSchema } from "./NotaAutorUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => NotaAutorScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => NotaAutorUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => NotaAutorUncheckedUpdateManyWithoutEstadoInputObjectSchema,
				),
			]),
		})
		.strict();
export const NotaAutorUpdateManyWithWhereWithoutEstadoInputObjectSchema: z.ZodType<Prisma.NotaAutorUpdateManyWithWhereWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorUpdateManyWithWhereWithoutEstadoInput>;
export const NotaAutorUpdateManyWithWhereWithoutEstadoInputObjectZodSchema =
	makeSchema();
