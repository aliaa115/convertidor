import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { UsuarioUncheckedUpdateWithoutListasInputObjectSchema as UsuarioUncheckedUpdateWithoutListasInputObjectSchema } from "./UsuarioUncheckedUpdateWithoutListasInput.schema.ts";
import { UsuarioUpdateWithoutListasInputObjectSchema as UsuarioUpdateWithoutListasInputObjectSchema } from "./UsuarioUpdateWithoutListasInput.schema.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./UsuarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => UsuarioWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => UsuarioUpdateWithoutListasInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutListasInputObjectSchema)]),
		})
		.strict();
export const UsuarioUpdateToOneWithWhereWithoutListasInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateToOneWithWhereWithoutListasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateToOneWithWhereWithoutListasInput>;
export const UsuarioUpdateToOneWithWhereWithoutListasInputObjectZodSchema = makeSchema();
