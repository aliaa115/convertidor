import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { IdiomaCreateWithoutLibrosInputObjectSchema as IdiomaCreateWithoutLibrosInputObjectSchema } from "./IdiomaCreateWithoutLibrosInput.schema.ts";
import { IdiomaUncheckedCreateWithoutLibrosInputObjectSchema as IdiomaUncheckedCreateWithoutLibrosInputObjectSchema } from "./IdiomaUncheckedCreateWithoutLibrosInput.schema.ts";
import { IdiomaWhereUniqueInputObjectSchema as IdiomaWhereUniqueInputObjectSchema } from "./IdiomaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => IdiomaWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => IdiomaCreateWithoutLibrosInputObjectSchema), z.lazy(() => IdiomaUncheckedCreateWithoutLibrosInputObjectSchema)]),
		})
		.strict();
export const IdiomaCreateOrConnectWithoutLibrosInputObjectSchema: z.ZodType<Prisma.IdiomaCreateOrConnectWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaCreateOrConnectWithoutLibrosInput>;
export const IdiomaCreateOrConnectWithoutLibrosInputObjectZodSchema = makeSchema();
