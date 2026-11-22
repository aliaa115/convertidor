import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { UsuarioScalarWhereInputObjectSchema as UsuarioScalarWhereInputObjectSchema } from "./UsuarioScalarWhereInput.schema.ts";
import { UsuarioUncheckedUpdateManyWithoutEstadoInputObjectSchema as UsuarioUncheckedUpdateManyWithoutEstadoInputObjectSchema } from "./UsuarioUncheckedUpdateManyWithoutEstadoInput.schema.ts";
import { UsuarioUpdateManyMutationInputObjectSchema as UsuarioUpdateManyMutationInputObjectSchema } from "./UsuarioUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => UsuarioScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => UsuarioUpdateManyMutationInputObjectSchema),
				z.lazy(() => UsuarioUncheckedUpdateManyWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const UsuarioUpdateManyWithWhereWithoutEstadoInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateManyWithWhereWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateManyWithWhereWithoutEstadoInput>;
export const UsuarioUpdateManyWithWhereWithoutEstadoInputObjectZodSchema =
	makeSchema();
