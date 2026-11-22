import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateOrConnectWithoutEtiquetasInputObjectSchema as EstadoCreateOrConnectWithoutEtiquetasInputObjectSchema } from "./EstadoCreateOrConnectWithoutEtiquetasInput.schema.ts";
import { EstadoCreateWithoutEtiquetasInputObjectSchema as EstadoCreateWithoutEtiquetasInputObjectSchema } from "./EstadoCreateWithoutEtiquetasInput.schema.ts";
import { EstadoUncheckedCreateWithoutEtiquetasInputObjectSchema as EstadoUncheckedCreateWithoutEtiquetasInputObjectSchema } from "./EstadoUncheckedCreateWithoutEtiquetasInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EstadoCreateWithoutEtiquetasInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutEtiquetasInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EstadoCreateOrConnectWithoutEtiquetasInputObjectSchema).optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCreateNestedOneWithoutEtiquetasInputObjectSchema: z.ZodType<Prisma.EstadoCreateNestedOneWithoutEtiquetasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateNestedOneWithoutEtiquetasInput>;
export const EstadoCreateNestedOneWithoutEtiquetasInputObjectZodSchema = makeSchema();
