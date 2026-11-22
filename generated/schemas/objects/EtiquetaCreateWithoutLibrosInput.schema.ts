import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateNestedOneWithoutEtiquetasInputObjectSchema as EstadoCreateNestedOneWithoutEtiquetasInputObjectSchema } from "./EstadoCreateNestedOneWithoutEtiquetasInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estado: z
				.lazy(() => EstadoCreateNestedOneWithoutEtiquetasInputObjectSchema)
				.optional(),
		})
		.strict();
export const EtiquetaCreateWithoutLibrosInputObjectSchema: z.ZodType<Prisma.EtiquetaCreateWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EtiquetaCreateWithoutLibrosInput>;
export const EtiquetaCreateWithoutLibrosInputObjectZodSchema = makeSchema();
