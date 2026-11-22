import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { MarcadorCreateManyParrafoInputEnvelopeObjectSchema as MarcadorCreateManyParrafoInputEnvelopeObjectSchema } from "./MarcadorCreateManyParrafoInputEnvelope.schema.ts";
import { MarcadorCreateOrConnectWithoutParrafoInputObjectSchema as MarcadorCreateOrConnectWithoutParrafoInputObjectSchema } from "./MarcadorCreateOrConnectWithoutParrafoInput.schema.ts";
import { MarcadorCreateWithoutParrafoInputObjectSchema as MarcadorCreateWithoutParrafoInputObjectSchema } from "./MarcadorCreateWithoutParrafoInput.schema.ts";
import { MarcadorScalarWhereInputObjectSchema as MarcadorScalarWhereInputObjectSchema } from "./MarcadorScalarWhereInput.schema.ts";
import { MarcadorUncheckedCreateWithoutParrafoInputObjectSchema as MarcadorUncheckedCreateWithoutParrafoInputObjectSchema } from "./MarcadorUncheckedCreateWithoutParrafoInput.schema.ts";
import { MarcadorUpdateManyWithWhereWithoutParrafoInputObjectSchema as MarcadorUpdateManyWithWhereWithoutParrafoInputObjectSchema } from "./MarcadorUpdateManyWithWhereWithoutParrafoInput.schema.ts";
import { MarcadorUpdateWithWhereUniqueWithoutParrafoInputObjectSchema as MarcadorUpdateWithWhereUniqueWithoutParrafoInputObjectSchema } from "./MarcadorUpdateWithWhereUniqueWithoutParrafoInput.schema.ts";
import { MarcadorUpsertWithWhereUniqueWithoutParrafoInputObjectSchema as MarcadorUpsertWithWhereUniqueWithoutParrafoInputObjectSchema } from "./MarcadorUpsertWithWhereUniqueWithoutParrafoInput.schema.ts";
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
			upsert: z.union([z.lazy(() => MarcadorUpsertWithWhereUniqueWithoutParrafoInputObjectSchema), z.lazy(() => MarcadorUpsertWithWhereUniqueWithoutParrafoInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => MarcadorCreateManyParrafoInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => MarcadorWhereUniqueInputObjectSchema), z.lazy(() => MarcadorWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => MarcadorWhereUniqueInputObjectSchema), z.lazy(() => MarcadorWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => MarcadorWhereUniqueInputObjectSchema), z.lazy(() => MarcadorWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => MarcadorWhereUniqueInputObjectSchema), z.lazy(() => MarcadorWhereUniqueInputObjectSchema).array()]).optional(),
			update: z.union([z.lazy(() => MarcadorUpdateWithWhereUniqueWithoutParrafoInputObjectSchema), z.lazy(() => MarcadorUpdateWithWhereUniqueWithoutParrafoInputObjectSchema).array()]).optional(),
			updateMany: z.union([z.lazy(() => MarcadorUpdateManyWithWhereWithoutParrafoInputObjectSchema), z.lazy(() => MarcadorUpdateManyWithWhereWithoutParrafoInputObjectSchema).array()]).optional(),
			deleteMany: z.union([z.lazy(() => MarcadorScalarWhereInputObjectSchema), z.lazy(() => MarcadorScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const MarcadorUncheckedUpdateManyWithoutParrafoNestedInputObjectSchema: z.ZodType<Prisma.MarcadorUncheckedUpdateManyWithoutParrafoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorUncheckedUpdateManyWithoutParrafoNestedInput>;
export const MarcadorUncheckedUpdateManyWithoutParrafoNestedInputObjectZodSchema = makeSchema();
