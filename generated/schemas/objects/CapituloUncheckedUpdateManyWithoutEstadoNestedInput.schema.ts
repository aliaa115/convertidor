import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloCreateManyEstadoInputEnvelopeObjectSchema as CapituloCreateManyEstadoInputEnvelopeObjectSchema } from "./CapituloCreateManyEstadoInputEnvelope.schema.ts";
import { CapituloCreateOrConnectWithoutEstadoInputObjectSchema as CapituloCreateOrConnectWithoutEstadoInputObjectSchema } from "./CapituloCreateOrConnectWithoutEstadoInput.schema.ts";
import { CapituloCreateWithoutEstadoInputObjectSchema as CapituloCreateWithoutEstadoInputObjectSchema } from "./CapituloCreateWithoutEstadoInput.schema.ts";
import { CapituloScalarWhereInputObjectSchema as CapituloScalarWhereInputObjectSchema } from "./CapituloScalarWhereInput.schema.ts";
import { CapituloUncheckedCreateWithoutEstadoInputObjectSchema as CapituloUncheckedCreateWithoutEstadoInputObjectSchema } from "./CapituloUncheckedCreateWithoutEstadoInput.schema.ts";
import { CapituloUpdateManyWithWhereWithoutEstadoInputObjectSchema as CapituloUpdateManyWithWhereWithoutEstadoInputObjectSchema } from "./CapituloUpdateManyWithWhereWithoutEstadoInput.schema.ts";
import { CapituloUpdateWithWhereUniqueWithoutEstadoInputObjectSchema as CapituloUpdateWithWhereUniqueWithoutEstadoInputObjectSchema } from "./CapituloUpdateWithWhereUniqueWithoutEstadoInput.schema.ts";
import { CapituloUpsertWithWhereUniqueWithoutEstadoInputObjectSchema as CapituloUpsertWithWhereUniqueWithoutEstadoInputObjectSchema } from "./CapituloUpsertWithWhereUniqueWithoutEstadoInput.schema.ts";
import { CapituloWhereUniqueInputObjectSchema as CapituloWhereUniqueInputObjectSchema } from "./CapituloWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => CapituloCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => CapituloCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => CapituloUncheckedCreateWithoutEstadoInputObjectSchema),
					z
						.lazy(() => CapituloUncheckedCreateWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => CapituloCreateOrConnectWithoutEstadoInputObjectSchema),
					z
						.lazy(() => CapituloCreateOrConnectWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() => CapituloUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => CapituloUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => CapituloCreateManyEstadoInputEnvelopeObjectSchema)
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
						() => CapituloUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => CapituloUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(
						() => CapituloUpdateManyWithWhereWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => CapituloUpdateManyWithWhereWithoutEstadoInputObjectSchema,
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
export const CapituloUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema: z.ZodType<Prisma.CapituloUncheckedUpdateManyWithoutEstadoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloUncheckedUpdateManyWithoutEstadoNestedInput>;
export const CapituloUncheckedUpdateManyWithoutEstadoNestedInputObjectZodSchema =
	makeSchema();
