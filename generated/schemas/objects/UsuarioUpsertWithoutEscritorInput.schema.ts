import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { UsuarioCreateWithoutEscritorInputObjectSchema as UsuarioCreateWithoutEscritorInputObjectSchema } from "./UsuarioCreateWithoutEscritorInput.schema.ts";
import { UsuarioUncheckedCreateWithoutEscritorInputObjectSchema as UsuarioUncheckedCreateWithoutEscritorInputObjectSchema } from "./UsuarioUncheckedCreateWithoutEscritorInput.schema.ts";
import { UsuarioUncheckedUpdateWithoutEscritorInputObjectSchema as UsuarioUncheckedUpdateWithoutEscritorInputObjectSchema } from "./UsuarioUncheckedUpdateWithoutEscritorInput.schema.ts";
import { UsuarioUpdateWithoutEscritorInputObjectSchema as UsuarioUpdateWithoutEscritorInputObjectSchema } from "./UsuarioUpdateWithoutEscritorInput.schema.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./UsuarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => UsuarioUpdateWithoutEscritorInputObjectSchema),
				z.lazy(() => UsuarioUncheckedUpdateWithoutEscritorInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => UsuarioCreateWithoutEscritorInputObjectSchema),
				z.lazy(() => UsuarioUncheckedCreateWithoutEscritorInputObjectSchema),
			]),
			where: z.lazy(() => UsuarioWhereInputObjectSchema).optional(),
		})
		.strict();
export const UsuarioUpsertWithoutEscritorInputObjectSchema: z.ZodType<Prisma.UsuarioUpsertWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpsertWithoutEscritorInput>;
export const UsuarioUpsertWithoutEscritorInputObjectZodSchema = makeSchema();
