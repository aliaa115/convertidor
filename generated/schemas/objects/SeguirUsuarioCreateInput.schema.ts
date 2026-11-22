import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateNestedOneWithoutSeguidoresInputObjectSchema as EscritorCreateNestedOneWithoutSeguidoresInputObjectSchema } from "./EscritorCreateNestedOneWithoutSeguidoresInput.schema.ts";
import { EscritorCreateNestedOneWithoutSiguiendoInputObjectSchema as EscritorCreateNestedOneWithoutSiguiendoInputObjectSchema } from "./EscritorCreateNestedOneWithoutSiguiendoInput.schema.ts";
import { EstadoCreateNestedOneWithoutSeguirUsuariosInputObjectSchema as EstadoCreateNestedOneWithoutSeguirUsuariosInputObjectSchema } from "./EstadoCreateNestedOneWithoutSeguirUsuariosInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.coerce.date().optional(),
			escritor: z.lazy(() => EscritorCreateNestedOneWithoutSiguiendoInputObjectSchema),
			seguido: z.lazy(() => EscritorCreateNestedOneWithoutSeguidoresInputObjectSchema),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutSeguirUsuariosInputObjectSchema).optional(),
		})
		.strict();
export const SeguirUsuarioCreateInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioCreateInput>;
export const SeguirUsuarioCreateInputObjectZodSchema = makeSchema();
