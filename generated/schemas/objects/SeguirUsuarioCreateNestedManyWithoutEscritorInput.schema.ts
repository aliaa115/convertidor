import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SeguirUsuarioCreateManyEscritorInputEnvelopeObjectSchema as SeguirUsuarioCreateManyEscritorInputEnvelopeObjectSchema } from "./SeguirUsuarioCreateManyEscritorInputEnvelope.schema.ts";
import { SeguirUsuarioCreateOrConnectWithoutEscritorInputObjectSchema as SeguirUsuarioCreateOrConnectWithoutEscritorInputObjectSchema } from "./SeguirUsuarioCreateOrConnectWithoutEscritorInput.schema.ts";
import { SeguirUsuarioCreateWithoutEscritorInputObjectSchema as SeguirUsuarioCreateWithoutEscritorInputObjectSchema } from "./SeguirUsuarioCreateWithoutEscritorInput.schema.ts";
import { SeguirUsuarioUncheckedCreateWithoutEscritorInputObjectSchema as SeguirUsuarioUncheckedCreateWithoutEscritorInputObjectSchema } from "./SeguirUsuarioUncheckedCreateWithoutEscritorInput.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./SeguirUsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => SeguirUsuarioCreateWithoutEscritorInputObjectSchema),
					z
						.lazy(() => SeguirUsuarioCreateWithoutEscritorInputObjectSchema)
						.array(),
					z.lazy(
						() => SeguirUsuarioUncheckedCreateWithoutEscritorInputObjectSchema,
					),
					z
						.lazy(
							() =>
								SeguirUsuarioUncheckedCreateWithoutEscritorInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(
						() => SeguirUsuarioCreateOrConnectWithoutEscritorInputObjectSchema,
					),
					z
						.lazy(
							() =>
								SeguirUsuarioCreateOrConnectWithoutEscritorInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => SeguirUsuarioCreateManyEscritorInputEnvelopeObjectSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema),
					z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const SeguirUsuarioCreateNestedManyWithoutEscritorInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioCreateNestedManyWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioCreateNestedManyWithoutEscritorInput>;
export const SeguirUsuarioCreateNestedManyWithoutEscritorInputObjectZodSchema =
	makeSchema();
