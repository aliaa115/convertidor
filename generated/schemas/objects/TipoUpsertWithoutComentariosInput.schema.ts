import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { TipoCreateWithoutComentariosInputObjectSchema as TipoCreateWithoutComentariosInputObjectSchema } from "./TipoCreateWithoutComentariosInput.schema.ts";
import { TipoUncheckedCreateWithoutComentariosInputObjectSchema as TipoUncheckedCreateWithoutComentariosInputObjectSchema } from "./TipoUncheckedCreateWithoutComentariosInput.schema.ts";
import { TipoUncheckedUpdateWithoutComentariosInputObjectSchema as TipoUncheckedUpdateWithoutComentariosInputObjectSchema } from "./TipoUncheckedUpdateWithoutComentariosInput.schema.ts";
import { TipoUpdateWithoutComentariosInputObjectSchema as TipoUpdateWithoutComentariosInputObjectSchema } from "./TipoUpdateWithoutComentariosInput.schema.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./TipoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => TipoUpdateWithoutComentariosInputObjectSchema), z.lazy(() => TipoUncheckedUpdateWithoutComentariosInputObjectSchema)]),
			create: z.union([z.lazy(() => TipoCreateWithoutComentariosInputObjectSchema), z.lazy(() => TipoUncheckedCreateWithoutComentariosInputObjectSchema)]),
			where: z.lazy(() => TipoWhereInputObjectSchema).optional(),
		})
		.strict();
export const TipoUpsertWithoutComentariosInputObjectSchema: z.ZodType<Prisma.TipoUpsertWithoutComentariosInput> = makeSchema() as unknown as z.ZodType<Prisma.TipoUpsertWithoutComentariosInput>;
export const TipoUpsertWithoutComentariosInputObjectZodSchema = makeSchema();
