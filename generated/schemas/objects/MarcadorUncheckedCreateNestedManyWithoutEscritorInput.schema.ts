import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { MarcadorCreateManyEscritorInputEnvelopeObjectSchema as MarcadorCreateManyEscritorInputEnvelopeObjectSchema } from "./MarcadorCreateManyEscritorInputEnvelope.schema.ts";
import { MarcadorCreateOrConnectWithoutEscritorInputObjectSchema as MarcadorCreateOrConnectWithoutEscritorInputObjectSchema } from "./MarcadorCreateOrConnectWithoutEscritorInput.schema.ts";
import { MarcadorCreateWithoutEscritorInputObjectSchema as MarcadorCreateWithoutEscritorInputObjectSchema } from "./MarcadorCreateWithoutEscritorInput.schema.ts";
import { MarcadorUncheckedCreateWithoutEscritorInputObjectSchema as MarcadorUncheckedCreateWithoutEscritorInputObjectSchema } from "./MarcadorUncheckedCreateWithoutEscritorInput.schema.ts";
import { MarcadorWhereUniqueInputObjectSchema as MarcadorWhereUniqueInputObjectSchema } from "./MarcadorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => MarcadorCreateWithoutEscritorInputObjectSchema),
					z.lazy(() => MarcadorCreateWithoutEscritorInputObjectSchema).array(),
					z.lazy(() => MarcadorUncheckedCreateWithoutEscritorInputObjectSchema),
					z
						.lazy(() => MarcadorUncheckedCreateWithoutEscritorInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => MarcadorCreateOrConnectWithoutEscritorInputObjectSchema),
					z
						.lazy(() => MarcadorCreateOrConnectWithoutEscritorInputObjectSchema)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => MarcadorCreateManyEscritorInputEnvelopeObjectSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => MarcadorWhereUniqueInputObjectSchema),
					z.lazy(() => MarcadorWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const MarcadorUncheckedCreateNestedManyWithoutEscritorInputObjectSchema: z.ZodType<Prisma.MarcadorUncheckedCreateNestedManyWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorUncheckedCreateNestedManyWithoutEscritorInput>;
export const MarcadorUncheckedCreateNestedManyWithoutEscritorInputObjectZodSchema =
	makeSchema();
