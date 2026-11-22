import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { FavoritoScalarWhereInputObjectSchema as FavoritoScalarWhereInputObjectSchema } from "./FavoritoScalarWhereInput.schema.ts";
import { FavoritoUncheckedUpdateManyWithoutEstadoInputObjectSchema as FavoritoUncheckedUpdateManyWithoutEstadoInputObjectSchema } from "./FavoritoUncheckedUpdateManyWithoutEstadoInput.schema.ts";
import { FavoritoUpdateManyMutationInputObjectSchema as FavoritoUpdateManyMutationInputObjectSchema } from "./FavoritoUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => FavoritoScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => FavoritoUpdateManyMutationInputObjectSchema),
				z.lazy(() => FavoritoUncheckedUpdateManyWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const FavoritoUpdateManyWithWhereWithoutEstadoInputObjectSchema: z.ZodType<Prisma.FavoritoUpdateManyWithWhereWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoUpdateManyWithWhereWithoutEstadoInput>;
export const FavoritoUpdateManyWithWhereWithoutEstadoInputObjectZodSchema =
	makeSchema();
