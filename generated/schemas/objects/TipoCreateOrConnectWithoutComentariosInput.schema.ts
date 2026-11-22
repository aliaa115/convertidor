import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { TipoCreateWithoutComentariosInputObjectSchema as TipoCreateWithoutComentariosInputObjectSchema } from "./TipoCreateWithoutComentariosInput.schema.ts";
import { TipoUncheckedCreateWithoutComentariosInputObjectSchema as TipoUncheckedCreateWithoutComentariosInputObjectSchema } from "./TipoUncheckedCreateWithoutComentariosInput.schema.ts";
import { TipoWhereUniqueInputObjectSchema as TipoWhereUniqueInputObjectSchema } from "./TipoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => TipoWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => TipoCreateWithoutComentariosInputObjectSchema),
				z.lazy(() => TipoUncheckedCreateWithoutComentariosInputObjectSchema),
			]),
		})
		.strict();
export const TipoCreateOrConnectWithoutComentariosInputObjectSchema: z.ZodType<Prisma.TipoCreateOrConnectWithoutComentariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoCreateOrConnectWithoutComentariosInput>;
export const TipoCreateOrConnectWithoutComentariosInputObjectZodSchema =
	makeSchema();
