import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateOrConnectWithoutEscritoresInputObjectSchema as EstadoCreateOrConnectWithoutEscritoresInputObjectSchema } from "./EstadoCreateOrConnectWithoutEscritoresInput.schema.ts";
import { EstadoCreateWithoutEscritoresInputObjectSchema as EstadoCreateWithoutEscritoresInputObjectSchema } from "./EstadoCreateWithoutEscritoresInput.schema.ts";
import { EstadoUncheckedCreateWithoutEscritoresInputObjectSchema as EstadoUncheckedCreateWithoutEscritoresInputObjectSchema } from "./EstadoUncheckedCreateWithoutEscritoresInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EstadoCreateWithoutEscritoresInputObjectSchema),
					z.lazy(() => EstadoUncheckedCreateWithoutEscritoresInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EstadoCreateOrConnectWithoutEscritoresInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCreateNestedOneWithoutEscritoresInputObjectSchema: z.ZodType<Prisma.EstadoCreateNestedOneWithoutEscritoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateNestedOneWithoutEscritoresInput>;
export const EstadoCreateNestedOneWithoutEscritoresInputObjectZodSchema =
	makeSchema();
