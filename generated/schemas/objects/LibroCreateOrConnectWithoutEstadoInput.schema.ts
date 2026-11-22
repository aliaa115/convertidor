import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateWithoutEstadoInputObjectSchema as LibroCreateWithoutEstadoInputObjectSchema } from "./LibroCreateWithoutEstadoInput.schema.ts";
import { LibroUncheckedCreateWithoutEstadoInputObjectSchema as LibroUncheckedCreateWithoutEstadoInputObjectSchema } from "./LibroUncheckedCreateWithoutEstadoInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => LibroCreateWithoutEstadoInputObjectSchema), z.lazy(() => LibroUncheckedCreateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const LibroCreateOrConnectWithoutEstadoInputObjectSchema: z.ZodType<Prisma.LibroCreateOrConnectWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateOrConnectWithoutEstadoInput>;
export const LibroCreateOrConnectWithoutEstadoInputObjectZodSchema = makeSchema();
