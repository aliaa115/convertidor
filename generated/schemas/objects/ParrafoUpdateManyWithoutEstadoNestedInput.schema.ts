import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ParrafoCreateManyEstadoInputEnvelopeObjectSchema as ParrafoCreateManyEstadoInputEnvelopeObjectSchema } from "./ParrafoCreateManyEstadoInputEnvelope.schema.ts";
import { ParrafoCreateOrConnectWithoutEstadoInputObjectSchema as ParrafoCreateOrConnectWithoutEstadoInputObjectSchema } from "./ParrafoCreateOrConnectWithoutEstadoInput.schema.ts";
import { ParrafoCreateWithoutEstadoInputObjectSchema as ParrafoCreateWithoutEstadoInputObjectSchema } from "./ParrafoCreateWithoutEstadoInput.schema.ts";
import { ParrafoScalarWhereInputObjectSchema as ParrafoScalarWhereInputObjectSchema } from "./ParrafoScalarWhereInput.schema.ts";
import { ParrafoUncheckedCreateWithoutEstadoInputObjectSchema as ParrafoUncheckedCreateWithoutEstadoInputObjectSchema } from "./ParrafoUncheckedCreateWithoutEstadoInput.schema.ts";
import { ParrafoUpdateManyWithWhereWithoutEstadoInputObjectSchema as ParrafoUpdateManyWithWhereWithoutEstadoInputObjectSchema } from "./ParrafoUpdateManyWithWhereWithoutEstadoInput.schema.ts";
import { ParrafoUpdateWithWhereUniqueWithoutEstadoInputObjectSchema as ParrafoUpdateWithWhereUniqueWithoutEstadoInputObjectSchema } from "./ParrafoUpdateWithWhereUniqueWithoutEstadoInput.schema.ts";
import { ParrafoUpsertWithWhereUniqueWithoutEstadoInputObjectSchema as ParrafoUpsertWithWhereUniqueWithoutEstadoInputObjectSchema } from "./ParrafoUpsertWithWhereUniqueWithoutEstadoInput.schema.ts";
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
			upsert: z.union([z.lazy(() => ParrafoUpsertWithWhereUniqueWithoutEstadoInputObjectSchema), z.lazy(() => ParrafoUpsertWithWhereUniqueWithoutEstadoInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => ParrafoCreateManyEstadoInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => ParrafoWhereUniqueInputObjectSchema), z.lazy(() => ParrafoWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => ParrafoWhereUniqueInputObjectSchema), z.lazy(() => ParrafoWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => ParrafoWhereUniqueInputObjectSchema), z.lazy(() => ParrafoWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => ParrafoWhereUniqueInputObjectSchema), z.lazy(() => ParrafoWhereUniqueInputObjectSchema).array()]).optional(),
			update: z.union([z.lazy(() => ParrafoUpdateWithWhereUniqueWithoutEstadoInputObjectSchema), z.lazy(() => ParrafoUpdateWithWhereUniqueWithoutEstadoInputObjectSchema).array()]).optional(),
			updateMany: z.union([z.lazy(() => ParrafoUpdateManyWithWhereWithoutEstadoInputObjectSchema), z.lazy(() => ParrafoUpdateManyWithWhereWithoutEstadoInputObjectSchema).array()]).optional(),
			deleteMany: z.union([z.lazy(() => ParrafoScalarWhereInputObjectSchema), z.lazy(() => ParrafoScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const ParrafoUpdateManyWithoutEstadoNestedInputObjectSchema: z.ZodType<Prisma.ParrafoUpdateManyWithoutEstadoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoUpdateManyWithoutEstadoNestedInput>;
export const ParrafoUpdateManyWithoutEstadoNestedInputObjectZodSchema = makeSchema();
