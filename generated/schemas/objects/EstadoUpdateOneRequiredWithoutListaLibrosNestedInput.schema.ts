import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateOrConnectWithoutListaLibrosInputObjectSchema as EstadoCreateOrConnectWithoutListaLibrosInputObjectSchema } from "./EstadoCreateOrConnectWithoutListaLibrosInput.schema.ts";
import { EstadoCreateWithoutListaLibrosInputObjectSchema as EstadoCreateWithoutListaLibrosInputObjectSchema } from "./EstadoCreateWithoutListaLibrosInput.schema.ts";
import { EstadoUncheckedCreateWithoutListaLibrosInputObjectSchema as EstadoUncheckedCreateWithoutListaLibrosInputObjectSchema } from "./EstadoUncheckedCreateWithoutListaLibrosInput.schema.ts";
import { EstadoUncheckedUpdateWithoutListaLibrosInputObjectSchema as EstadoUncheckedUpdateWithoutListaLibrosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutListaLibrosInput.schema.ts";
import { EstadoUpdateToOneWithWhereWithoutListaLibrosInputObjectSchema as EstadoUpdateToOneWithWhereWithoutListaLibrosInputObjectSchema } from "./EstadoUpdateToOneWithWhereWithoutListaLibrosInput.schema.ts";
import { EstadoUpdateWithoutListaLibrosInputObjectSchema as EstadoUpdateWithoutListaLibrosInputObjectSchema } from "./EstadoUpdateWithoutListaLibrosInput.schema.ts";
import { EstadoUpsertWithoutListaLibrosInputObjectSchema as EstadoUpsertWithoutListaLibrosInputObjectSchema } from "./EstadoUpsertWithoutListaLibrosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EstadoCreateWithoutListaLibrosInputObjectSchema),
					z.lazy(
						() => EstadoUncheckedCreateWithoutListaLibrosInputObjectSchema,
					),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EstadoCreateOrConnectWithoutListaLibrosInputObjectSchema)
				.optional(),
			upsert: z
				.lazy(() => EstadoUpsertWithoutListaLibrosInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(
						() => EstadoUpdateToOneWithWhereWithoutListaLibrosInputObjectSchema,
					),
					z.lazy(() => EstadoUpdateWithoutListaLibrosInputObjectSchema),
					z.lazy(
						() => EstadoUncheckedUpdateWithoutListaLibrosInputObjectSchema,
					),
				])
				.optional(),
		})
		.strict();
export const EstadoUpdateOneRequiredWithoutListaLibrosNestedInputObjectSchema: z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutListaLibrosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutListaLibrosNestedInput>;
export const EstadoUpdateOneRequiredWithoutListaLibrosNestedInputObjectZodSchema =
	makeSchema();
