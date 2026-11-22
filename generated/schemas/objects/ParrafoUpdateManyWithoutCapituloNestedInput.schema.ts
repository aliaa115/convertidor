import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ParrafoCreateManyCapituloInputEnvelopeObjectSchema as ParrafoCreateManyCapituloInputEnvelopeObjectSchema } from "./ParrafoCreateManyCapituloInputEnvelope.schema.ts";
import { ParrafoCreateOrConnectWithoutCapituloInputObjectSchema as ParrafoCreateOrConnectWithoutCapituloInputObjectSchema } from "./ParrafoCreateOrConnectWithoutCapituloInput.schema.ts";
import { ParrafoCreateWithoutCapituloInputObjectSchema as ParrafoCreateWithoutCapituloInputObjectSchema } from "./ParrafoCreateWithoutCapituloInput.schema.ts";
import { ParrafoScalarWhereInputObjectSchema as ParrafoScalarWhereInputObjectSchema } from "./ParrafoScalarWhereInput.schema.ts";
import { ParrafoUncheckedCreateWithoutCapituloInputObjectSchema as ParrafoUncheckedCreateWithoutCapituloInputObjectSchema } from "./ParrafoUncheckedCreateWithoutCapituloInput.schema.ts";
import { ParrafoUpdateManyWithWhereWithoutCapituloInputObjectSchema as ParrafoUpdateManyWithWhereWithoutCapituloInputObjectSchema } from "./ParrafoUpdateManyWithWhereWithoutCapituloInput.schema.ts";
import { ParrafoUpdateWithWhereUniqueWithoutCapituloInputObjectSchema as ParrafoUpdateWithWhereUniqueWithoutCapituloInputObjectSchema } from "./ParrafoUpdateWithWhereUniqueWithoutCapituloInput.schema.ts";
import { ParrafoUpsertWithWhereUniqueWithoutCapituloInputObjectSchema as ParrafoUpsertWithWhereUniqueWithoutCapituloInputObjectSchema } from "./ParrafoUpsertWithWhereUniqueWithoutCapituloInput.schema.ts";
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
			upsert: z.union([z.lazy(() => ParrafoUpsertWithWhereUniqueWithoutCapituloInputObjectSchema), z.lazy(() => ParrafoUpsertWithWhereUniqueWithoutCapituloInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => ParrafoCreateManyCapituloInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => ParrafoWhereUniqueInputObjectSchema), z.lazy(() => ParrafoWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => ParrafoWhereUniqueInputObjectSchema), z.lazy(() => ParrafoWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => ParrafoWhereUniqueInputObjectSchema), z.lazy(() => ParrafoWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => ParrafoWhereUniqueInputObjectSchema), z.lazy(() => ParrafoWhereUniqueInputObjectSchema).array()]).optional(),
			update: z.union([z.lazy(() => ParrafoUpdateWithWhereUniqueWithoutCapituloInputObjectSchema), z.lazy(() => ParrafoUpdateWithWhereUniqueWithoutCapituloInputObjectSchema).array()]).optional(),
			updateMany: z.union([z.lazy(() => ParrafoUpdateManyWithWhereWithoutCapituloInputObjectSchema), z.lazy(() => ParrafoUpdateManyWithWhereWithoutCapituloInputObjectSchema).array()]).optional(),
			deleteMany: z.union([z.lazy(() => ParrafoScalarWhereInputObjectSchema), z.lazy(() => ParrafoScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const ParrafoUpdateManyWithoutCapituloNestedInputObjectSchema: z.ZodType<Prisma.ParrafoUpdateManyWithoutCapituloNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoUpdateManyWithoutCapituloNestedInput>;
export const ParrafoUpdateManyWithoutCapituloNestedInputObjectZodSchema = makeSchema();
