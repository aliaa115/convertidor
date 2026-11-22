import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateNestedOneWithoutSeguidoresInputObjectSchema as EscritorCreateNestedOneWithoutSeguidoresInputObjectSchema } from "./EscritorCreateNestedOneWithoutSeguidoresInput.schema.ts";
import { EscritorCreateNestedOneWithoutSiguiendoInputObjectSchema as EscritorCreateNestedOneWithoutSiguiendoInputObjectSchema } from "./EscritorCreateNestedOneWithoutSiguiendoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			escritor: z.lazy(() => EscritorCreateNestedOneWithoutSiguiendoInputObjectSchema),
			seguido: z.lazy(() => EscritorCreateNestedOneWithoutSeguidoresInputObjectSchema),
		})
		.strict();
export const SeguirUsuarioCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioCreateWithoutEstadoInput>;
export const SeguirUsuarioCreateWithoutEstadoInputObjectZodSchema = makeSchema();
