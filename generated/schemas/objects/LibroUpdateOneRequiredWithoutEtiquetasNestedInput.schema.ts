import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateOrConnectWithoutEtiquetasInputObjectSchema as LibroCreateOrConnectWithoutEtiquetasInputObjectSchema } from "./LibroCreateOrConnectWithoutEtiquetasInput.schema.ts";
import { LibroCreateWithoutEtiquetasInputObjectSchema as LibroCreateWithoutEtiquetasInputObjectSchema } from "./LibroCreateWithoutEtiquetasInput.schema.ts";
import { LibroUncheckedCreateWithoutEtiquetasInputObjectSchema as LibroUncheckedCreateWithoutEtiquetasInputObjectSchema } from "./LibroUncheckedCreateWithoutEtiquetasInput.schema.ts";
import { LibroUncheckedUpdateWithoutEtiquetasInputObjectSchema as LibroUncheckedUpdateWithoutEtiquetasInputObjectSchema } from "./LibroUncheckedUpdateWithoutEtiquetasInput.schema.ts";
import { LibroUpdateToOneWithWhereWithoutEtiquetasInputObjectSchema as LibroUpdateToOneWithWhereWithoutEtiquetasInputObjectSchema } from "./LibroUpdateToOneWithWhereWithoutEtiquetasInput.schema.ts";
import { LibroUpdateWithoutEtiquetasInputObjectSchema as LibroUpdateWithoutEtiquetasInputObjectSchema } from "./LibroUpdateWithoutEtiquetasInput.schema.ts";
import { LibroUpsertWithoutEtiquetasInputObjectSchema as LibroUpsertWithoutEtiquetasInputObjectSchema } from "./LibroUpsertWithoutEtiquetasInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => LibroCreateWithoutEtiquetasInputObjectSchema),
					z.lazy(() => LibroUncheckedCreateWithoutEtiquetasInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => LibroCreateOrConnectWithoutEtiquetasInputObjectSchema)
				.optional(),
			upsert: z
				.lazy(() => LibroUpsertWithoutEtiquetasInputObjectSchema)
				.optional(),
			connect: z.lazy(() => LibroWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(
						() => LibroUpdateToOneWithWhereWithoutEtiquetasInputObjectSchema,
					),
					z.lazy(() => LibroUpdateWithoutEtiquetasInputObjectSchema),
					z.lazy(() => LibroUncheckedUpdateWithoutEtiquetasInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const LibroUpdateOneRequiredWithoutEtiquetasNestedInputObjectSchema: z.ZodType<Prisma.LibroUpdateOneRequiredWithoutEtiquetasNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateOneRequiredWithoutEtiquetasNestedInput>;
export const LibroUpdateOneRequiredWithoutEtiquetasNestedInputObjectZodSchema =
	makeSchema();
