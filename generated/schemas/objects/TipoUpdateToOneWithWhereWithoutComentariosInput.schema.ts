import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { TipoUncheckedUpdateWithoutComentariosInputObjectSchema as TipoUncheckedUpdateWithoutComentariosInputObjectSchema } from "./TipoUncheckedUpdateWithoutComentariosInput.schema.ts";
import { TipoUpdateWithoutComentariosInputObjectSchema as TipoUpdateWithoutComentariosInputObjectSchema } from "./TipoUpdateWithoutComentariosInput.schema.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./TipoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => TipoWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => TipoUpdateWithoutComentariosInputObjectSchema), z.lazy(() => TipoUncheckedUpdateWithoutComentariosInputObjectSchema)]),
		})
		.strict();
export const TipoUpdateToOneWithWhereWithoutComentariosInputObjectSchema: z.ZodType<Prisma.TipoUpdateToOneWithWhereWithoutComentariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoUpdateToOneWithWhereWithoutComentariosInput>;
export const TipoUpdateToOneWithWhereWithoutComentariosInputObjectZodSchema = makeSchema();
