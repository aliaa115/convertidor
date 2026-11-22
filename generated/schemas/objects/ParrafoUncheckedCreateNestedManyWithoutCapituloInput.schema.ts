import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ParrafoCreateManyCapituloInputEnvelopeObjectSchema as ParrafoCreateManyCapituloInputEnvelopeObjectSchema } from "./ParrafoCreateManyCapituloInputEnvelope.schema.ts";
import { ParrafoCreateOrConnectWithoutCapituloInputObjectSchema as ParrafoCreateOrConnectWithoutCapituloInputObjectSchema } from "./ParrafoCreateOrConnectWithoutCapituloInput.schema.ts";
import { ParrafoCreateWithoutCapituloInputObjectSchema as ParrafoCreateWithoutCapituloInputObjectSchema } from "./ParrafoCreateWithoutCapituloInput.schema.ts";
import { ParrafoUncheckedCreateWithoutCapituloInputObjectSchema as ParrafoUncheckedCreateWithoutCapituloInputObjectSchema } from "./ParrafoUncheckedCreateWithoutCapituloInput.schema.ts";
import { ParrafoWhereUniqueInputObjectSchema as ParrafoWhereUniqueInputObjectSchema } from "./ParrafoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ParrafoCreateWithoutCapituloInputObjectSchema),
					z.lazy(() => ParrafoCreateWithoutCapituloInputObjectSchema).array(),
					z.lazy(() => ParrafoUncheckedCreateWithoutCapituloInputObjectSchema),
					z.lazy(() => ParrafoUncheckedCreateWithoutCapituloInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => ParrafoCreateOrConnectWithoutCapituloInputObjectSchema), z.lazy(() => ParrafoCreateOrConnectWithoutCapituloInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => ParrafoCreateManyCapituloInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => ParrafoWhereUniqueInputObjectSchema), z.lazy(() => ParrafoWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const ParrafoUncheckedCreateNestedManyWithoutCapituloInputObjectSchema: z.ZodType<Prisma.ParrafoUncheckedCreateNestedManyWithoutCapituloInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoUncheckedCreateNestedManyWithoutCapituloInput>;
export const ParrafoUncheckedCreateNestedManyWithoutCapituloInputObjectZodSchema = makeSchema();
