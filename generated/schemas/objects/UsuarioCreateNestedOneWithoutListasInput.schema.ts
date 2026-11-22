import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { UsuarioCreateOrConnectWithoutListasInputObjectSchema as UsuarioCreateOrConnectWithoutListasInputObjectSchema } from "./UsuarioCreateOrConnectWithoutListasInput.schema.ts";
import { UsuarioCreateWithoutListasInputObjectSchema as UsuarioCreateWithoutListasInputObjectSchema } from "./UsuarioCreateWithoutListasInput.schema.ts";
import { UsuarioUncheckedCreateWithoutListasInputObjectSchema as UsuarioUncheckedCreateWithoutListasInputObjectSchema } from "./UsuarioUncheckedCreateWithoutListasInput.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./UsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => UsuarioCreateWithoutListasInputObjectSchema),
					z.lazy(() => UsuarioUncheckedCreateWithoutListasInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => UsuarioCreateOrConnectWithoutListasInputObjectSchema)
				.optional(),
			connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const UsuarioCreateNestedOneWithoutListasInputObjectSchema: z.ZodType<Prisma.UsuarioCreateNestedOneWithoutListasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateNestedOneWithoutListasInput>;
export const UsuarioCreateNestedOneWithoutListasInputObjectZodSchema =
	makeSchema();
