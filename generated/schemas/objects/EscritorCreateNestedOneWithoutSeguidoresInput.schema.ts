import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateOrConnectWithoutSeguidoresInputObjectSchema as EscritorCreateOrConnectWithoutSeguidoresInputObjectSchema } from "./EscritorCreateOrConnectWithoutSeguidoresInput.schema.ts";
import { EscritorCreateWithoutSeguidoresInputObjectSchema as EscritorCreateWithoutSeguidoresInputObjectSchema } from "./EscritorCreateWithoutSeguidoresInput.schema.ts";
import { EscritorUncheckedCreateWithoutSeguidoresInputObjectSchema as EscritorUncheckedCreateWithoutSeguidoresInputObjectSchema } from "./EscritorUncheckedCreateWithoutSeguidoresInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EscritorCreateWithoutSeguidoresInputObjectSchema),
					z.lazy(
						() => EscritorUncheckedCreateWithoutSeguidoresInputObjectSchema,
					),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EscritorCreateOrConnectWithoutSeguidoresInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EscritorWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EscritorCreateNestedOneWithoutSeguidoresInputObjectSchema: z.ZodType<Prisma.EscritorCreateNestedOneWithoutSeguidoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateNestedOneWithoutSeguidoresInput>;
export const EscritorCreateNestedOneWithoutSeguidoresInputObjectZodSchema =
	makeSchema();
