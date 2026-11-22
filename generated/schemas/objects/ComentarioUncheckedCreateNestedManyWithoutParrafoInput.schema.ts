import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioCreateManyParrafoInputEnvelopeObjectSchema as ComentarioCreateManyParrafoInputEnvelopeObjectSchema } from "./ComentarioCreateManyParrafoInputEnvelope.schema.ts";
import { ComentarioCreateOrConnectWithoutParrafoInputObjectSchema as ComentarioCreateOrConnectWithoutParrafoInputObjectSchema } from "./ComentarioCreateOrConnectWithoutParrafoInput.schema.ts";
import { ComentarioCreateWithoutParrafoInputObjectSchema as ComentarioCreateWithoutParrafoInputObjectSchema } from "./ComentarioCreateWithoutParrafoInput.schema.ts";
import { ComentarioUncheckedCreateWithoutParrafoInputObjectSchema as ComentarioUncheckedCreateWithoutParrafoInputObjectSchema } from "./ComentarioUncheckedCreateWithoutParrafoInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ComentarioCreateWithoutParrafoInputObjectSchema),
					z.lazy(() => ComentarioCreateWithoutParrafoInputObjectSchema).array(),
					z.lazy(
						() => ComentarioUncheckedCreateWithoutParrafoInputObjectSchema,
					),
					z
						.lazy(
							() => ComentarioUncheckedCreateWithoutParrafoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(
						() => ComentarioCreateOrConnectWithoutParrafoInputObjectSchema,
					),
					z
						.lazy(
							() => ComentarioCreateOrConnectWithoutParrafoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => ComentarioCreateManyParrafoInputEnvelopeObjectSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
					z.lazy(() => ComentarioWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const ComentarioUncheckedCreateNestedManyWithoutParrafoInputObjectSchema: z.ZodType<Prisma.ComentarioUncheckedCreateNestedManyWithoutParrafoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUncheckedCreateNestedManyWithoutParrafoInput>;
export const ComentarioUncheckedCreateNestedManyWithoutParrafoInputObjectZodSchema =
	makeSchema();
