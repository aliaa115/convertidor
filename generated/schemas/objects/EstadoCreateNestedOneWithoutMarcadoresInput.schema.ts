import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateOrConnectWithoutMarcadoresInputObjectSchema as EstadoCreateOrConnectWithoutMarcadoresInputObjectSchema } from "./EstadoCreateOrConnectWithoutMarcadoresInput.schema.ts";
import { EstadoCreateWithoutMarcadoresInputObjectSchema as EstadoCreateWithoutMarcadoresInputObjectSchema } from "./EstadoCreateWithoutMarcadoresInput.schema.ts";
import { EstadoUncheckedCreateWithoutMarcadoresInputObjectSchema as EstadoUncheckedCreateWithoutMarcadoresInputObjectSchema } from "./EstadoUncheckedCreateWithoutMarcadoresInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EstadoCreateWithoutMarcadoresInputObjectSchema),
					z.lazy(() => EstadoUncheckedCreateWithoutMarcadoresInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EstadoCreateOrConnectWithoutMarcadoresInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCreateNestedOneWithoutMarcadoresInputObjectSchema: z.ZodType<Prisma.EstadoCreateNestedOneWithoutMarcadoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateNestedOneWithoutMarcadoresInput>;
export const EstadoCreateNestedOneWithoutMarcadoresInputObjectZodSchema =
	makeSchema();
