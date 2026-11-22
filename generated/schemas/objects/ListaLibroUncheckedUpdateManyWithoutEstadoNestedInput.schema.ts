import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaLibroCreateManyEstadoInputEnvelopeObjectSchema as ListaLibroCreateManyEstadoInputEnvelopeObjectSchema } from "./ListaLibroCreateManyEstadoInputEnvelope.schema.ts";
import { ListaLibroCreateOrConnectWithoutEstadoInputObjectSchema as ListaLibroCreateOrConnectWithoutEstadoInputObjectSchema } from "./ListaLibroCreateOrConnectWithoutEstadoInput.schema.ts";
import { ListaLibroCreateWithoutEstadoInputObjectSchema as ListaLibroCreateWithoutEstadoInputObjectSchema } from "./ListaLibroCreateWithoutEstadoInput.schema.ts";
import { ListaLibroScalarWhereInputObjectSchema as ListaLibroScalarWhereInputObjectSchema } from "./ListaLibroScalarWhereInput.schema.ts";
import { ListaLibroUncheckedCreateWithoutEstadoInputObjectSchema as ListaLibroUncheckedCreateWithoutEstadoInputObjectSchema } from "./ListaLibroUncheckedCreateWithoutEstadoInput.schema.ts";
import { ListaLibroUpdateManyWithWhereWithoutEstadoInputObjectSchema as ListaLibroUpdateManyWithWhereWithoutEstadoInputObjectSchema } from "./ListaLibroUpdateManyWithWhereWithoutEstadoInput.schema.ts";
import { ListaLibroUpdateWithWhereUniqueWithoutEstadoInputObjectSchema as ListaLibroUpdateWithWhereUniqueWithoutEstadoInputObjectSchema } from "./ListaLibroUpdateWithWhereUniqueWithoutEstadoInput.schema.ts";
import { ListaLibroUpsertWithWhereUniqueWithoutEstadoInputObjectSchema as ListaLibroUpsertWithWhereUniqueWithoutEstadoInputObjectSchema } from "./ListaLibroUpsertWithWhereUniqueWithoutEstadoInput.schema.ts";
import { ListaLibroWhereUniqueInputObjectSchema as ListaLibroWhereUniqueInputObjectSchema } from "./ListaLibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ListaLibroCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => ListaLibroCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => ListaLibroUncheckedCreateWithoutEstadoInputObjectSchema),
					z
						.lazy(() => ListaLibroUncheckedCreateWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => ListaLibroCreateOrConnectWithoutEstadoInputObjectSchema),
					z
						.lazy(() => ListaLibroCreateOrConnectWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() => ListaLibroUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() =>
								ListaLibroUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => ListaLibroCreateManyEstadoInputEnvelopeObjectSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => ListaLibroWhereUniqueInputObjectSchema),
					z.lazy(() => ListaLibroWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => ListaLibroWhereUniqueInputObjectSchema),
					z.lazy(() => ListaLibroWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => ListaLibroWhereUniqueInputObjectSchema),
					z.lazy(() => ListaLibroWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => ListaLibroWhereUniqueInputObjectSchema),
					z.lazy(() => ListaLibroWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(
						() => ListaLibroUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() =>
								ListaLibroUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(
						() => ListaLibroUpdateManyWithWhereWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => ListaLibroUpdateManyWithWhereWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => ListaLibroScalarWhereInputObjectSchema),
					z.lazy(() => ListaLibroScalarWhereInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const ListaLibroUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema: z.ZodType<Prisma.ListaLibroUncheckedUpdateManyWithoutEstadoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroUncheckedUpdateManyWithoutEstadoNestedInput>;
export const ListaLibroUncheckedUpdateManyWithoutEstadoNestedInputObjectZodSchema =
	makeSchema();
