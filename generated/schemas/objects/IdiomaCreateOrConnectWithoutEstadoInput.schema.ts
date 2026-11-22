import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { IdiomaCreateWithoutEstadoInputObjectSchema as IdiomaCreateWithoutEstadoInputObjectSchema } from "./IdiomaCreateWithoutEstadoInput.schema.ts";
import { IdiomaUncheckedCreateWithoutEstadoInputObjectSchema as IdiomaUncheckedCreateWithoutEstadoInputObjectSchema } from "./IdiomaUncheckedCreateWithoutEstadoInput.schema.ts";
import { IdiomaWhereUniqueInputObjectSchema as IdiomaWhereUniqueInputObjectSchema } from "./IdiomaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => IdiomaWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => IdiomaCreateWithoutEstadoInputObjectSchema), z.lazy(() => IdiomaUncheckedCreateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const IdiomaCreateOrConnectWithoutEstadoInputObjectSchema: z.ZodType<Prisma.IdiomaCreateOrConnectWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaCreateOrConnectWithoutEstadoInput>;
export const IdiomaCreateOrConnectWithoutEstadoInputObjectZodSchema = makeSchema();
