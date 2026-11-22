import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateNestedOneWithoutSeguidoresInputObjectSchema as EscritorCreateNestedOneWithoutSeguidoresInputObjectSchema } from "./EscritorCreateNestedOneWithoutSeguidoresInput.schema.ts";
import { EstadoCreateNestedOneWithoutSeguirUsuariosInputObjectSchema as EstadoCreateNestedOneWithoutSeguirUsuariosInputObjectSchema } from "./EstadoCreateNestedOneWithoutSeguirUsuariosInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			seguido: z.lazy(
				() => EscritorCreateNestedOneWithoutSeguidoresInputObjectSchema,
			),
			estado: z
				.lazy(() => EstadoCreateNestedOneWithoutSeguirUsuariosInputObjectSchema)
				.optional(),
		})
		.strict();
export const SeguirUsuarioCreateWithoutEscritorInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioCreateWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioCreateWithoutEscritorInput>;
export const SeguirUsuarioCreateWithoutEscritorInputObjectZodSchema =
	makeSchema();
