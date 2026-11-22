import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SeguirUsuarioScalarWhereInputObjectSchema as SeguirUsuarioScalarWhereInputObjectSchema } from "./SeguirUsuarioScalarWhereInput.schema.ts";
import { SeguirUsuarioUncheckedUpdateManyWithoutEstadoInputObjectSchema as SeguirUsuarioUncheckedUpdateManyWithoutEstadoInputObjectSchema } from "./SeguirUsuarioUncheckedUpdateManyWithoutEstadoInput.schema.ts";
import { SeguirUsuarioUpdateManyMutationInputObjectSchema as SeguirUsuarioUpdateManyMutationInputObjectSchema } from "./SeguirUsuarioUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => SeguirUsuarioScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => SeguirUsuarioUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => SeguirUsuarioUncheckedUpdateManyWithoutEstadoInputObjectSchema,
				),
			]),
		})
		.strict();
export const SeguirUsuarioUpdateManyWithWhereWithoutEstadoInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioUpdateManyWithWhereWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioUpdateManyWithWhereWithoutEstadoInput>;
export const SeguirUsuarioUpdateManyWithWhereWithoutEstadoInputObjectZodSchema =
	makeSchema();
