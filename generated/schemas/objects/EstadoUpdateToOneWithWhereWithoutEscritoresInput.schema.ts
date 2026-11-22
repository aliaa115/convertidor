import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoUncheckedUpdateWithoutEscritoresInputObjectSchema as EstadoUncheckedUpdateWithoutEscritoresInputObjectSchema } from "./EstadoUncheckedUpdateWithoutEscritoresInput.schema.ts";
import { EstadoUpdateWithoutEscritoresInputObjectSchema as EstadoUpdateWithoutEscritoresInputObjectSchema } from "./EstadoUpdateWithoutEscritoresInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => EstadoUpdateWithoutEscritoresInputObjectSchema), z.lazy(() => EstadoUncheckedUpdateWithoutEscritoresInputObjectSchema)]),
		})
		.strict();
export const EstadoUpdateToOneWithWhereWithoutEscritoresInputObjectSchema: z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutEscritoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutEscritoresInput>;
export const EstadoUpdateToOneWithWhereWithoutEscritoresInputObjectZodSchema = makeSchema();
