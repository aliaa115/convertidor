import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { TipoCreateOrConnectWithoutComentariosInputObjectSchema as TipoCreateOrConnectWithoutComentariosInputObjectSchema } from "./TipoCreateOrConnectWithoutComentariosInput.schema.ts";
import { TipoCreateWithoutComentariosInputObjectSchema as TipoCreateWithoutComentariosInputObjectSchema } from "./TipoCreateWithoutComentariosInput.schema.ts";
import { TipoUncheckedCreateWithoutComentariosInputObjectSchema as TipoUncheckedCreateWithoutComentariosInputObjectSchema } from "./TipoUncheckedCreateWithoutComentariosInput.schema.ts";
import { TipoUncheckedUpdateWithoutComentariosInputObjectSchema as TipoUncheckedUpdateWithoutComentariosInputObjectSchema } from "./TipoUncheckedUpdateWithoutComentariosInput.schema.ts";
import { TipoUpdateToOneWithWhereWithoutComentariosInputObjectSchema as TipoUpdateToOneWithWhereWithoutComentariosInputObjectSchema } from "./TipoUpdateToOneWithWhereWithoutComentariosInput.schema.ts";
import { TipoUpdateWithoutComentariosInputObjectSchema as TipoUpdateWithoutComentariosInputObjectSchema } from "./TipoUpdateWithoutComentariosInput.schema.ts";
import { TipoUpsertWithoutComentariosInputObjectSchema as TipoUpsertWithoutComentariosInputObjectSchema } from "./TipoUpsertWithoutComentariosInput.schema.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./TipoWhereInput.schema.ts";
import { TipoWhereUniqueInputObjectSchema as TipoWhereUniqueInputObjectSchema } from "./TipoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => TipoCreateWithoutComentariosInputObjectSchema), z.lazy(() => TipoUncheckedCreateWithoutComentariosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => TipoCreateOrConnectWithoutComentariosInputObjectSchema).optional(),
			upsert: z.lazy(() => TipoUpsertWithoutComentariosInputObjectSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => TipoWhereInputObjectSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => TipoWhereInputObjectSchema)]).optional(),
			connect: z.lazy(() => TipoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => TipoUpdateToOneWithWhereWithoutComentariosInputObjectSchema),
					z.lazy(() => TipoUpdateWithoutComentariosInputObjectSchema),
					z.lazy(() => TipoUncheckedUpdateWithoutComentariosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const TipoUpdateOneWithoutComentariosNestedInputObjectSchema: z.ZodType<Prisma.TipoUpdateOneWithoutComentariosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoUpdateOneWithoutComentariosNestedInput>;
export const TipoUpdateOneWithoutComentariosNestedInputObjectZodSchema = makeSchema();
