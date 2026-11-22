import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { UsuarioCreateManyEstadoInputEnvelopeObjectSchema as UsuarioCreateManyEstadoInputEnvelopeObjectSchema } from "./UsuarioCreateManyEstadoInputEnvelope.schema.ts";
import { UsuarioCreateOrConnectWithoutEstadoInputObjectSchema as UsuarioCreateOrConnectWithoutEstadoInputObjectSchema } from "./UsuarioCreateOrConnectWithoutEstadoInput.schema.ts";
import { UsuarioCreateWithoutEstadoInputObjectSchema as UsuarioCreateWithoutEstadoInputObjectSchema } from "./UsuarioCreateWithoutEstadoInput.schema.ts";
import { UsuarioUncheckedCreateWithoutEstadoInputObjectSchema as UsuarioUncheckedCreateWithoutEstadoInputObjectSchema } from "./UsuarioUncheckedCreateWithoutEstadoInput.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./UsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => UsuarioCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => UsuarioCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => UsuarioUncheckedCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => UsuarioUncheckedCreateWithoutEstadoInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => UsuarioCreateOrConnectWithoutEstadoInputObjectSchema), z.lazy(() => UsuarioCreateOrConnectWithoutEstadoInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => UsuarioCreateManyEstadoInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => UsuarioWhereUniqueInputObjectSchema), z.lazy(() => UsuarioWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const UsuarioUncheckedCreateNestedManyWithoutEstadoInputObjectSchema: z.ZodType<Prisma.UsuarioUncheckedCreateNestedManyWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioUncheckedCreateNestedManyWithoutEstadoInput>;
export const UsuarioUncheckedCreateNestedManyWithoutEstadoInputObjectZodSchema = makeSchema();
