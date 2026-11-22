import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateOrConnectWithoutUsuariosInputObjectSchema as EstadoCreateOrConnectWithoutUsuariosInputObjectSchema } from "./EstadoCreateOrConnectWithoutUsuariosInput.schema.ts";
import { EstadoCreateWithoutUsuariosInputObjectSchema as EstadoCreateWithoutUsuariosInputObjectSchema } from "./EstadoCreateWithoutUsuariosInput.schema.ts";
import { EstadoUncheckedCreateWithoutUsuariosInputObjectSchema as EstadoUncheckedCreateWithoutUsuariosInputObjectSchema } from "./EstadoUncheckedCreateWithoutUsuariosInput.schema.ts";
import { EstadoUncheckedUpdateWithoutUsuariosInputObjectSchema as EstadoUncheckedUpdateWithoutUsuariosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutUsuariosInput.schema.ts";
import { EstadoUpdateToOneWithWhereWithoutUsuariosInputObjectSchema as EstadoUpdateToOneWithWhereWithoutUsuariosInputObjectSchema } from "./EstadoUpdateToOneWithWhereWithoutUsuariosInput.schema.ts";
import { EstadoUpdateWithoutUsuariosInputObjectSchema as EstadoUpdateWithoutUsuariosInputObjectSchema } from "./EstadoUpdateWithoutUsuariosInput.schema.ts";
import { EstadoUpsertWithoutUsuariosInputObjectSchema as EstadoUpsertWithoutUsuariosInputObjectSchema } from "./EstadoUpsertWithoutUsuariosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EstadoCreateWithoutUsuariosInputObjectSchema),
					z.lazy(() => EstadoUncheckedCreateWithoutUsuariosInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EstadoCreateOrConnectWithoutUsuariosInputObjectSchema)
				.optional(),
			upsert: z
				.lazy(() => EstadoUpsertWithoutUsuariosInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(
						() => EstadoUpdateToOneWithWhereWithoutUsuariosInputObjectSchema,
					),
					z.lazy(() => EstadoUpdateWithoutUsuariosInputObjectSchema),
					z.lazy(() => EstadoUncheckedUpdateWithoutUsuariosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EstadoUpdateOneRequiredWithoutUsuariosNestedInputObjectSchema: z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutUsuariosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutUsuariosNestedInput>;
export const EstadoUpdateOneRequiredWithoutUsuariosNestedInputObjectZodSchema =
	makeSchema();
