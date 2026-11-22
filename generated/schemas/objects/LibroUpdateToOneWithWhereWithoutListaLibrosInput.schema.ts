import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroUncheckedUpdateWithoutListaLibrosInputObjectSchema as LibroUncheckedUpdateWithoutListaLibrosInputObjectSchema } from "./LibroUncheckedUpdateWithoutListaLibrosInput.schema.ts";
import { LibroUpdateWithoutListaLibrosInputObjectSchema as LibroUpdateWithoutListaLibrosInputObjectSchema } from "./LibroUpdateWithoutListaLibrosInput.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => LibroUpdateWithoutListaLibrosInputObjectSchema), z.lazy(() => LibroUncheckedUpdateWithoutListaLibrosInputObjectSchema)]),
		})
		.strict();
export const LibroUpdateToOneWithWhereWithoutListaLibrosInputObjectSchema: z.ZodType<Prisma.LibroUpdateToOneWithWhereWithoutListaLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateToOneWithWhereWithoutListaLibrosInput>;
export const LibroUpdateToOneWithWhereWithoutListaLibrosInputObjectZodSchema = makeSchema();
