import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaLibroCreateManyLibroInputEnvelopeObjectSchema as ListaLibroCreateManyLibroInputEnvelopeObjectSchema } from "./ListaLibroCreateManyLibroInputEnvelope.schema.ts";
import { ListaLibroCreateOrConnectWithoutLibroInputObjectSchema as ListaLibroCreateOrConnectWithoutLibroInputObjectSchema } from "./ListaLibroCreateOrConnectWithoutLibroInput.schema.ts";
import { ListaLibroCreateWithoutLibroInputObjectSchema as ListaLibroCreateWithoutLibroInputObjectSchema } from "./ListaLibroCreateWithoutLibroInput.schema.ts";
import { ListaLibroScalarWhereInputObjectSchema as ListaLibroScalarWhereInputObjectSchema } from "./ListaLibroScalarWhereInput.schema.ts";
import { ListaLibroUncheckedCreateWithoutLibroInputObjectSchema as ListaLibroUncheckedCreateWithoutLibroInputObjectSchema } from "./ListaLibroUncheckedCreateWithoutLibroInput.schema.ts";
import { ListaLibroUpdateManyWithWhereWithoutLibroInputObjectSchema as ListaLibroUpdateManyWithWhereWithoutLibroInputObjectSchema } from "./ListaLibroUpdateManyWithWhereWithoutLibroInput.schema.ts";
import { ListaLibroUpdateWithWhereUniqueWithoutLibroInputObjectSchema as ListaLibroUpdateWithWhereUniqueWithoutLibroInputObjectSchema } from "./ListaLibroUpdateWithWhereUniqueWithoutLibroInput.schema.ts";
import { ListaLibroUpsertWithWhereUniqueWithoutLibroInputObjectSchema as ListaLibroUpsertWithWhereUniqueWithoutLibroInputObjectSchema } from "./ListaLibroUpsertWithWhereUniqueWithoutLibroInput.schema.ts";
import { ListaLibroWhereUniqueInputObjectSchema as ListaLibroWhereUniqueInputObjectSchema } from "./ListaLibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ListaLibroCreateWithoutLibroInputObjectSchema),
					z.lazy(() => ListaLibroCreateWithoutLibroInputObjectSchema).array(),
					z.lazy(() => ListaLibroUncheckedCreateWithoutLibroInputObjectSchema),
					z
						.lazy(() => ListaLibroUncheckedCreateWithoutLibroInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => ListaLibroCreateOrConnectWithoutLibroInputObjectSchema),
					z
						.lazy(() => ListaLibroCreateOrConnectWithoutLibroInputObjectSchema)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() => ListaLibroUpsertWithWhereUniqueWithoutLibroInputObjectSchema,
					),
					z
						.lazy(
							() =>
								ListaLibroUpsertWithWhereUniqueWithoutLibroInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => ListaLibroCreateManyLibroInputEnvelopeObjectSchema)
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
						() => ListaLibroUpdateWithWhereUniqueWithoutLibroInputObjectSchema,
					),
					z
						.lazy(
							() =>
								ListaLibroUpdateWithWhereUniqueWithoutLibroInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(
						() => ListaLibroUpdateManyWithWhereWithoutLibroInputObjectSchema,
					),
					z
						.lazy(
							() => ListaLibroUpdateManyWithWhereWithoutLibroInputObjectSchema,
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
export const ListaLibroUncheckedUpdateManyWithoutLibroNestedInputObjectSchema: z.ZodType<Prisma.ListaLibroUncheckedUpdateManyWithoutLibroNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroUncheckedUpdateManyWithoutLibroNestedInput>;
export const ListaLibroUncheckedUpdateManyWithoutLibroNestedInputObjectZodSchema =
	makeSchema();
