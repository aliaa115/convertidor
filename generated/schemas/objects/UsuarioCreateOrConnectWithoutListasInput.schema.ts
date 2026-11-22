import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { UsuarioCreateWithoutListasInputObjectSchema as UsuarioCreateWithoutListasInputObjectSchema } from "./UsuarioCreateWithoutListasInput.schema.ts";
import { UsuarioUncheckedCreateWithoutListasInputObjectSchema as UsuarioUncheckedCreateWithoutListasInputObjectSchema } from "./UsuarioUncheckedCreateWithoutListasInput.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./UsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => UsuarioCreateWithoutListasInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutListasInputObjectSchema)]),
		})
		.strict();
export const UsuarioCreateOrConnectWithoutListasInputObjectSchema: z.ZodType<Prisma.UsuarioCreateOrConnectWithoutListasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateOrConnectWithoutListasInput>;
export const UsuarioCreateOrConnectWithoutListasInputObjectZodSchema = makeSchema();
