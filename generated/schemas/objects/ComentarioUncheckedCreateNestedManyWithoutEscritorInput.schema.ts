import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioCreateManyEscritorInputEnvelopeObjectSchema as ComentarioCreateManyEscritorInputEnvelopeObjectSchema } from "./ComentarioCreateManyEscritorInputEnvelope.schema.ts";
import { ComentarioCreateOrConnectWithoutEscritorInputObjectSchema as ComentarioCreateOrConnectWithoutEscritorInputObjectSchema } from "./ComentarioCreateOrConnectWithoutEscritorInput.schema.ts";
import { ComentarioCreateWithoutEscritorInputObjectSchema as ComentarioCreateWithoutEscritorInputObjectSchema } from "./ComentarioCreateWithoutEscritorInput.schema.ts";
import { ComentarioUncheckedCreateWithoutEscritorInputObjectSchema as ComentarioUncheckedCreateWithoutEscritorInputObjectSchema } from "./ComentarioUncheckedCreateWithoutEscritorInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ComentarioCreateWithoutEscritorInputObjectSchema),
					z.lazy(() => ComentarioCreateWithoutEscritorInputObjectSchema).array(),
					z.lazy(() => ComentarioUncheckedCreateWithoutEscritorInputObjectSchema),
					z.lazy(() => ComentarioUncheckedCreateWithoutEscritorInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => ComentarioCreateOrConnectWithoutEscritorInputObjectSchema), z.lazy(() => ComentarioCreateOrConnectWithoutEscritorInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => ComentarioCreateManyEscritorInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => ComentarioWhereUniqueInputObjectSchema), z.lazy(() => ComentarioWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const ComentarioUncheckedCreateNestedManyWithoutEscritorInputObjectSchema: z.ZodType<Prisma.ComentarioUncheckedCreateNestedManyWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUncheckedCreateNestedManyWithoutEscritorInput>;
export const ComentarioUncheckedCreateNestedManyWithoutEscritorInputObjectZodSchema = makeSchema();
