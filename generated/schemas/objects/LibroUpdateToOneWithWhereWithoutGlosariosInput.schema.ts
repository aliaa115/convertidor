import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroUncheckedUpdateWithoutGlosariosInputObjectSchema as LibroUncheckedUpdateWithoutGlosariosInputObjectSchema } from "./LibroUncheckedUpdateWithoutGlosariosInput.schema.ts";
import { LibroUpdateWithoutGlosariosInputObjectSchema as LibroUpdateWithoutGlosariosInputObjectSchema } from "./LibroUpdateWithoutGlosariosInput.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => LibroUpdateWithoutGlosariosInputObjectSchema),
				z.lazy(() => LibroUncheckedUpdateWithoutGlosariosInputObjectSchema),
			]),
		})
		.strict();
export const LibroUpdateToOneWithWhereWithoutGlosariosInputObjectSchema: z.ZodType<Prisma.LibroUpdateToOneWithWhereWithoutGlosariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateToOneWithWhereWithoutGlosariosInput>;
export const LibroUpdateToOneWithWhereWithoutGlosariosInputObjectZodSchema =
	makeSchema();
