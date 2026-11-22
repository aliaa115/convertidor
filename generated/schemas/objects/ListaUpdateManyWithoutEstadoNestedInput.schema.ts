import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaCreateManyEstadoInputEnvelopeObjectSchema as ListaCreateManyEstadoInputEnvelopeObjectSchema } from "./ListaCreateManyEstadoInputEnvelope.schema.ts";
import { ListaCreateOrConnectWithoutEstadoInputObjectSchema as ListaCreateOrConnectWithoutEstadoInputObjectSchema } from "./ListaCreateOrConnectWithoutEstadoInput.schema.ts";
import { ListaCreateWithoutEstadoInputObjectSchema as ListaCreateWithoutEstadoInputObjectSchema } from "./ListaCreateWithoutEstadoInput.schema.ts";
import { ListaScalarWhereInputObjectSchema as ListaScalarWhereInputObjectSchema } from "./ListaScalarWhereInput.schema.ts";
import { ListaUncheckedCreateWithoutEstadoInputObjectSchema as ListaUncheckedCreateWithoutEstadoInputObjectSchema } from "./ListaUncheckedCreateWithoutEstadoInput.schema.ts";
import { ListaUpdateManyWithWhereWithoutEstadoInputObjectSchema as ListaUpdateManyWithWhereWithoutEstadoInputObjectSchema } from "./ListaUpdateManyWithWhereWithoutEstadoInput.schema.ts";
import { ListaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema as ListaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema } from "./ListaUpdateWithWhereUniqueWithoutEstadoInput.schema.ts";
import { ListaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema as ListaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema } from "./ListaUpsertWithWhereUniqueWithoutEstadoInput.schema.ts";
import { ListaWhereUniqueInputObjectSchema as ListaWhereUniqueInputObjectSchema } from "./ListaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ListaCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => ListaCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => ListaUncheckedCreateWithoutEstadoInputObjectSchema),
					z
						.lazy(() => ListaUncheckedCreateWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => ListaCreateOrConnectWithoutEstadoInputObjectSchema),
					z
						.lazy(() => ListaCreateOrConnectWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() => ListaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => ListaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => ListaCreateManyEstadoInputEnvelopeObjectSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => ListaWhereUniqueInputObjectSchema),
					z.lazy(() => ListaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => ListaWhereUniqueInputObjectSchema),
					z.lazy(() => ListaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => ListaWhereUniqueInputObjectSchema),
					z.lazy(() => ListaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => ListaWhereUniqueInputObjectSchema),
					z.lazy(() => ListaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(
						() => ListaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => ListaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => ListaUpdateManyWithWhereWithoutEstadoInputObjectSchema),
					z
						.lazy(() => ListaUpdateManyWithWhereWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => ListaScalarWhereInputObjectSchema),
					z.lazy(() => ListaScalarWhereInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const ListaUpdateManyWithoutEstadoNestedInputObjectSchema: z.ZodType<Prisma.ListaUpdateManyWithoutEstadoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaUpdateManyWithoutEstadoNestedInput>;
export const ListaUpdateManyWithoutEstadoNestedInputObjectZodSchema =
	makeSchema();
