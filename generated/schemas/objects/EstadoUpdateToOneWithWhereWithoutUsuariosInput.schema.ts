import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoUncheckedUpdateWithoutUsuariosInputObjectSchema as EstadoUncheckedUpdateWithoutUsuariosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutUsuariosInput.schema.ts";
import { EstadoUpdateWithoutUsuariosInputObjectSchema as EstadoUpdateWithoutUsuariosInputObjectSchema } from "./EstadoUpdateWithoutUsuariosInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => EstadoUpdateWithoutUsuariosInputObjectSchema),
				z.lazy(() => EstadoUncheckedUpdateWithoutUsuariosInputObjectSchema),
			]),
		})
		.strict();
export const EstadoUpdateToOneWithWhereWithoutUsuariosInputObjectSchema: z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutUsuariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutUsuariosInput>;
export const EstadoUpdateToOneWithWhereWithoutUsuariosInputObjectZodSchema =
	makeSchema();
