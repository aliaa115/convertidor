import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloCreateManyLibroInputEnvelopeObjectSchema as CapituloCreateManyLibroInputEnvelopeObjectSchema } from "./CapituloCreateManyLibroInputEnvelope.schema.ts";
import { CapituloCreateOrConnectWithoutLibroInputObjectSchema as CapituloCreateOrConnectWithoutLibroInputObjectSchema } from "./CapituloCreateOrConnectWithoutLibroInput.schema.ts";
import { CapituloCreateWithoutLibroInputObjectSchema as CapituloCreateWithoutLibroInputObjectSchema } from "./CapituloCreateWithoutLibroInput.schema.ts";
import { CapituloUncheckedCreateWithoutLibroInputObjectSchema as CapituloUncheckedCreateWithoutLibroInputObjectSchema } from "./CapituloUncheckedCreateWithoutLibroInput.schema.ts";
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
			createMany: z
				.lazy(() => CapituloCreateManyLibroInputEnvelopeObjectSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => CapituloWhereUniqueInputObjectSchema),
					z.lazy(() => CapituloWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const CapituloUncheckedCreateNestedManyWithoutLibroInputObjectSchema: z.ZodType<Prisma.CapituloUncheckedCreateNestedManyWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloUncheckedCreateNestedManyWithoutLibroInput>;
export const CapituloUncheckedCreateNestedManyWithoutLibroInputObjectZodSchema =
	makeSchema();
