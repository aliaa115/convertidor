import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EtiquetaCreateOrConnectWithoutLibrosInputObjectSchema as EtiquetaCreateOrConnectWithoutLibrosInputObjectSchema } from "./EtiquetaCreateOrConnectWithoutLibrosInput.schema.ts";
import { EtiquetaCreateWithoutLibrosInputObjectSchema as EtiquetaCreateWithoutLibrosInputObjectSchema } from "./EtiquetaCreateWithoutLibrosInput.schema.ts";
import { EtiquetaUncheckedCreateWithoutLibrosInputObjectSchema as EtiquetaUncheckedCreateWithoutLibrosInputObjectSchema } from "./EtiquetaUncheckedCreateWithoutLibrosInput.schema.ts";
import { EtiquetaUncheckedUpdateWithoutLibrosInputObjectSchema as EtiquetaUncheckedUpdateWithoutLibrosInputObjectSchema } from "./EtiquetaUncheckedUpdateWithoutLibrosInput.schema.ts";
import { EtiquetaUpdateToOneWithWhereWithoutLibrosInputObjectSchema as EtiquetaUpdateToOneWithWhereWithoutLibrosInputObjectSchema } from "./EtiquetaUpdateToOneWithWhereWithoutLibrosInput.schema.ts";
import { EtiquetaUpdateWithoutLibrosInputObjectSchema as EtiquetaUpdateWithoutLibrosInputObjectSchema } from "./EtiquetaUpdateWithoutLibrosInput.schema.ts";
import { EtiquetaUpsertWithoutLibrosInputObjectSchema as EtiquetaUpsertWithoutLibrosInputObjectSchema } from "./EtiquetaUpsertWithoutLibrosInput.schema.ts";
import { EtiquetaWhereUniqueInputObjectSchema as EtiquetaWhereUniqueInputObjectSchema } from "./EtiquetaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EtiquetaCreateWithoutLibrosInputObjectSchema),
					z.lazy(() => EtiquetaUncheckedCreateWithoutLibrosInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EtiquetaCreateOrConnectWithoutLibrosInputObjectSchema)
				.optional(),
			upsert: z
				.lazy(() => EtiquetaUpsertWithoutLibrosInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EtiquetaWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(
						() => EtiquetaUpdateToOneWithWhereWithoutLibrosInputObjectSchema,
					),
					z.lazy(() => EtiquetaUpdateWithoutLibrosInputObjectSchema),
					z.lazy(() => EtiquetaUncheckedUpdateWithoutLibrosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EtiquetaUpdateOneRequiredWithoutLibrosNestedInputObjectSchema: z.ZodType<Prisma.EtiquetaUpdateOneRequiredWithoutLibrosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EtiquetaUpdateOneRequiredWithoutLibrosNestedInput>;
export const EtiquetaUpdateOneRequiredWithoutLibrosNestedInputObjectZodSchema =
	makeSchema();
