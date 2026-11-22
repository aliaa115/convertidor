import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoUncheckedUpdateWithoutMarcadoresInputObjectSchema as EstadoUncheckedUpdateWithoutMarcadoresInputObjectSchema } from "./EstadoUncheckedUpdateWithoutMarcadoresInput.schema.ts";
import { EstadoUpdateWithoutMarcadoresInputObjectSchema as EstadoUpdateWithoutMarcadoresInputObjectSchema } from "./EstadoUpdateWithoutMarcadoresInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => EstadoUpdateWithoutMarcadoresInputObjectSchema), z.lazy(() => EstadoUncheckedUpdateWithoutMarcadoresInputObjectSchema)]),
		})
		.strict();
export const EstadoUpdateToOneWithWhereWithoutMarcadoresInputObjectSchema: z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutMarcadoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutMarcadoresInput>;
export const EstadoUpdateToOneWithWhereWithoutMarcadoresInputObjectZodSchema = makeSchema();
