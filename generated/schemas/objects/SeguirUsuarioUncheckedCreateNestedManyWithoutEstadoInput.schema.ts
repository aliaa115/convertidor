import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SeguirUsuarioCreateManyEstadoInputEnvelopeObjectSchema as SeguirUsuarioCreateManyEstadoInputEnvelopeObjectSchema } from "./SeguirUsuarioCreateManyEstadoInputEnvelope.schema.ts";
import { SeguirUsuarioCreateOrConnectWithoutEstadoInputObjectSchema as SeguirUsuarioCreateOrConnectWithoutEstadoInputObjectSchema } from "./SeguirUsuarioCreateOrConnectWithoutEstadoInput.schema.ts";
import { SeguirUsuarioCreateWithoutEstadoInputObjectSchema as SeguirUsuarioCreateWithoutEstadoInputObjectSchema } from "./SeguirUsuarioCreateWithoutEstadoInput.schema.ts";
import { SeguirUsuarioUncheckedCreateWithoutEstadoInputObjectSchema as SeguirUsuarioUncheckedCreateWithoutEstadoInputObjectSchema } from "./SeguirUsuarioUncheckedCreateWithoutEstadoInput.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./SeguirUsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => SeguirUsuarioCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => SeguirUsuarioCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => SeguirUsuarioUncheckedCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => SeguirUsuarioUncheckedCreateWithoutEstadoInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => SeguirUsuarioCreateOrConnectWithoutEstadoInputObjectSchema), z.lazy(() => SeguirUsuarioCreateOrConnectWithoutEstadoInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => SeguirUsuarioCreateManyEstadoInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema), z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const SeguirUsuarioUncheckedCreateNestedManyWithoutEstadoInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioUncheckedCreateNestedManyWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioUncheckedCreateNestedManyWithoutEstadoInput>;
export const SeguirUsuarioUncheckedCreateNestedManyWithoutEstadoInputObjectZodSchema = makeSchema();
