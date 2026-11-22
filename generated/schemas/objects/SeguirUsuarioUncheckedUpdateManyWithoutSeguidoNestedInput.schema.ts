import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SeguirUsuarioCreateManySeguidoInputEnvelopeObjectSchema as SeguirUsuarioCreateManySeguidoInputEnvelopeObjectSchema } from "./SeguirUsuarioCreateManySeguidoInputEnvelope.schema.ts";
import { SeguirUsuarioCreateOrConnectWithoutSeguidoInputObjectSchema as SeguirUsuarioCreateOrConnectWithoutSeguidoInputObjectSchema } from "./SeguirUsuarioCreateOrConnectWithoutSeguidoInput.schema.ts";
import { SeguirUsuarioCreateWithoutSeguidoInputObjectSchema as SeguirUsuarioCreateWithoutSeguidoInputObjectSchema } from "./SeguirUsuarioCreateWithoutSeguidoInput.schema.ts";
import { SeguirUsuarioScalarWhereInputObjectSchema as SeguirUsuarioScalarWhereInputObjectSchema } from "./SeguirUsuarioScalarWhereInput.schema.ts";
import { SeguirUsuarioUncheckedCreateWithoutSeguidoInputObjectSchema as SeguirUsuarioUncheckedCreateWithoutSeguidoInputObjectSchema } from "./SeguirUsuarioUncheckedCreateWithoutSeguidoInput.schema.ts";
import { SeguirUsuarioUpdateManyWithWhereWithoutSeguidoInputObjectSchema as SeguirUsuarioUpdateManyWithWhereWithoutSeguidoInputObjectSchema } from "./SeguirUsuarioUpdateManyWithWhereWithoutSeguidoInput.schema.ts";
import { SeguirUsuarioUpdateWithWhereUniqueWithoutSeguidoInputObjectSchema as SeguirUsuarioUpdateWithWhereUniqueWithoutSeguidoInputObjectSchema } from "./SeguirUsuarioUpdateWithWhereUniqueWithoutSeguidoInput.schema.ts";
import { SeguirUsuarioUpsertWithWhereUniqueWithoutSeguidoInputObjectSchema as SeguirUsuarioUpsertWithWhereUniqueWithoutSeguidoInputObjectSchema } from "./SeguirUsuarioUpsertWithWhereUniqueWithoutSeguidoInput.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./SeguirUsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => SeguirUsuarioCreateWithoutSeguidoInputObjectSchema),
					z.lazy(() => SeguirUsuarioCreateWithoutSeguidoInputObjectSchema).array(),
					z.lazy(() => SeguirUsuarioUncheckedCreateWithoutSeguidoInputObjectSchema),
					z.lazy(() => SeguirUsuarioUncheckedCreateWithoutSeguidoInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([z.lazy(() => SeguirUsuarioCreateOrConnectWithoutSeguidoInputObjectSchema), z.lazy(() => SeguirUsuarioCreateOrConnectWithoutSeguidoInputObjectSchema).array()])
				.optional(),
			upsert: z
				.union([z.lazy(() => SeguirUsuarioUpsertWithWhereUniqueWithoutSeguidoInputObjectSchema), z.lazy(() => SeguirUsuarioUpsertWithWhereUniqueWithoutSeguidoInputObjectSchema).array()])
				.optional(),
			createMany: z.lazy(() => SeguirUsuarioCreateManySeguidoInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema), z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema), z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema), z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema), z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema).array()]).optional(),
			update: z
				.union([z.lazy(() => SeguirUsuarioUpdateWithWhereUniqueWithoutSeguidoInputObjectSchema), z.lazy(() => SeguirUsuarioUpdateWithWhereUniqueWithoutSeguidoInputObjectSchema).array()])
				.optional(),
			updateMany: z
				.union([z.lazy(() => SeguirUsuarioUpdateManyWithWhereWithoutSeguidoInputObjectSchema), z.lazy(() => SeguirUsuarioUpdateManyWithWhereWithoutSeguidoInputObjectSchema).array()])
				.optional(),
			deleteMany: z.union([z.lazy(() => SeguirUsuarioScalarWhereInputObjectSchema), z.lazy(() => SeguirUsuarioScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const SeguirUsuarioUncheckedUpdateManyWithoutSeguidoNestedInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioUncheckedUpdateManyWithoutSeguidoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioUncheckedUpdateManyWithoutSeguidoNestedInput>;
export const SeguirUsuarioUncheckedUpdateManyWithoutSeguidoNestedInputObjectZodSchema = makeSchema();
