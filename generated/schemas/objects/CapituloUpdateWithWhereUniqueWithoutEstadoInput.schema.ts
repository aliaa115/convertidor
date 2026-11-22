import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloUncheckedUpdateWithoutEstadoInputObjectSchema as CapituloUncheckedUpdateWithoutEstadoInputObjectSchema } from "./CapituloUncheckedUpdateWithoutEstadoInput.schema.ts";
import { CapituloUpdateWithoutEstadoInputObjectSchema as CapituloUpdateWithoutEstadoInputObjectSchema } from "./CapituloUpdateWithoutEstadoInput.schema.ts";
import { CapituloWhereUniqueInputObjectSchema as CapituloWhereUniqueInputObjectSchema } from "./CapituloWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => CapituloWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => CapituloUpdateWithoutEstadoInputObjectSchema),
				z.lazy(() => CapituloUncheckedUpdateWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const CapituloUpdateWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.CapituloUpdateWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloUpdateWithWhereUniqueWithoutEstadoInput>;
export const CapituloUpdateWithWhereUniqueWithoutEstadoInputObjectZodSchema =
	makeSchema();
