import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCategoriaCreateWithoutLibroInputObjectSchema as LibroCategoriaCreateWithoutLibroInputObjectSchema } from "./LibroCategoriaCreateWithoutLibroInput.schema.ts";
import { LibroCategoriaUncheckedCreateWithoutLibroInputObjectSchema as LibroCategoriaUncheckedCreateWithoutLibroInputObjectSchema } from "./LibroCategoriaUncheckedCreateWithoutLibroInput.schema.ts";
import { LibroCategoriaWhereUniqueInputObjectSchema as LibroCategoriaWhereUniqueInputObjectSchema } from "./LibroCategoriaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => LibroCategoriaCreateWithoutLibroInputObjectSchema),
				z.lazy(
					() => LibroCategoriaUncheckedCreateWithoutLibroInputObjectSchema,
				),
			]),
		})
		.strict();
export const LibroCategoriaCreateOrConnectWithoutLibroInputObjectSchema: z.ZodType<Prisma.LibroCategoriaCreateOrConnectWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaCreateOrConnectWithoutLibroInput>;
export const LibroCategoriaCreateOrConnectWithoutLibroInputObjectZodSchema =
	makeSchema();
