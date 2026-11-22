import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloCreateManyLibroInputEnvelopeObjectSchema as CapituloCreateManyLibroInputEnvelopeObjectSchema } from "./CapituloCreateManyLibroInputEnvelope.schema.ts";
import { CapituloCreateOrConnectWithoutLibroInputObjectSchema as CapituloCreateOrConnectWithoutLibroInputObjectSchema } from "./CapituloCreateOrConnectWithoutLibroInput.schema.ts";
import { CapituloCreateWithoutLibroInputObjectSchema as CapituloCreateWithoutLibroInputObjectSchema } from "./CapituloCreateWithoutLibroInput.schema.ts";
import { CapituloScalarWhereInputObjectSchema as CapituloScalarWhereInputObjectSchema } from "./CapituloScalarWhereInput.schema.ts";
import { CapituloUncheckedCreateWithoutLibroInputObjectSchema as CapituloUncheckedCreateWithoutLibroInputObjectSchema } from "./CapituloUncheckedCreateWithoutLibroInput.schema.ts";
import { CapituloUpdateManyWithWhereWithoutLibroInputObjectSchema as CapituloUpdateManyWithWhereWithoutLibroInputObjectSchema } from "./CapituloUpdateManyWithWhereWithoutLibroInput.schema.ts";
import { CapituloUpdateWithWhereUniqueWithoutLibroInputObjectSchema as CapituloUpdateWithWhereUniqueWithoutLibroInputObjectSchema } from "./CapituloUpdateWithWhereUniqueWithoutLibroInput.schema.ts";
import { CapituloUpsertWithWhereUniqueWithoutLibroInputObjectSchema as CapituloUpsertWithWhereUniqueWithoutLibroInputObjectSchema } from "./CapituloUpsertWithWhereUniqueWithoutLibroInput.schema.ts";
import { CapituloWhereUniqueInputObjectSchema as CapituloWhereUniqueInputObjectSchema } from "./CapituloWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => CapituloCreateWithoutLibroInputObjectSchema),
					z.lazy(() => CapituloCreateWithoutLibroInputObjectSchema).array(),
					z.lazy(() => CapituloUncheckedCreateWithoutLibroInputObjectSchema),
					z
						.lazy(() => CapituloUncheckedCreateWithoutLibroInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => CapituloCreateOrConnectWithoutLibroInputObjectSchema),
					z
						.lazy(() => CapituloCreateOrConnectWithoutLibroInputObjectSchema)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() => CapituloUpsertWithWhereUniqueWithoutLibroInputObjectSchema,
					),
					z
						.lazy(
							() => CapituloUpsertWithWhereUniqueWithoutLibroInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => CapituloCreateManyLibroInputEnvelopeObjectSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => CapituloWhereUniqueInputObjectSchema),
					z.lazy(() => CapituloWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => CapituloWhereUniqueInputObjectSchema),
					z.lazy(() => CapituloWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => CapituloWhereUniqueInputObjectSchema),
					z.lazy(() => CapituloWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => CapituloWhereUniqueInputObjectSchema),
					z.lazy(() => CapituloWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(
						() => CapituloUpdateWithWhereUniqueWithoutLibroInputObjectSchema,
					),
					z
						.lazy(
							() => CapituloUpdateWithWhereUniqueWithoutLibroInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(
						() => CapituloUpdateManyWithWhereWithoutLibroInputObjectSchema,
					),
					z
						.lazy(
							() => CapituloUpdateManyWithWhereWithoutLibroInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => CapituloScalarWhereInputObjectSchema),
					z.lazy(() => CapituloScalarWhereInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const CapituloUncheckedUpdateManyWithoutLibroNestedInputObjectSchema: z.ZodType<Prisma.CapituloUncheckedUpdateManyWithoutLibroNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloUncheckedUpdateManyWithoutLibroNestedInput>;
export const CapituloUncheckedUpdateManyWithoutLibroNestedInputObjectZodSchema =
	makeSchema();
