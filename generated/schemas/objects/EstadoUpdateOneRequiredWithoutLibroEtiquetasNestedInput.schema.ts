import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateOrConnectWithoutLibroEtiquetasInputObjectSchema as EstadoCreateOrConnectWithoutLibroEtiquetasInputObjectSchema } from "./EstadoCreateOrConnectWithoutLibroEtiquetasInput.schema.ts";
import { EstadoCreateWithoutLibroEtiquetasInputObjectSchema as EstadoCreateWithoutLibroEtiquetasInputObjectSchema } from "./EstadoCreateWithoutLibroEtiquetasInput.schema.ts";
import { EstadoUncheckedCreateWithoutLibroEtiquetasInputObjectSchema as EstadoUncheckedCreateWithoutLibroEtiquetasInputObjectSchema } from "./EstadoUncheckedCreateWithoutLibroEtiquetasInput.schema.ts";
import { EstadoUncheckedUpdateWithoutLibroEtiquetasInputObjectSchema as EstadoUncheckedUpdateWithoutLibroEtiquetasInputObjectSchema } from "./EstadoUncheckedUpdateWithoutLibroEtiquetasInput.schema.ts";
import { EstadoUpdateToOneWithWhereWithoutLibroEtiquetasInputObjectSchema as EstadoUpdateToOneWithWhereWithoutLibroEtiquetasInputObjectSchema } from "./EstadoUpdateToOneWithWhereWithoutLibroEtiquetasInput.schema.ts";
import { EstadoUpdateWithoutLibroEtiquetasInputObjectSchema as EstadoUpdateWithoutLibroEtiquetasInputObjectSchema } from "./EstadoUpdateWithoutLibroEtiquetasInput.schema.ts";
import { EstadoUpsertWithoutLibroEtiquetasInputObjectSchema as EstadoUpsertWithoutLibroEtiquetasInputObjectSchema } from "./EstadoUpsertWithoutLibroEtiquetasInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EstadoCreateWithoutLibroEtiquetasInputObjectSchema),
					z.lazy(
						() => EstadoUncheckedCreateWithoutLibroEtiquetasInputObjectSchema,
					),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EstadoCreateOrConnectWithoutLibroEtiquetasInputObjectSchema)
				.optional(),
			upsert: z
				.lazy(() => EstadoUpsertWithoutLibroEtiquetasInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(
						() =>
							EstadoUpdateToOneWithWhereWithoutLibroEtiquetasInputObjectSchema,
					),
					z.lazy(() => EstadoUpdateWithoutLibroEtiquetasInputObjectSchema),
					z.lazy(
						() => EstadoUncheckedUpdateWithoutLibroEtiquetasInputObjectSchema,
					),
				])
				.optional(),
		})
		.strict();
export const EstadoUpdateOneRequiredWithoutLibroEtiquetasNestedInputObjectSchema: z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutLibroEtiquetasNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutLibroEtiquetasNestedInput>;
export const EstadoUpdateOneRequiredWithoutLibroEtiquetasNestedInputObjectZodSchema =
	makeSchema();
