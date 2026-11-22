import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateNestedOneWithoutSiguiendoInputObjectSchema as EscritorCreateNestedOneWithoutSiguiendoInputObjectSchema } from "./EscritorCreateNestedOneWithoutSiguiendoInput.schema.ts";
import { EstadoCreateNestedOneWithoutSeguirUsuariosInputObjectSchema as EstadoCreateNestedOneWithoutSeguirUsuariosInputObjectSchema } from "./EstadoCreateNestedOneWithoutSeguirUsuariosInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			escritor: z.lazy(
				() => EscritorCreateNestedOneWithoutSiguiendoInputObjectSchema,
			),
			estado: z
				.lazy(() => EstadoCreateNestedOneWithoutSeguirUsuariosInputObjectSchema)
				.optional(),
		})
		.strict();
export const SeguirUsuarioCreateWithoutSeguidoInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioCreateWithoutSeguidoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioCreateWithoutSeguidoInput>;
export const SeguirUsuarioCreateWithoutSeguidoInputObjectZodSchema =
	makeSchema();
