import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ParrafoCreateWithoutCapituloInputObjectSchema as ParrafoCreateWithoutCapituloInputObjectSchema } from "./ParrafoCreateWithoutCapituloInput.schema.ts";
import { ParrafoUncheckedCreateWithoutCapituloInputObjectSchema as ParrafoUncheckedCreateWithoutCapituloInputObjectSchema } from "./ParrafoUncheckedCreateWithoutCapituloInput.schema.ts";
import { ParrafoWhereUniqueInputObjectSchema as ParrafoWhereUniqueInputObjectSchema } from "./ParrafoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ParrafoWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => ParrafoCreateWithoutCapituloInputObjectSchema), z.lazy(() => ParrafoUncheckedCreateWithoutCapituloInputObjectSchema)]),
		})
		.strict();
export const ParrafoCreateOrConnectWithoutCapituloInputObjectSchema: z.ZodType<Prisma.ParrafoCreateOrConnectWithoutCapituloInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoCreateOrConnectWithoutCapituloInput>;
export const ParrafoCreateOrConnectWithoutCapituloInputObjectZodSchema = makeSchema();
