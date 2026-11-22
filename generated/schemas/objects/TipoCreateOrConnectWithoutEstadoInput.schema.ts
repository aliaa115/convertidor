import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { TipoCreateWithoutEstadoInputObjectSchema as TipoCreateWithoutEstadoInputObjectSchema } from "./TipoCreateWithoutEstadoInput.schema.ts";
import { TipoUncheckedCreateWithoutEstadoInputObjectSchema as TipoUncheckedCreateWithoutEstadoInputObjectSchema } from "./TipoUncheckedCreateWithoutEstadoInput.schema.ts";
import { TipoWhereUniqueInputObjectSchema as TipoWhereUniqueInputObjectSchema } from "./TipoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => TipoWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => TipoCreateWithoutEstadoInputObjectSchema),
				z.lazy(() => TipoUncheckedCreateWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const TipoCreateOrConnectWithoutEstadoInputObjectSchema: z.ZodType<Prisma.TipoCreateOrConnectWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoCreateOrConnectWithoutEstadoInput>;
export const TipoCreateOrConnectWithoutEstadoInputObjectZodSchema =
	makeSchema();
