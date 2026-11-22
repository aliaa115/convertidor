import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateOrConnectWithoutSiguiendoInputObjectSchema as EscritorCreateOrConnectWithoutSiguiendoInputObjectSchema } from "./EscritorCreateOrConnectWithoutSiguiendoInput.schema.ts";
import { EscritorCreateWithoutSiguiendoInputObjectSchema as EscritorCreateWithoutSiguiendoInputObjectSchema } from "./EscritorCreateWithoutSiguiendoInput.schema.ts";
import { EscritorUncheckedCreateWithoutSiguiendoInputObjectSchema as EscritorUncheckedCreateWithoutSiguiendoInputObjectSchema } from "./EscritorUncheckedCreateWithoutSiguiendoInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EscritorCreateWithoutSiguiendoInputObjectSchema),
					z.lazy(
						() => EscritorUncheckedCreateWithoutSiguiendoInputObjectSchema,
					),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EscritorCreateOrConnectWithoutSiguiendoInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EscritorWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EscritorCreateNestedOneWithoutSiguiendoInputObjectSchema: z.ZodType<Prisma.EscritorCreateNestedOneWithoutSiguiendoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateNestedOneWithoutSiguiendoInput>;
export const EscritorCreateNestedOneWithoutSiguiendoInputObjectZodSchema =
	makeSchema();
