import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ParrafoCreateWithoutEstadoInputObjectSchema as ParrafoCreateWithoutEstadoInputObjectSchema } from "./ParrafoCreateWithoutEstadoInput.schema.ts";
import { ParrafoUncheckedCreateWithoutEstadoInputObjectSchema as ParrafoUncheckedCreateWithoutEstadoInputObjectSchema } from "./ParrafoUncheckedCreateWithoutEstadoInput.schema.ts";
import { ParrafoWhereUniqueInputObjectSchema as ParrafoWhereUniqueInputObjectSchema } from "./ParrafoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ParrafoWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => ParrafoCreateWithoutEstadoInputObjectSchema), z.lazy(() => ParrafoUncheckedCreateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const ParrafoCreateOrConnectWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ParrafoCreateOrConnectWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoCreateOrConnectWithoutEstadoInput>;
export const ParrafoCreateOrConnectWithoutEstadoInputObjectZodSchema = makeSchema();
