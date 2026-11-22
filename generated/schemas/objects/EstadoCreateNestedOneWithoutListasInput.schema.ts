import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateOrConnectWithoutListasInputObjectSchema as EstadoCreateOrConnectWithoutListasInputObjectSchema } from "./EstadoCreateOrConnectWithoutListasInput.schema.ts";
import { EstadoCreateWithoutListasInputObjectSchema as EstadoCreateWithoutListasInputObjectSchema } from "./EstadoCreateWithoutListasInput.schema.ts";
import { EstadoUncheckedCreateWithoutListasInputObjectSchema as EstadoUncheckedCreateWithoutListasInputObjectSchema } from "./EstadoUncheckedCreateWithoutListasInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EstadoCreateWithoutListasInputObjectSchema),
					z.lazy(() => EstadoUncheckedCreateWithoutListasInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EstadoCreateOrConnectWithoutListasInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCreateNestedOneWithoutListasInputObjectSchema: z.ZodType<Prisma.EstadoCreateNestedOneWithoutListasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateNestedOneWithoutListasInput>;
export const EstadoCreateNestedOneWithoutListasInputObjectZodSchema =
	makeSchema();
