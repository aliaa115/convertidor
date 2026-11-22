import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ParrafoCreateOrConnectWithoutMarcadoresInputObjectSchema as ParrafoCreateOrConnectWithoutMarcadoresInputObjectSchema } from "./ParrafoCreateOrConnectWithoutMarcadoresInput.schema.ts";
import { ParrafoCreateWithoutMarcadoresInputObjectSchema as ParrafoCreateWithoutMarcadoresInputObjectSchema } from "./ParrafoCreateWithoutMarcadoresInput.schema.ts";
import { ParrafoUncheckedCreateWithoutMarcadoresInputObjectSchema as ParrafoUncheckedCreateWithoutMarcadoresInputObjectSchema } from "./ParrafoUncheckedCreateWithoutMarcadoresInput.schema.ts";
import { ParrafoWhereUniqueInputObjectSchema as ParrafoWhereUniqueInputObjectSchema } from "./ParrafoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ParrafoCreateWithoutMarcadoresInputObjectSchema),
					z.lazy(
						() => ParrafoUncheckedCreateWithoutMarcadoresInputObjectSchema,
					),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => ParrafoCreateOrConnectWithoutMarcadoresInputObjectSchema)
				.optional(),
			connect: z.lazy(() => ParrafoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const ParrafoCreateNestedOneWithoutMarcadoresInputObjectSchema: z.ZodType<Prisma.ParrafoCreateNestedOneWithoutMarcadoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoCreateNestedOneWithoutMarcadoresInput>;
export const ParrafoCreateNestedOneWithoutMarcadoresInputObjectZodSchema =
	makeSchema();
