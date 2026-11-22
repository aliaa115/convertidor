import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { TipoScalarWhereInputObjectSchema as TipoScalarWhereInputObjectSchema } from "./TipoScalarWhereInput.schema.ts";
import { TipoUncheckedUpdateManyWithoutEstadoInputObjectSchema as TipoUncheckedUpdateManyWithoutEstadoInputObjectSchema } from "./TipoUncheckedUpdateManyWithoutEstadoInput.schema.ts";
import { TipoUpdateManyMutationInputObjectSchema as TipoUpdateManyMutationInputObjectSchema } from "./TipoUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => TipoScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => TipoUpdateManyMutationInputObjectSchema), z.lazy(() => TipoUncheckedUpdateManyWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const TipoUpdateManyWithWhereWithoutEstadoInputObjectSchema: z.ZodType<Prisma.TipoUpdateManyWithWhereWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoUpdateManyWithWhereWithoutEstadoInput>;
export const TipoUpdateManyWithWhereWithoutEstadoInputObjectZodSchema = makeSchema();
