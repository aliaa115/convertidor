import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CategoriaCreateWithoutEstadoInputObjectSchema as CategoriaCreateWithoutEstadoInputObjectSchema } from "./CategoriaCreateWithoutEstadoInput.schema.ts";
import { CategoriaUncheckedCreateWithoutEstadoInputObjectSchema as CategoriaUncheckedCreateWithoutEstadoInputObjectSchema } from "./CategoriaUncheckedCreateWithoutEstadoInput.schema.ts";
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from "./CategoriaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => CategoriaWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => CategoriaCreateWithoutEstadoInputObjectSchema),
				z.lazy(() => CategoriaUncheckedCreateWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const CategoriaCreateOrConnectWithoutEstadoInputObjectSchema: z.ZodType<Prisma.CategoriaCreateOrConnectWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaCreateOrConnectWithoutEstadoInput>;
export const CategoriaCreateOrConnectWithoutEstadoInputObjectZodSchema =
	makeSchema();
