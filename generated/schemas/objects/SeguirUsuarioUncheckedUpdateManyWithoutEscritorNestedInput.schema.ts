import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SeguirUsuarioCreateManyEscritorInputEnvelopeObjectSchema as SeguirUsuarioCreateManyEscritorInputEnvelopeObjectSchema } from "./SeguirUsuarioCreateManyEscritorInputEnvelope.schema.ts";
import { SeguirUsuarioCreateOrConnectWithoutEscritorInputObjectSchema as SeguirUsuarioCreateOrConnectWithoutEscritorInputObjectSchema } from "./SeguirUsuarioCreateOrConnectWithoutEscritorInput.schema.ts";
import { SeguirUsuarioCreateWithoutEscritorInputObjectSchema as SeguirUsuarioCreateWithoutEscritorInputObjectSchema } from "./SeguirUsuarioCreateWithoutEscritorInput.schema.ts";
import { SeguirUsuarioScalarWhereInputObjectSchema as SeguirUsuarioScalarWhereInputObjectSchema } from "./SeguirUsuarioScalarWhereInput.schema.ts";
import { SeguirUsuarioUncheckedCreateWithoutEscritorInputObjectSchema as SeguirUsuarioUncheckedCreateWithoutEscritorInputObjectSchema } from "./SeguirUsuarioUncheckedCreateWithoutEscritorInput.schema.ts";
import { SeguirUsuarioUpdateManyWithWhereWithoutEscritorInputObjectSchema as SeguirUsuarioUpdateManyWithWhereWithoutEscritorInputObjectSchema } from "./SeguirUsuarioUpdateManyWithWhereWithoutEscritorInput.schema.ts";
import { SeguirUsuarioUpdateWithWhereUniqueWithoutEscritorInputObjectSchema as SeguirUsuarioUpdateWithWhereUniqueWithoutEscritorInputObjectSchema } from "./SeguirUsuarioUpdateWithWhereUniqueWithoutEscritorInput.schema.ts";
import { SeguirUsuarioUpsertWithWhereUniqueWithoutEscritorInputObjectSchema as SeguirUsuarioUpsertWithWhereUniqueWithoutEscritorInputObjectSchema } from "./SeguirUsuarioUpsertWithWhereUniqueWithoutEscritorInput.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./SeguirUsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => SeguirUsuarioCreateWithoutEscritorInputObjectSchema),
					z.lazy(() => SeguirUsuarioCreateWithoutEscritorInputObjectSchema).array(),
					z.lazy(() => SeguirUsuarioUncheckedCreateWithoutEscritorInputObjectSchema),
					z.lazy(() => SeguirUsuarioUncheckedCreateWithoutEscritorInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([z.lazy(() => SeguirUsuarioCreateOrConnectWithoutEscritorInputObjectSchema), z.lazy(() => SeguirUsuarioCreateOrConnectWithoutEscritorInputObjectSchema).array()])
				.optional(),
			upsert: z
				.union([z.lazy(() => SeguirUsuarioUpsertWithWhereUniqueWithoutEscritorInputObjectSchema), z.lazy(() => SeguirUsuarioUpsertWithWhereUniqueWithoutEscritorInputObjectSchema).array()])
				.optional(),
			createMany: z.lazy(() => SeguirUsuarioCreateManyEscritorInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema), z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema), z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema), z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema), z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema).array()]).optional(),
			update: z
				.union([z.lazy(() => SeguirUsuarioUpdateWithWhereUniqueWithoutEscritorInputObjectSchema), z.lazy(() => SeguirUsuarioUpdateWithWhereUniqueWithoutEscritorInputObjectSchema).array()])
				.optional(),
			updateMany: z
				.union([z.lazy(() => SeguirUsuarioUpdateManyWithWhereWithoutEscritorInputObjectSchema), z.lazy(() => SeguirUsuarioUpdateManyWithWhereWithoutEscritorInputObjectSchema).array()])
				.optional(),
			deleteMany: z.union([z.lazy(() => SeguirUsuarioScalarWhereInputObjectSchema), z.lazy(() => SeguirUsuarioScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const SeguirUsuarioUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioUncheckedUpdateManyWithoutEscritorNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioUncheckedUpdateManyWithoutEscritorNestedInput>;
export const SeguirUsuarioUncheckedUpdateManyWithoutEscritorNestedInputObjectZodSchema = makeSchema();
