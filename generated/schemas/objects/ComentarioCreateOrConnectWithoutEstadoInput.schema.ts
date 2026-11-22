import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioCreateWithoutEstadoInputObjectSchema as ComentarioCreateWithoutEstadoInputObjectSchema } from "./ComentarioCreateWithoutEstadoInput.schema.ts";
import { ComentarioUncheckedCreateWithoutEstadoInputObjectSchema as ComentarioUncheckedCreateWithoutEstadoInputObjectSchema } from "./ComentarioUncheckedCreateWithoutEstadoInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => ComentarioCreateWithoutEstadoInputObjectSchema),
				z.lazy(() => ComentarioUncheckedCreateWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const ComentarioCreateOrConnectWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ComentarioCreateOrConnectWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioCreateOrConnectWithoutEstadoInput>;
export const ComentarioCreateOrConnectWithoutEstadoInputObjectZodSchema =
	makeSchema();
