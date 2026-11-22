import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateOrConnectWithoutCategoriasInputObjectSchema as EstadoCreateOrConnectWithoutCategoriasInputObjectSchema } from "./EstadoCreateOrConnectWithoutCategoriasInput.schema.ts";
import { EstadoCreateWithoutCategoriasInputObjectSchema as EstadoCreateWithoutCategoriasInputObjectSchema } from "./EstadoCreateWithoutCategoriasInput.schema.ts";
import { EstadoUncheckedCreateWithoutCategoriasInputObjectSchema as EstadoUncheckedCreateWithoutCategoriasInputObjectSchema } from "./EstadoUncheckedCreateWithoutCategoriasInput.schema.ts";
import { EstadoUncheckedUpdateWithoutCategoriasInputObjectSchema as EstadoUncheckedUpdateWithoutCategoriasInputObjectSchema } from "./EstadoUncheckedUpdateWithoutCategoriasInput.schema.ts";
import { EstadoUpdateToOneWithWhereWithoutCategoriasInputObjectSchema as EstadoUpdateToOneWithWhereWithoutCategoriasInputObjectSchema } from "./EstadoUpdateToOneWithWhereWithoutCategoriasInput.schema.ts";
import { EstadoUpdateWithoutCategoriasInputObjectSchema as EstadoUpdateWithoutCategoriasInputObjectSchema } from "./EstadoUpdateWithoutCategoriasInput.schema.ts";
import { EstadoUpsertWithoutCategoriasInputObjectSchema as EstadoUpsertWithoutCategoriasInputObjectSchema } from "./EstadoUpsertWithoutCategoriasInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EstadoCreateWithoutCategoriasInputObjectSchema),
					z.lazy(() => EstadoUncheckedCreateWithoutCategoriasInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EstadoCreateOrConnectWithoutCategoriasInputObjectSchema)
				.optional(),
			upsert: z
				.lazy(() => EstadoUpsertWithoutCategoriasInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(
						() => EstadoUpdateToOneWithWhereWithoutCategoriasInputObjectSchema,
					),
					z.lazy(() => EstadoUpdateWithoutCategoriasInputObjectSchema),
					z.lazy(() => EstadoUncheckedUpdateWithoutCategoriasInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EstadoUpdateOneRequiredWithoutCategoriasNestedInputObjectSchema: z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutCategoriasNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutCategoriasNestedInput>;
export const EstadoUpdateOneRequiredWithoutCategoriasNestedInputObjectZodSchema =
	makeSchema();
