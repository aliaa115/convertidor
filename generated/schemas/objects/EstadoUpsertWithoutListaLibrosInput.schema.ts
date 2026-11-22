import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutListaLibrosInputObjectSchema as EstadoCreateWithoutListaLibrosInputObjectSchema } from "./EstadoCreateWithoutListaLibrosInput.schema.ts";
import { EstadoUncheckedCreateWithoutListaLibrosInputObjectSchema as EstadoUncheckedCreateWithoutListaLibrosInputObjectSchema } from "./EstadoUncheckedCreateWithoutListaLibrosInput.schema.ts";
import { EstadoUncheckedUpdateWithoutListaLibrosInputObjectSchema as EstadoUncheckedUpdateWithoutListaLibrosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutListaLibrosInput.schema.ts";
import { EstadoUpdateWithoutListaLibrosInputObjectSchema as EstadoUpdateWithoutListaLibrosInputObjectSchema } from "./EstadoUpdateWithoutListaLibrosInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => EstadoUpdateWithoutListaLibrosInputObjectSchema),
				z.lazy(() => EstadoUncheckedUpdateWithoutListaLibrosInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutListaLibrosInputObjectSchema),
				z.lazy(() => EstadoUncheckedCreateWithoutListaLibrosInputObjectSchema),
			]),
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoUpsertWithoutListaLibrosInputObjectSchema: z.ZodType<Prisma.EstadoUpsertWithoutListaLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpsertWithoutListaLibrosInput>;
export const EstadoUpsertWithoutListaLibrosInputObjectZodSchema = makeSchema();
