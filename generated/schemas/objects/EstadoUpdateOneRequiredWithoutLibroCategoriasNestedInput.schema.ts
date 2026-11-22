import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateOrConnectWithoutLibroCategoriasInputObjectSchema as EstadoCreateOrConnectWithoutLibroCategoriasInputObjectSchema } from "./EstadoCreateOrConnectWithoutLibroCategoriasInput.schema.ts";
import { EstadoCreateWithoutLibroCategoriasInputObjectSchema as EstadoCreateWithoutLibroCategoriasInputObjectSchema } from "./EstadoCreateWithoutLibroCategoriasInput.schema.ts";
import { EstadoUncheckedCreateWithoutLibroCategoriasInputObjectSchema as EstadoUncheckedCreateWithoutLibroCategoriasInputObjectSchema } from "./EstadoUncheckedCreateWithoutLibroCategoriasInput.schema.ts";
import { EstadoUncheckedUpdateWithoutLibroCategoriasInputObjectSchema as EstadoUncheckedUpdateWithoutLibroCategoriasInputObjectSchema } from "./EstadoUncheckedUpdateWithoutLibroCategoriasInput.schema.ts";
import { EstadoUpdateToOneWithWhereWithoutLibroCategoriasInputObjectSchema as EstadoUpdateToOneWithWhereWithoutLibroCategoriasInputObjectSchema } from "./EstadoUpdateToOneWithWhereWithoutLibroCategoriasInput.schema.ts";
import { EstadoUpdateWithoutLibroCategoriasInputObjectSchema as EstadoUpdateWithoutLibroCategoriasInputObjectSchema } from "./EstadoUpdateWithoutLibroCategoriasInput.schema.ts";
import { EstadoUpsertWithoutLibroCategoriasInputObjectSchema as EstadoUpsertWithoutLibroCategoriasInputObjectSchema } from "./EstadoUpsertWithoutLibroCategoriasInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EstadoCreateWithoutLibroCategoriasInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutLibroCategoriasInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EstadoCreateOrConnectWithoutLibroCategoriasInputObjectSchema).optional(),
			upsert: z.lazy(() => EstadoUpsertWithoutLibroCategoriasInputObjectSchema).optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => EstadoUpdateToOneWithWhereWithoutLibroCategoriasInputObjectSchema),
					z.lazy(() => EstadoUpdateWithoutLibroCategoriasInputObjectSchema),
					z.lazy(() => EstadoUncheckedUpdateWithoutLibroCategoriasInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EstadoUpdateOneRequiredWithoutLibroCategoriasNestedInputObjectSchema: z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutLibroCategoriasNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutLibroCategoriasNestedInput>;
export const EstadoUpdateOneRequiredWithoutLibroCategoriasNestedInputObjectZodSchema = makeSchema();
