import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateOrConnectWithoutEscritoresInputObjectSchema as EstadoCreateOrConnectWithoutEscritoresInputObjectSchema } from "./EstadoCreateOrConnectWithoutEscritoresInput.schema.ts";
import { EstadoCreateWithoutEscritoresInputObjectSchema as EstadoCreateWithoutEscritoresInputObjectSchema } from "./EstadoCreateWithoutEscritoresInput.schema.ts";
import { EstadoUncheckedCreateWithoutEscritoresInputObjectSchema as EstadoUncheckedCreateWithoutEscritoresInputObjectSchema } from "./EstadoUncheckedCreateWithoutEscritoresInput.schema.ts";
import { EstadoUncheckedUpdateWithoutEscritoresInputObjectSchema as EstadoUncheckedUpdateWithoutEscritoresInputObjectSchema } from "./EstadoUncheckedUpdateWithoutEscritoresInput.schema.ts";
import { EstadoUpdateToOneWithWhereWithoutEscritoresInputObjectSchema as EstadoUpdateToOneWithWhereWithoutEscritoresInputObjectSchema } from "./EstadoUpdateToOneWithWhereWithoutEscritoresInput.schema.ts";
import { EstadoUpdateWithoutEscritoresInputObjectSchema as EstadoUpdateWithoutEscritoresInputObjectSchema } from "./EstadoUpdateWithoutEscritoresInput.schema.ts";
import { EstadoUpsertWithoutEscritoresInputObjectSchema as EstadoUpsertWithoutEscritoresInputObjectSchema } from "./EstadoUpsertWithoutEscritoresInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EstadoCreateWithoutEscritoresInputObjectSchema),
					z.lazy(() => EstadoUncheckedCreateWithoutEscritoresInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EstadoCreateOrConnectWithoutEscritoresInputObjectSchema)
				.optional(),
			upsert: z
				.lazy(() => EstadoUpsertWithoutEscritoresInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(
						() => EstadoUpdateToOneWithWhereWithoutEscritoresInputObjectSchema,
					),
					z.lazy(() => EstadoUpdateWithoutEscritoresInputObjectSchema),
					z.lazy(() => EstadoUncheckedUpdateWithoutEscritoresInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EstadoUpdateOneRequiredWithoutEscritoresNestedInputObjectSchema: z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutEscritoresNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutEscritoresNestedInput>;
export const EstadoUpdateOneRequiredWithoutEscritoresNestedInputObjectZodSchema =
	makeSchema();
