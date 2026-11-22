import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ParrafoCreateWithoutMarcadoresInputObjectSchema as ParrafoCreateWithoutMarcadoresInputObjectSchema } from "./ParrafoCreateWithoutMarcadoresInput.schema.ts";
import { ParrafoUncheckedCreateWithoutMarcadoresInputObjectSchema as ParrafoUncheckedCreateWithoutMarcadoresInputObjectSchema } from "./ParrafoUncheckedCreateWithoutMarcadoresInput.schema.ts";
import { ParrafoWhereUniqueInputObjectSchema as ParrafoWhereUniqueInputObjectSchema } from "./ParrafoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ParrafoWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => ParrafoCreateWithoutMarcadoresInputObjectSchema),
				z.lazy(() => ParrafoUncheckedCreateWithoutMarcadoresInputObjectSchema),
			]),
		})
		.strict();
export const ParrafoCreateOrConnectWithoutMarcadoresInputObjectSchema: z.ZodType<Prisma.ParrafoCreateOrConnectWithoutMarcadoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoCreateOrConnectWithoutMarcadoresInput>;
export const ParrafoCreateOrConnectWithoutMarcadoresInputObjectZodSchema =
	makeSchema();
