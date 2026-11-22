import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateOrConnectWithoutLibroEtiquetasInputObjectSchema as EstadoCreateOrConnectWithoutLibroEtiquetasInputObjectSchema } from "./EstadoCreateOrConnectWithoutLibroEtiquetasInput.schema.ts";
import { EstadoCreateWithoutLibroEtiquetasInputObjectSchema as EstadoCreateWithoutLibroEtiquetasInputObjectSchema } from "./EstadoCreateWithoutLibroEtiquetasInput.schema.ts";
import { EstadoUncheckedCreateWithoutLibroEtiquetasInputObjectSchema as EstadoUncheckedCreateWithoutLibroEtiquetasInputObjectSchema } from "./EstadoUncheckedCreateWithoutLibroEtiquetasInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EstadoCreateWithoutLibroEtiquetasInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutLibroEtiquetasInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EstadoCreateOrConnectWithoutLibroEtiquetasInputObjectSchema).optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCreateNestedOneWithoutLibroEtiquetasInputObjectSchema: z.ZodType<Prisma.EstadoCreateNestedOneWithoutLibroEtiquetasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateNestedOneWithoutLibroEtiquetasInput>;
export const EstadoCreateNestedOneWithoutLibroEtiquetasInputObjectZodSchema = makeSchema();
