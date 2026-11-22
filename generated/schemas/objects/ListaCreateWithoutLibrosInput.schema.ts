import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateNestedOneWithoutListasInputObjectSchema as EstadoCreateNestedOneWithoutListasInputObjectSchema } from "./EstadoCreateNestedOneWithoutListasInput.schema.ts";
import { UsuarioCreateNestedOneWithoutListasInputObjectSchema as UsuarioCreateNestedOneWithoutListasInputObjectSchema } from "./UsuarioCreateNestedOneWithoutListasInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			privada: z.boolean().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			usuario: z
				.lazy(() => UsuarioCreateNestedOneWithoutListasInputObjectSchema)
				.optional(),
			estado: z
				.lazy(() => EstadoCreateNestedOneWithoutListasInputObjectSchema)
				.optional(),
		})
		.strict();
export const ListaCreateWithoutLibrosInputObjectSchema: z.ZodType<Prisma.ListaCreateWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaCreateWithoutLibrosInput>;
export const ListaCreateWithoutLibrosInputObjectZodSchema = makeSchema();
