import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoUncheckedUpdateWithoutListaLibrosInputObjectSchema as EstadoUncheckedUpdateWithoutListaLibrosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutListaLibrosInput.schema.ts";
import { EstadoUpdateWithoutListaLibrosInputObjectSchema as EstadoUpdateWithoutListaLibrosInputObjectSchema } from "./EstadoUpdateWithoutListaLibrosInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => EstadoUpdateWithoutListaLibrosInputObjectSchema), z.lazy(() => EstadoUncheckedUpdateWithoutListaLibrosInputObjectSchema)]),
		})
		.strict();
export const EstadoUpdateToOneWithWhereWithoutListaLibrosInputObjectSchema: z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutListaLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutListaLibrosInput>;
export const EstadoUpdateToOneWithWhereWithoutListaLibrosInputObjectZodSchema = makeSchema();
