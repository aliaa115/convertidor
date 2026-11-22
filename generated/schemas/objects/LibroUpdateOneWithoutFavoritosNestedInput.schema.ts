import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateOrConnectWithoutFavoritosInputObjectSchema as LibroCreateOrConnectWithoutFavoritosInputObjectSchema } from "./LibroCreateOrConnectWithoutFavoritosInput.schema.ts";
import { LibroCreateWithoutFavoritosInputObjectSchema as LibroCreateWithoutFavoritosInputObjectSchema } from "./LibroCreateWithoutFavoritosInput.schema.ts";
import { LibroUncheckedCreateWithoutFavoritosInputObjectSchema as LibroUncheckedCreateWithoutFavoritosInputObjectSchema } from "./LibroUncheckedCreateWithoutFavoritosInput.schema.ts";
import { LibroUncheckedUpdateWithoutFavoritosInputObjectSchema as LibroUncheckedUpdateWithoutFavoritosInputObjectSchema } from "./LibroUncheckedUpdateWithoutFavoritosInput.schema.ts";
import { LibroUpdateToOneWithWhereWithoutFavoritosInputObjectSchema as LibroUpdateToOneWithWhereWithoutFavoritosInputObjectSchema } from "./LibroUpdateToOneWithWhereWithoutFavoritosInput.schema.ts";
import { LibroUpdateWithoutFavoritosInputObjectSchema as LibroUpdateWithoutFavoritosInputObjectSchema } from "./LibroUpdateWithoutFavoritosInput.schema.ts";
import { LibroUpsertWithoutFavoritosInputObjectSchema as LibroUpsertWithoutFavoritosInputObjectSchema } from "./LibroUpsertWithoutFavoritosInput.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => LibroCreateWithoutFavoritosInputObjectSchema), z.lazy(() => LibroUncheckedCreateWithoutFavoritosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => LibroCreateOrConnectWithoutFavoritosInputObjectSchema).optional(),
			upsert: z.lazy(() => LibroUpsertWithoutFavoritosInputObjectSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => LibroWhereInputObjectSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => LibroWhereInputObjectSchema)]).optional(),
			connect: z.lazy(() => LibroWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => LibroUpdateToOneWithWhereWithoutFavoritosInputObjectSchema),
					z.lazy(() => LibroUpdateWithoutFavoritosInputObjectSchema),
					z.lazy(() => LibroUncheckedUpdateWithoutFavoritosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const LibroUpdateOneWithoutFavoritosNestedInputObjectSchema: z.ZodType<Prisma.LibroUpdateOneWithoutFavoritosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateOneWithoutFavoritosNestedInput>;
export const LibroUpdateOneWithoutFavoritosNestedInputObjectZodSchema = makeSchema();
