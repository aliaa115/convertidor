import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { GlosarioCreateManyLibroInputEnvelopeObjectSchema as GlosarioCreateManyLibroInputEnvelopeObjectSchema } from "./GlosarioCreateManyLibroInputEnvelope.schema.ts";
import { GlosarioCreateOrConnectWithoutLibroInputObjectSchema as GlosarioCreateOrConnectWithoutLibroInputObjectSchema } from "./GlosarioCreateOrConnectWithoutLibroInput.schema.ts";
import { GlosarioCreateWithoutLibroInputObjectSchema as GlosarioCreateWithoutLibroInputObjectSchema } from "./GlosarioCreateWithoutLibroInput.schema.ts";
import { GlosarioUncheckedCreateWithoutLibroInputObjectSchema as GlosarioUncheckedCreateWithoutLibroInputObjectSchema } from "./GlosarioUncheckedCreateWithoutLibroInput.schema.ts";
import { GlosarioWhereUniqueInputObjectSchema as GlosarioWhereUniqueInputObjectSchema } from "./GlosarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => GlosarioCreateWithoutLibroInputObjectSchema),
					z.lazy(() => GlosarioCreateWithoutLibroInputObjectSchema).array(),
					z.lazy(() => GlosarioUncheckedCreateWithoutLibroInputObjectSchema),
					z
						.lazy(() => GlosarioUncheckedCreateWithoutLibroInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => GlosarioCreateOrConnectWithoutLibroInputObjectSchema),
					z
						.lazy(() => GlosarioCreateOrConnectWithoutLibroInputObjectSchema)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => GlosarioCreateManyLibroInputEnvelopeObjectSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => GlosarioWhereUniqueInputObjectSchema),
					z.lazy(() => GlosarioWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const GlosarioUncheckedCreateNestedManyWithoutLibroInputObjectSchema: z.ZodType<Prisma.GlosarioUncheckedCreateNestedManyWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioUncheckedCreateNestedManyWithoutLibroInput>;
export const GlosarioUncheckedCreateNestedManyWithoutLibroInputObjectZodSchema =
	makeSchema();
