import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateOrConnectWithoutEtiquetasInputObjectSchema as EstadoCreateOrConnectWithoutEtiquetasInputObjectSchema } from "./EstadoCreateOrConnectWithoutEtiquetasInput.schema.ts";
import { EstadoCreateWithoutEtiquetasInputObjectSchema as EstadoCreateWithoutEtiquetasInputObjectSchema } from "./EstadoCreateWithoutEtiquetasInput.schema.ts";
import { EstadoUncheckedCreateWithoutEtiquetasInputObjectSchema as EstadoUncheckedCreateWithoutEtiquetasInputObjectSchema } from "./EstadoUncheckedCreateWithoutEtiquetasInput.schema.ts";
import { EstadoUncheckedUpdateWithoutEtiquetasInputObjectSchema as EstadoUncheckedUpdateWithoutEtiquetasInputObjectSchema } from "./EstadoUncheckedUpdateWithoutEtiquetasInput.schema.ts";
import { EstadoUpdateToOneWithWhereWithoutEtiquetasInputObjectSchema as EstadoUpdateToOneWithWhereWithoutEtiquetasInputObjectSchema } from "./EstadoUpdateToOneWithWhereWithoutEtiquetasInput.schema.ts";
import { EstadoUpdateWithoutEtiquetasInputObjectSchema as EstadoUpdateWithoutEtiquetasInputObjectSchema } from "./EstadoUpdateWithoutEtiquetasInput.schema.ts";
import { EstadoUpsertWithoutEtiquetasInputObjectSchema as EstadoUpsertWithoutEtiquetasInputObjectSchema } from "./EstadoUpsertWithoutEtiquetasInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EstadoCreateWithoutEtiquetasInputObjectSchema),
					z.lazy(() => EstadoUncheckedCreateWithoutEtiquetasInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EstadoCreateOrConnectWithoutEtiquetasInputObjectSchema)
				.optional(),
			upsert: z
				.lazy(() => EstadoUpsertWithoutEtiquetasInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(
						() => EstadoUpdateToOneWithWhereWithoutEtiquetasInputObjectSchema,
					),
					z.lazy(() => EstadoUpdateWithoutEtiquetasInputObjectSchema),
					z.lazy(() => EstadoUncheckedUpdateWithoutEtiquetasInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EstadoUpdateOneRequiredWithoutEtiquetasNestedInputObjectSchema: z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutEtiquetasNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutEtiquetasNestedInput>;
export const EstadoUpdateOneRequiredWithoutEtiquetasNestedInputObjectZodSchema =
	makeSchema();
