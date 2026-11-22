import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateOrConnectWithoutEtiquetasInputObjectSchema as LibroCreateOrConnectWithoutEtiquetasInputObjectSchema } from "./LibroCreateOrConnectWithoutEtiquetasInput.schema.ts";
import { LibroCreateWithoutEtiquetasInputObjectSchema as LibroCreateWithoutEtiquetasInputObjectSchema } from "./LibroCreateWithoutEtiquetasInput.schema.ts";
import { LibroUncheckedCreateWithoutEtiquetasInputObjectSchema as LibroUncheckedCreateWithoutEtiquetasInputObjectSchema } from "./LibroUncheckedCreateWithoutEtiquetasInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => LibroCreateWithoutEtiquetasInputObjectSchema), z.lazy(() => LibroUncheckedCreateWithoutEtiquetasInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => LibroCreateOrConnectWithoutEtiquetasInputObjectSchema).optional(),
			connect: z.lazy(() => LibroWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const LibroCreateNestedOneWithoutEtiquetasInputObjectSchema: z.ZodType<Prisma.LibroCreateNestedOneWithoutEtiquetasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateNestedOneWithoutEtiquetasInput>;
export const LibroCreateNestedOneWithoutEtiquetasInputObjectZodSchema = makeSchema();
