import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateOrConnectWithoutTiposInputObjectSchema as EstadoCreateOrConnectWithoutTiposInputObjectSchema } from "./EstadoCreateOrConnectWithoutTiposInput.schema.ts";
import { EstadoCreateWithoutTiposInputObjectSchema as EstadoCreateWithoutTiposInputObjectSchema } from "./EstadoCreateWithoutTiposInput.schema.ts";
import { EstadoUncheckedCreateWithoutTiposInputObjectSchema as EstadoUncheckedCreateWithoutTiposInputObjectSchema } from "./EstadoUncheckedCreateWithoutTiposInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EstadoCreateWithoutTiposInputObjectSchema),
					z.lazy(() => EstadoUncheckedCreateWithoutTiposInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EstadoCreateOrConnectWithoutTiposInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCreateNestedOneWithoutTiposInputObjectSchema: z.ZodType<Prisma.EstadoCreateNestedOneWithoutTiposInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateNestedOneWithoutTiposInput>;
export const EstadoCreateNestedOneWithoutTiposInputObjectZodSchema =
	makeSchema();
