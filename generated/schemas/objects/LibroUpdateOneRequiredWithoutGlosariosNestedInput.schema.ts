import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateOrConnectWithoutGlosariosInputObjectSchema as LibroCreateOrConnectWithoutGlosariosInputObjectSchema } from "./LibroCreateOrConnectWithoutGlosariosInput.schema.ts";
import { LibroCreateWithoutGlosariosInputObjectSchema as LibroCreateWithoutGlosariosInputObjectSchema } from "./LibroCreateWithoutGlosariosInput.schema.ts";
import { LibroUncheckedCreateWithoutGlosariosInputObjectSchema as LibroUncheckedCreateWithoutGlosariosInputObjectSchema } from "./LibroUncheckedCreateWithoutGlosariosInput.schema.ts";
import { LibroUncheckedUpdateWithoutGlosariosInputObjectSchema as LibroUncheckedUpdateWithoutGlosariosInputObjectSchema } from "./LibroUncheckedUpdateWithoutGlosariosInput.schema.ts";
import { LibroUpdateToOneWithWhereWithoutGlosariosInputObjectSchema as LibroUpdateToOneWithWhereWithoutGlosariosInputObjectSchema } from "./LibroUpdateToOneWithWhereWithoutGlosariosInput.schema.ts";
import { LibroUpdateWithoutGlosariosInputObjectSchema as LibroUpdateWithoutGlosariosInputObjectSchema } from "./LibroUpdateWithoutGlosariosInput.schema.ts";
import { LibroUpsertWithoutGlosariosInputObjectSchema as LibroUpsertWithoutGlosariosInputObjectSchema } from "./LibroUpsertWithoutGlosariosInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => LibroCreateWithoutGlosariosInputObjectSchema),
					z.lazy(() => LibroUncheckedCreateWithoutGlosariosInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => LibroCreateOrConnectWithoutGlosariosInputObjectSchema)
				.optional(),
			upsert: z
				.lazy(() => LibroUpsertWithoutGlosariosInputObjectSchema)
				.optional(),
			connect: z.lazy(() => LibroWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(
						() => LibroUpdateToOneWithWhereWithoutGlosariosInputObjectSchema,
					),
					z.lazy(() => LibroUpdateWithoutGlosariosInputObjectSchema),
					z.lazy(() => LibroUncheckedUpdateWithoutGlosariosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const LibroUpdateOneRequiredWithoutGlosariosNestedInputObjectSchema: z.ZodType<Prisma.LibroUpdateOneRequiredWithoutGlosariosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateOneRequiredWithoutGlosariosNestedInput>;
export const LibroUpdateOneRequiredWithoutGlosariosNestedInputObjectZodSchema =
	makeSchema();
