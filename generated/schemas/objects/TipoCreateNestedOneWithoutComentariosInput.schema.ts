import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { TipoCreateOrConnectWithoutComentariosInputObjectSchema as TipoCreateOrConnectWithoutComentariosInputObjectSchema } from "./TipoCreateOrConnectWithoutComentariosInput.schema.ts";
import { TipoCreateWithoutComentariosInputObjectSchema as TipoCreateWithoutComentariosInputObjectSchema } from "./TipoCreateWithoutComentariosInput.schema.ts";
import { TipoUncheckedCreateWithoutComentariosInputObjectSchema as TipoUncheckedCreateWithoutComentariosInputObjectSchema } from "./TipoUncheckedCreateWithoutComentariosInput.schema.ts";
import { TipoWhereUniqueInputObjectSchema as TipoWhereUniqueInputObjectSchema } from "./TipoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => TipoCreateWithoutComentariosInputObjectSchema), z.lazy(() => TipoUncheckedCreateWithoutComentariosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => TipoCreateOrConnectWithoutComentariosInputObjectSchema).optional(),
			connect: z.lazy(() => TipoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const TipoCreateNestedOneWithoutComentariosInputObjectSchema: z.ZodType<Prisma.TipoCreateNestedOneWithoutComentariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoCreateNestedOneWithoutComentariosInput>;
export const TipoCreateNestedOneWithoutComentariosInputObjectZodSchema = makeSchema();
