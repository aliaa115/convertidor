import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { UsuarioUncheckedUpdateWithoutEscritorInputObjectSchema as UsuarioUncheckedUpdateWithoutEscritorInputObjectSchema } from "./UsuarioUncheckedUpdateWithoutEscritorInput.schema.ts";
import { UsuarioUpdateWithoutEscritorInputObjectSchema as UsuarioUpdateWithoutEscritorInputObjectSchema } from "./UsuarioUpdateWithoutEscritorInput.schema.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./UsuarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => UsuarioWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => UsuarioUpdateWithoutEscritorInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutEscritorInputObjectSchema)]),
		})
		.strict();
export const UsuarioUpdateToOneWithWhereWithoutEscritorInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateToOneWithWhereWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateToOneWithWhereWithoutEscritorInput>;
export const UsuarioUpdateToOneWithWhereWithoutEscritorInputObjectZodSchema = makeSchema();
