import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCategoriaCreateWithoutEstadoInputObjectSchema as LibroCategoriaCreateWithoutEstadoInputObjectSchema } from "./LibroCategoriaCreateWithoutEstadoInput.schema.ts";
import { LibroCategoriaUncheckedCreateWithoutEstadoInputObjectSchema as LibroCategoriaUncheckedCreateWithoutEstadoInputObjectSchema } from "./LibroCategoriaUncheckedCreateWithoutEstadoInput.schema.ts";
import { LibroCategoriaWhereUniqueInputObjectSchema as LibroCategoriaWhereUniqueInputObjectSchema } from "./LibroCategoriaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => LibroCategoriaCreateWithoutEstadoInputObjectSchema),
				z.lazy(
					() => LibroCategoriaUncheckedCreateWithoutEstadoInputObjectSchema,
				),
			]),
		})
		.strict();
export const LibroCategoriaCreateOrConnectWithoutEstadoInputObjectSchema: z.ZodType<Prisma.LibroCategoriaCreateOrConnectWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaCreateOrConnectWithoutEstadoInput>;
export const LibroCategoriaCreateOrConnectWithoutEstadoInputObjectZodSchema =
	makeSchema();
