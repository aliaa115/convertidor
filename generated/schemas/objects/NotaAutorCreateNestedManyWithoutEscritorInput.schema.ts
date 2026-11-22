import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { NotaAutorCreateManyEscritorInputEnvelopeObjectSchema as NotaAutorCreateManyEscritorInputEnvelopeObjectSchema } from "./NotaAutorCreateManyEscritorInputEnvelope.schema.ts";
import { NotaAutorCreateOrConnectWithoutEscritorInputObjectSchema as NotaAutorCreateOrConnectWithoutEscritorInputObjectSchema } from "./NotaAutorCreateOrConnectWithoutEscritorInput.schema.ts";
import { NotaAutorCreateWithoutEscritorInputObjectSchema as NotaAutorCreateWithoutEscritorInputObjectSchema } from "./NotaAutorCreateWithoutEscritorInput.schema.ts";
import { NotaAutorUncheckedCreateWithoutEscritorInputObjectSchema as NotaAutorUncheckedCreateWithoutEscritorInputObjectSchema } from "./NotaAutorUncheckedCreateWithoutEscritorInput.schema.ts";
import { NotaAutorWhereUniqueInputObjectSchema as NotaAutorWhereUniqueInputObjectSchema } from "./NotaAutorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => NotaAutorCreateWithoutEscritorInputObjectSchema),
					z.lazy(() => NotaAutorCreateWithoutEscritorInputObjectSchema).array(),
					z.lazy(() => NotaAutorUncheckedCreateWithoutEscritorInputObjectSchema),
					z.lazy(() => NotaAutorUncheckedCreateWithoutEscritorInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => NotaAutorCreateOrConnectWithoutEscritorInputObjectSchema), z.lazy(() => NotaAutorCreateOrConnectWithoutEscritorInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => NotaAutorCreateManyEscritorInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => NotaAutorWhereUniqueInputObjectSchema), z.lazy(() => NotaAutorWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const NotaAutorCreateNestedManyWithoutEscritorInputObjectSchema: z.ZodType<Prisma.NotaAutorCreateNestedManyWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorCreateNestedManyWithoutEscritorInput>;
export const NotaAutorCreateNestedManyWithoutEscritorInputObjectZodSchema = makeSchema();
