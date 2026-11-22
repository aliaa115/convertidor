import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateOrConnectWithoutIdiomaInputObjectSchema as EstadoCreateOrConnectWithoutIdiomaInputObjectSchema } from "./EstadoCreateOrConnectWithoutIdiomaInput.schema.ts";
import { EstadoCreateWithoutIdiomaInputObjectSchema as EstadoCreateWithoutIdiomaInputObjectSchema } from "./EstadoCreateWithoutIdiomaInput.schema.ts";
import { EstadoUncheckedCreateWithoutIdiomaInputObjectSchema as EstadoUncheckedCreateWithoutIdiomaInputObjectSchema } from "./EstadoUncheckedCreateWithoutIdiomaInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EstadoCreateWithoutIdiomaInputObjectSchema),
					z.lazy(() => EstadoUncheckedCreateWithoutIdiomaInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EstadoCreateOrConnectWithoutIdiomaInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCreateNestedOneWithoutIdiomaInputObjectSchema: z.ZodType<Prisma.EstadoCreateNestedOneWithoutIdiomaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateNestedOneWithoutIdiomaInput>;
export const EstadoCreateNestedOneWithoutIdiomaInputObjectZodSchema =
	makeSchema();
