import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { TipoUncheckedUpdateWithoutLibrosInputObjectSchema as TipoUncheckedUpdateWithoutLibrosInputObjectSchema } from "./TipoUncheckedUpdateWithoutLibrosInput.schema.ts";
import { TipoUpdateWithoutLibrosInputObjectSchema as TipoUpdateWithoutLibrosInputObjectSchema } from "./TipoUpdateWithoutLibrosInput.schema.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./TipoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => TipoWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => TipoUpdateWithoutLibrosInputObjectSchema), z.lazy(() => TipoUncheckedUpdateWithoutLibrosInputObjectSchema)]),
		})
		.strict();
export const TipoUpdateToOneWithWhereWithoutLibrosInputObjectSchema: z.ZodType<Prisma.TipoUpdateToOneWithWhereWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoUpdateToOneWithWhereWithoutLibrosInput>;
export const TipoUpdateToOneWithWhereWithoutLibrosInputObjectZodSchema = makeSchema();
