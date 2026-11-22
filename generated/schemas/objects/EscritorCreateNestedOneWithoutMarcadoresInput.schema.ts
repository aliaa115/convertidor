import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateOrConnectWithoutMarcadoresInputObjectSchema as EscritorCreateOrConnectWithoutMarcadoresInputObjectSchema } from "./EscritorCreateOrConnectWithoutMarcadoresInput.schema.ts";
import { EscritorCreateWithoutMarcadoresInputObjectSchema as EscritorCreateWithoutMarcadoresInputObjectSchema } from "./EscritorCreateWithoutMarcadoresInput.schema.ts";
import { EscritorUncheckedCreateWithoutMarcadoresInputObjectSchema as EscritorUncheckedCreateWithoutMarcadoresInputObjectSchema } from "./EscritorUncheckedCreateWithoutMarcadoresInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EscritorCreateWithoutMarcadoresInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutMarcadoresInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EscritorCreateOrConnectWithoutMarcadoresInputObjectSchema).optional(),
			connect: z.lazy(() => EscritorWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EscritorCreateNestedOneWithoutMarcadoresInputObjectSchema: z.ZodType<Prisma.EscritorCreateNestedOneWithoutMarcadoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateNestedOneWithoutMarcadoresInput>;
export const EscritorCreateNestedOneWithoutMarcadoresInputObjectZodSchema = makeSchema();
