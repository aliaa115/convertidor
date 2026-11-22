import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaUncheckedUpdateWithoutLibrosInputObjectSchema as ListaUncheckedUpdateWithoutLibrosInputObjectSchema } from "./ListaUncheckedUpdateWithoutLibrosInput.schema.ts";
import { ListaUpdateWithoutLibrosInputObjectSchema as ListaUpdateWithoutLibrosInputObjectSchema } from "./ListaUpdateWithoutLibrosInput.schema.ts";
import { ListaWhereInputObjectSchema as ListaWhereInputObjectSchema } from "./ListaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => ListaUpdateWithoutLibrosInputObjectSchema), z.lazy(() => ListaUncheckedUpdateWithoutLibrosInputObjectSchema)]),
		})
		.strict();
export const ListaUpdateToOneWithWhereWithoutLibrosInputObjectSchema: z.ZodType<Prisma.ListaUpdateToOneWithWhereWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaUpdateToOneWithWhereWithoutLibrosInput>;
export const ListaUpdateToOneWithWhereWithoutLibrosInputObjectZodSchema = makeSchema();
