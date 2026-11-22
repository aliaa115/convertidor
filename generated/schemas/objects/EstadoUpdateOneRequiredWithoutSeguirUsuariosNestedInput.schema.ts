import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateOrConnectWithoutSeguirUsuariosInputObjectSchema as EstadoCreateOrConnectWithoutSeguirUsuariosInputObjectSchema } from "./EstadoCreateOrConnectWithoutSeguirUsuariosInput.schema.ts";
import { EstadoCreateWithoutSeguirUsuariosInputObjectSchema as EstadoCreateWithoutSeguirUsuariosInputObjectSchema } from "./EstadoCreateWithoutSeguirUsuariosInput.schema.ts";
import { EstadoUncheckedCreateWithoutSeguirUsuariosInputObjectSchema as EstadoUncheckedCreateWithoutSeguirUsuariosInputObjectSchema } from "./EstadoUncheckedCreateWithoutSeguirUsuariosInput.schema.ts";
import { EstadoUncheckedUpdateWithoutSeguirUsuariosInputObjectSchema as EstadoUncheckedUpdateWithoutSeguirUsuariosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutSeguirUsuariosInput.schema.ts";
import { EstadoUpdateToOneWithWhereWithoutSeguirUsuariosInputObjectSchema as EstadoUpdateToOneWithWhereWithoutSeguirUsuariosInputObjectSchema } from "./EstadoUpdateToOneWithWhereWithoutSeguirUsuariosInput.schema.ts";
import { EstadoUpdateWithoutSeguirUsuariosInputObjectSchema as EstadoUpdateWithoutSeguirUsuariosInputObjectSchema } from "./EstadoUpdateWithoutSeguirUsuariosInput.schema.ts";
import { EstadoUpsertWithoutSeguirUsuariosInputObjectSchema as EstadoUpsertWithoutSeguirUsuariosInputObjectSchema } from "./EstadoUpsertWithoutSeguirUsuariosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EstadoCreateWithoutSeguirUsuariosInputObjectSchema),
					z.lazy(
						() => EstadoUncheckedCreateWithoutSeguirUsuariosInputObjectSchema,
					),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EstadoCreateOrConnectWithoutSeguirUsuariosInputObjectSchema)
				.optional(),
			upsert: z
				.lazy(() => EstadoUpsertWithoutSeguirUsuariosInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(
						() =>
							EstadoUpdateToOneWithWhereWithoutSeguirUsuariosInputObjectSchema,
					),
					z.lazy(() => EstadoUpdateWithoutSeguirUsuariosInputObjectSchema),
					z.lazy(
						() => EstadoUncheckedUpdateWithoutSeguirUsuariosInputObjectSchema,
					),
				])
				.optional(),
		})
		.strict();
export const EstadoUpdateOneRequiredWithoutSeguirUsuariosNestedInputObjectSchema: z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutSeguirUsuariosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutSeguirUsuariosNestedInput>;
export const EstadoUpdateOneRequiredWithoutSeguirUsuariosNestedInputObjectZodSchema =
	makeSchema();
