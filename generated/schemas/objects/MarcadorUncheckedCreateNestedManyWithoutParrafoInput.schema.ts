import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { MarcadorCreateManyParrafoInputEnvelopeObjectSchema as MarcadorCreateManyParrafoInputEnvelopeObjectSchema } from "./MarcadorCreateManyParrafoInputEnvelope.schema.ts";
import { MarcadorCreateOrConnectWithoutParrafoInputObjectSchema as MarcadorCreateOrConnectWithoutParrafoInputObjectSchema } from "./MarcadorCreateOrConnectWithoutParrafoInput.schema.ts";
import { MarcadorCreateWithoutParrafoInputObjectSchema as MarcadorCreateWithoutParrafoInputObjectSchema } from "./MarcadorCreateWithoutParrafoInput.schema.ts";
import { MarcadorUncheckedCreateWithoutParrafoInputObjectSchema as MarcadorUncheckedCreateWithoutParrafoInputObjectSchema } from "./MarcadorUncheckedCreateWithoutParrafoInput.schema.ts";
import { MarcadorWhereUniqueInputObjectSchema as MarcadorWhereUniqueInputObjectSchema } from "./MarcadorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => MarcadorCreateWithoutParrafoInputObjectSchema),
					z.lazy(() => MarcadorCreateWithoutParrafoInputObjectSchema).array(),
					z.lazy(() => MarcadorUncheckedCreateWithoutParrafoInputObjectSchema),
					z.lazy(() => MarcadorUncheckedCreateWithoutParrafoInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => MarcadorCreateOrConnectWithoutParrafoInputObjectSchema), z.lazy(() => MarcadorCreateOrConnectWithoutParrafoInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => MarcadorCreateManyParrafoInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => MarcadorWhereUniqueInputObjectSchema), z.lazy(() => MarcadorWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const MarcadorUncheckedCreateNestedManyWithoutParrafoInputObjectSchema: z.ZodType<Prisma.MarcadorUncheckedCreateNestedManyWithoutParrafoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorUncheckedCreateNestedManyWithoutParrafoInput>;
export const MarcadorUncheckedCreateNestedManyWithoutParrafoInputObjectZodSchema = makeSchema();
