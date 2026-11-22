import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateWithoutEtiquetasInputObjectSchema as LibroCreateWithoutEtiquetasInputObjectSchema } from "./LibroCreateWithoutEtiquetasInput.schema.ts";
import { LibroUncheckedCreateWithoutEtiquetasInputObjectSchema as LibroUncheckedCreateWithoutEtiquetasInputObjectSchema } from "./LibroUncheckedCreateWithoutEtiquetasInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => LibroCreateWithoutEtiquetasInputObjectSchema), z.lazy(() => LibroUncheckedCreateWithoutEtiquetasInputObjectSchema)]),
		})
		.strict();
export const LibroCreateOrConnectWithoutEtiquetasInputObjectSchema: z.ZodType<Prisma.LibroCreateOrConnectWithoutEtiquetasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateOrConnectWithoutEtiquetasInput>;
export const LibroCreateOrConnectWithoutEtiquetasInputObjectZodSchema = makeSchema();
