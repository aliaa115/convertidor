import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoUncheckedUpdateWithoutCapitulosInputObjectSchema as EstadoUncheckedUpdateWithoutCapitulosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutCapitulosInput.schema.ts";
import { EstadoUpdateWithoutCapitulosInputObjectSchema as EstadoUpdateWithoutCapitulosInputObjectSchema } from "./EstadoUpdateWithoutCapitulosInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => EstadoUpdateWithoutCapitulosInputObjectSchema), z.lazy(() => EstadoUncheckedUpdateWithoutCapitulosInputObjectSchema)]),
		})
		.strict();
export const EstadoUpdateToOneWithWhereWithoutCapitulosInputObjectSchema: z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutCapitulosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutCapitulosInput>;
export const EstadoUpdateToOneWithWhereWithoutCapitulosInputObjectZodSchema = makeSchema();
