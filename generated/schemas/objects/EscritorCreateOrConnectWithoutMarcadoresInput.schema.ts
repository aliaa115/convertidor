import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateWithoutMarcadoresInputObjectSchema as EscritorCreateWithoutMarcadoresInputObjectSchema } from "./EscritorCreateWithoutMarcadoresInput.schema.ts";
import { EscritorUncheckedCreateWithoutMarcadoresInputObjectSchema as EscritorUncheckedCreateWithoutMarcadoresInputObjectSchema } from "./EscritorUncheckedCreateWithoutMarcadoresInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => EscritorCreateWithoutMarcadoresInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutMarcadoresInputObjectSchema)]),
		})
		.strict();
export const EscritorCreateOrConnectWithoutMarcadoresInputObjectSchema: z.ZodType<Prisma.EscritorCreateOrConnectWithoutMarcadoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateOrConnectWithoutMarcadoresInput>;
export const EscritorCreateOrConnectWithoutMarcadoresInputObjectZodSchema = makeSchema();
