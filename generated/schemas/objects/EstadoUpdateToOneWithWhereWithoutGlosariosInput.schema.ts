import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoUncheckedUpdateWithoutGlosariosInputObjectSchema as EstadoUncheckedUpdateWithoutGlosariosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutGlosariosInput.schema.ts";
import { EstadoUpdateWithoutGlosariosInputObjectSchema as EstadoUpdateWithoutGlosariosInputObjectSchema } from "./EstadoUpdateWithoutGlosariosInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => EstadoUpdateWithoutGlosariosInputObjectSchema),
				z.lazy(() => EstadoUncheckedUpdateWithoutGlosariosInputObjectSchema),
			]),
		})
		.strict();
export const EstadoUpdateToOneWithWhereWithoutGlosariosInputObjectSchema: z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutGlosariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutGlosariosInput>;
export const EstadoUpdateToOneWithWhereWithoutGlosariosInputObjectZodSchema =
	makeSchema();
