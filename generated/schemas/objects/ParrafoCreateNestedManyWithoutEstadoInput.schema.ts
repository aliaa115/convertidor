import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ParrafoCreateManyEstadoInputEnvelopeObjectSchema as ParrafoCreateManyEstadoInputEnvelopeObjectSchema } from "./ParrafoCreateManyEstadoInputEnvelope.schema.ts";
import { ParrafoCreateOrConnectWithoutEstadoInputObjectSchema as ParrafoCreateOrConnectWithoutEstadoInputObjectSchema } from "./ParrafoCreateOrConnectWithoutEstadoInput.schema.ts";
import { ParrafoCreateWithoutEstadoInputObjectSchema as ParrafoCreateWithoutEstadoInputObjectSchema } from "./ParrafoCreateWithoutEstadoInput.schema.ts";
import { ParrafoUncheckedCreateWithoutEstadoInputObjectSchema as ParrafoUncheckedCreateWithoutEstadoInputObjectSchema } from "./ParrafoUncheckedCreateWithoutEstadoInput.schema.ts";
import { ParrafoWhereUniqueInputObjectSchema as ParrafoWhereUniqueInputObjectSchema } from "./ParrafoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ParrafoCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => ParrafoCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => ParrafoUncheckedCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => ParrafoUncheckedCreateWithoutEstadoInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => ParrafoCreateOrConnectWithoutEstadoInputObjectSchema), z.lazy(() => ParrafoCreateOrConnectWithoutEstadoInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => ParrafoCreateManyEstadoInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => ParrafoWhereUniqueInputObjectSchema), z.lazy(() => ParrafoWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const ParrafoCreateNestedManyWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ParrafoCreateNestedManyWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoCreateNestedManyWithoutEstadoInput>;
export const ParrafoCreateNestedManyWithoutEstadoInputObjectZodSchema = makeSchema();
