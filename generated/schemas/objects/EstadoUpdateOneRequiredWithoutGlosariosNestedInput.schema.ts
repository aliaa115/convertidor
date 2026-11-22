import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateOrConnectWithoutGlosariosInputObjectSchema as EstadoCreateOrConnectWithoutGlosariosInputObjectSchema } from "./EstadoCreateOrConnectWithoutGlosariosInput.schema.ts";
import { EstadoCreateWithoutGlosariosInputObjectSchema as EstadoCreateWithoutGlosariosInputObjectSchema } from "./EstadoCreateWithoutGlosariosInput.schema.ts";
import { EstadoUncheckedCreateWithoutGlosariosInputObjectSchema as EstadoUncheckedCreateWithoutGlosariosInputObjectSchema } from "./EstadoUncheckedCreateWithoutGlosariosInput.schema.ts";
import { EstadoUncheckedUpdateWithoutGlosariosInputObjectSchema as EstadoUncheckedUpdateWithoutGlosariosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutGlosariosInput.schema.ts";
import { EstadoUpdateToOneWithWhereWithoutGlosariosInputObjectSchema as EstadoUpdateToOneWithWhereWithoutGlosariosInputObjectSchema } from "./EstadoUpdateToOneWithWhereWithoutGlosariosInput.schema.ts";
import { EstadoUpdateWithoutGlosariosInputObjectSchema as EstadoUpdateWithoutGlosariosInputObjectSchema } from "./EstadoUpdateWithoutGlosariosInput.schema.ts";
import { EstadoUpsertWithoutGlosariosInputObjectSchema as EstadoUpsertWithoutGlosariosInputObjectSchema } from "./EstadoUpsertWithoutGlosariosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EstadoCreateWithoutGlosariosInputObjectSchema),
					z.lazy(() => EstadoUncheckedCreateWithoutGlosariosInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EstadoCreateOrConnectWithoutGlosariosInputObjectSchema)
				.optional(),
			upsert: z
				.lazy(() => EstadoUpsertWithoutGlosariosInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(
						() => EstadoUpdateToOneWithWhereWithoutGlosariosInputObjectSchema,
					),
					z.lazy(() => EstadoUpdateWithoutGlosariosInputObjectSchema),
					z.lazy(() => EstadoUncheckedUpdateWithoutGlosariosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EstadoUpdateOneRequiredWithoutGlosariosNestedInputObjectSchema: z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutGlosariosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutGlosariosNestedInput>;
export const EstadoUpdateOneRequiredWithoutGlosariosNestedInputObjectZodSchema =
	makeSchema();
