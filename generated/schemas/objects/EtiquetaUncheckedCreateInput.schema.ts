import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroEtiquetaUncheckedCreateNestedManyWithoutEtiquetaInputObjectSchema as LibroEtiquetaUncheckedCreateNestedManyWithoutEtiquetaInputObjectSchema } from "./LibroEtiquetaUncheckedCreateNestedManyWithoutEtiquetaInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			estadoId: z.number().int().optional(),
			libros: z.lazy(() => LibroEtiquetaUncheckedCreateNestedManyWithoutEtiquetaInputObjectSchema).optional(),
		})
		.strict();
export const EtiquetaUncheckedCreateInputObjectSchema: z.ZodType<Prisma.EtiquetaUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EtiquetaUncheckedCreateInput>;
export const EtiquetaUncheckedCreateInputObjectZodSchema = makeSchema();
