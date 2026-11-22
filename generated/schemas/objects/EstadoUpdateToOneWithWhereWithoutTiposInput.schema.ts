import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoUncheckedUpdateWithoutTiposInputObjectSchema as EstadoUncheckedUpdateWithoutTiposInputObjectSchema } from "./EstadoUncheckedUpdateWithoutTiposInput.schema.ts";
import { EstadoUpdateWithoutTiposInputObjectSchema as EstadoUpdateWithoutTiposInputObjectSchema } from "./EstadoUpdateWithoutTiposInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => EstadoUpdateWithoutTiposInputObjectSchema), z.lazy(() => EstadoUncheckedUpdateWithoutTiposInputObjectSchema)]),
		})
		.strict();
export const EstadoUpdateToOneWithWhereWithoutTiposInputObjectSchema: z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutTiposInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutTiposInput>;
export const EstadoUpdateToOneWithWhereWithoutTiposInputObjectZodSchema = makeSchema();
