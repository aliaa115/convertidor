import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateOrConnectWithoutCategoriasInputObjectSchema as LibroCreateOrConnectWithoutCategoriasInputObjectSchema } from "./LibroCreateOrConnectWithoutCategoriasInput.schema.ts";
import { LibroCreateWithoutCategoriasInputObjectSchema as LibroCreateWithoutCategoriasInputObjectSchema } from "./LibroCreateWithoutCategoriasInput.schema.ts";
import { LibroUncheckedCreateWithoutCategoriasInputObjectSchema as LibroUncheckedCreateWithoutCategoriasInputObjectSchema } from "./LibroUncheckedCreateWithoutCategoriasInput.schema.ts";
import { LibroUncheckedUpdateWithoutCategoriasInputObjectSchema as LibroUncheckedUpdateWithoutCategoriasInputObjectSchema } from "./LibroUncheckedUpdateWithoutCategoriasInput.schema.ts";
import { LibroUpdateToOneWithWhereWithoutCategoriasInputObjectSchema as LibroUpdateToOneWithWhereWithoutCategoriasInputObjectSchema } from "./LibroUpdateToOneWithWhereWithoutCategoriasInput.schema.ts";
import { LibroUpdateWithoutCategoriasInputObjectSchema as LibroUpdateWithoutCategoriasInputObjectSchema } from "./LibroUpdateWithoutCategoriasInput.schema.ts";
import { LibroUpsertWithoutCategoriasInputObjectSchema as LibroUpsertWithoutCategoriasInputObjectSchema } from "./LibroUpsertWithoutCategoriasInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => LibroCreateWithoutCategoriasInputObjectSchema),
					z.lazy(() => LibroUncheckedCreateWithoutCategoriasInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => LibroCreateOrConnectWithoutCategoriasInputObjectSchema)
				.optional(),
			upsert: z
				.lazy(() => LibroUpsertWithoutCategoriasInputObjectSchema)
				.optional(),
			connect: z.lazy(() => LibroWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(
						() => LibroUpdateToOneWithWhereWithoutCategoriasInputObjectSchema,
					),
					z.lazy(() => LibroUpdateWithoutCategoriasInputObjectSchema),
					z.lazy(() => LibroUncheckedUpdateWithoutCategoriasInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const LibroUpdateOneRequiredWithoutCategoriasNestedInputObjectSchema: z.ZodType<Prisma.LibroUpdateOneRequiredWithoutCategoriasNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateOneRequiredWithoutCategoriasNestedInput>;
export const LibroUpdateOneRequiredWithoutCategoriasNestedInputObjectZodSchema =
	makeSchema();
