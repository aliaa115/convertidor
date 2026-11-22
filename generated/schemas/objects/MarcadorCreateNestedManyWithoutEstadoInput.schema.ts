import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { MarcadorCreateManyEstadoInputEnvelopeObjectSchema as MarcadorCreateManyEstadoInputEnvelopeObjectSchema } from "./MarcadorCreateManyEstadoInputEnvelope.schema.ts";
import { MarcadorCreateOrConnectWithoutEstadoInputObjectSchema as MarcadorCreateOrConnectWithoutEstadoInputObjectSchema } from "./MarcadorCreateOrConnectWithoutEstadoInput.schema.ts";
import { MarcadorCreateWithoutEstadoInputObjectSchema as MarcadorCreateWithoutEstadoInputObjectSchema } from "./MarcadorCreateWithoutEstadoInput.schema.ts";
import { MarcadorUncheckedCreateWithoutEstadoInputObjectSchema as MarcadorUncheckedCreateWithoutEstadoInputObjectSchema } from "./MarcadorUncheckedCreateWithoutEstadoInput.schema.ts";
import { MarcadorWhereUniqueInputObjectSchema as MarcadorWhereUniqueInputObjectSchema } from "./MarcadorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => MarcadorCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => MarcadorCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => MarcadorUncheckedCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => MarcadorUncheckedCreateWithoutEstadoInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => MarcadorCreateOrConnectWithoutEstadoInputObjectSchema), z.lazy(() => MarcadorCreateOrConnectWithoutEstadoInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => MarcadorCreateManyEstadoInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => MarcadorWhereUniqueInputObjectSchema), z.lazy(() => MarcadorWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const MarcadorCreateNestedManyWithoutEstadoInputObjectSchema: z.ZodType<Prisma.MarcadorCreateNestedManyWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorCreateNestedManyWithoutEstadoInput>;
export const MarcadorCreateNestedManyWithoutEstadoInputObjectZodSchema = makeSchema();
