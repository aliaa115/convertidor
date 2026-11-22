import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoUncheckedUpdateWithoutListasInputObjectSchema as EstadoUncheckedUpdateWithoutListasInputObjectSchema } from "./EstadoUncheckedUpdateWithoutListasInput.schema.ts";
import { EstadoUpdateWithoutListasInputObjectSchema as EstadoUpdateWithoutListasInputObjectSchema } from "./EstadoUpdateWithoutListasInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => EstadoUpdateWithoutListasInputObjectSchema), z.lazy(() => EstadoUncheckedUpdateWithoutListasInputObjectSchema)]),
		})
		.strict();
export const EstadoUpdateToOneWithWhereWithoutListasInputObjectSchema: z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutListasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutListasInput>;
export const EstadoUpdateToOneWithWhereWithoutListasInputObjectZodSchema = makeSchema();
