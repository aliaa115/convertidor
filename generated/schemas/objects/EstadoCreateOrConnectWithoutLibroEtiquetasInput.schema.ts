import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateWithoutLibroEtiquetasInputObjectSchema as EstadoCreateWithoutLibroEtiquetasInputObjectSchema } from "./EstadoCreateWithoutLibroEtiquetasInput.schema.ts";
import { EstadoUncheckedCreateWithoutLibroEtiquetasInputObjectSchema as EstadoUncheckedCreateWithoutLibroEtiquetasInputObjectSchema } from "./EstadoUncheckedCreateWithoutLibroEtiquetasInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => EstadoCreateWithoutLibroEtiquetasInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutLibroEtiquetasInputObjectSchema)]),
		})
		.strict();
export const EstadoCreateOrConnectWithoutLibroEtiquetasInputObjectSchema: z.ZodType<Prisma.EstadoCreateOrConnectWithoutLibroEtiquetasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateOrConnectWithoutLibroEtiquetasInput>;
export const EstadoCreateOrConnectWithoutLibroEtiquetasInputObjectZodSchema = makeSchema();
