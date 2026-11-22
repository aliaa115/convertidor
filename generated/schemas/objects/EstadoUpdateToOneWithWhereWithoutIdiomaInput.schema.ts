import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoUncheckedUpdateWithoutIdiomaInputObjectSchema as EstadoUncheckedUpdateWithoutIdiomaInputObjectSchema } from "./EstadoUncheckedUpdateWithoutIdiomaInput.schema.ts";
import { EstadoUpdateWithoutIdiomaInputObjectSchema as EstadoUpdateWithoutIdiomaInputObjectSchema } from "./EstadoUpdateWithoutIdiomaInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => EstadoUpdateWithoutIdiomaInputObjectSchema),
				z.lazy(() => EstadoUncheckedUpdateWithoutIdiomaInputObjectSchema),
			]),
		})
		.strict();
export const EstadoUpdateToOneWithWhereWithoutIdiomaInputObjectSchema: z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutIdiomaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutIdiomaInput>;
export const EstadoUpdateToOneWithWhereWithoutIdiomaInputObjectZodSchema =
	makeSchema();
