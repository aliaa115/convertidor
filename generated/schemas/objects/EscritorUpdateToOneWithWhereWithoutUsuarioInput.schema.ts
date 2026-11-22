import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorUncheckedUpdateWithoutUsuarioInputObjectSchema as EscritorUncheckedUpdateWithoutUsuarioInputObjectSchema } from "./EscritorUncheckedUpdateWithoutUsuarioInput.schema.ts";
import { EscritorUpdateWithoutUsuarioInputObjectSchema as EscritorUpdateWithoutUsuarioInputObjectSchema } from "./EscritorUpdateWithoutUsuarioInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => EscritorUpdateWithoutUsuarioInputObjectSchema),
				z.lazy(() => EscritorUncheckedUpdateWithoutUsuarioInputObjectSchema),
			]),
		})
		.strict();
export const EscritorUpdateToOneWithWhereWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.EscritorUpdateToOneWithWhereWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateToOneWithWhereWithoutUsuarioInput>;
export const EscritorUpdateToOneWithWhereWithoutUsuarioInputObjectZodSchema =
	makeSchema();
