import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CategoriaCreateWithoutLibrosInputObjectSchema as CategoriaCreateWithoutLibrosInputObjectSchema } from "./CategoriaCreateWithoutLibrosInput.schema.ts";
import { CategoriaUncheckedCreateWithoutLibrosInputObjectSchema as CategoriaUncheckedCreateWithoutLibrosInputObjectSchema } from "./CategoriaUncheckedCreateWithoutLibrosInput.schema.ts";
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from "./CategoriaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => CategoriaWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => CategoriaCreateWithoutLibrosInputObjectSchema),
				z.lazy(() => CategoriaUncheckedCreateWithoutLibrosInputObjectSchema),
			]),
		})
		.strict();
export const CategoriaCreateOrConnectWithoutLibrosInputObjectSchema: z.ZodType<Prisma.CategoriaCreateOrConnectWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaCreateOrConnectWithoutLibrosInput>;
export const CategoriaCreateOrConnectWithoutLibrosInputObjectZodSchema =
	makeSchema();
