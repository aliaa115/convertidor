import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateOrConnectWithoutFavoritosInputObjectSchema as LibroCreateOrConnectWithoutFavoritosInputObjectSchema } from "./LibroCreateOrConnectWithoutFavoritosInput.schema.ts";
import { LibroCreateWithoutFavoritosInputObjectSchema as LibroCreateWithoutFavoritosInputObjectSchema } from "./LibroCreateWithoutFavoritosInput.schema.ts";
import { LibroUncheckedCreateWithoutFavoritosInputObjectSchema as LibroUncheckedCreateWithoutFavoritosInputObjectSchema } from "./LibroUncheckedCreateWithoutFavoritosInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => LibroCreateWithoutFavoritosInputObjectSchema), z.lazy(() => LibroUncheckedCreateWithoutFavoritosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => LibroCreateOrConnectWithoutFavoritosInputObjectSchema).optional(),
			connect: z.lazy(() => LibroWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const LibroCreateNestedOneWithoutFavoritosInputObjectSchema: z.ZodType<Prisma.LibroCreateNestedOneWithoutFavoritosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateNestedOneWithoutFavoritosInput>;
export const LibroCreateNestedOneWithoutFavoritosInputObjectZodSchema = makeSchema();
