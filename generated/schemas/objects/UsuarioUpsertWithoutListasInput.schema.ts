import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { UsuarioCreateWithoutListasInputObjectSchema as UsuarioCreateWithoutListasInputObjectSchema } from "./UsuarioCreateWithoutListasInput.schema.ts";
import { UsuarioUncheckedCreateWithoutListasInputObjectSchema as UsuarioUncheckedCreateWithoutListasInputObjectSchema } from "./UsuarioUncheckedCreateWithoutListasInput.schema.ts";
import { UsuarioUncheckedUpdateWithoutListasInputObjectSchema as UsuarioUncheckedUpdateWithoutListasInputObjectSchema } from "./UsuarioUncheckedUpdateWithoutListasInput.schema.ts";
import { UsuarioUpdateWithoutListasInputObjectSchema as UsuarioUpdateWithoutListasInputObjectSchema } from "./UsuarioUpdateWithoutListasInput.schema.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./UsuarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => UsuarioUpdateWithoutListasInputObjectSchema),
				z.lazy(() => UsuarioUncheckedUpdateWithoutListasInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => UsuarioCreateWithoutListasInputObjectSchema),
				z.lazy(() => UsuarioUncheckedCreateWithoutListasInputObjectSchema),
			]),
			where: z.lazy(() => UsuarioWhereInputObjectSchema).optional(),
		})
		.strict();
export const UsuarioUpsertWithoutListasInputObjectSchema: z.ZodType<Prisma.UsuarioUpsertWithoutListasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpsertWithoutListasInput>;
export const UsuarioUpsertWithoutListasInputObjectZodSchema = makeSchema();
