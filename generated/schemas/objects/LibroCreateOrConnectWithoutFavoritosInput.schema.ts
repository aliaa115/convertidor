import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateWithoutFavoritosInputObjectSchema as LibroCreateWithoutFavoritosInputObjectSchema } from "./LibroCreateWithoutFavoritosInput.schema.ts";
import { LibroUncheckedCreateWithoutFavoritosInputObjectSchema as LibroUncheckedCreateWithoutFavoritosInputObjectSchema } from "./LibroUncheckedCreateWithoutFavoritosInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => LibroCreateWithoutFavoritosInputObjectSchema),
				z.lazy(() => LibroUncheckedCreateWithoutFavoritosInputObjectSchema),
			]),
		})
		.strict();
export const LibroCreateOrConnectWithoutFavoritosInputObjectSchema: z.ZodType<Prisma.LibroCreateOrConnectWithoutFavoritosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateOrConnectWithoutFavoritosInput>;
export const LibroCreateOrConnectWithoutFavoritosInputObjectZodSchema =
	makeSchema();
