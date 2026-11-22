import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateWithoutSeguidoresInputObjectSchema as EscritorCreateWithoutSeguidoresInputObjectSchema } from "./EscritorCreateWithoutSeguidoresInput.schema.ts";
import { EscritorUncheckedCreateWithoutSeguidoresInputObjectSchema as EscritorUncheckedCreateWithoutSeguidoresInputObjectSchema } from "./EscritorUncheckedCreateWithoutSeguidoresInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => EscritorCreateWithoutSeguidoresInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutSeguidoresInputObjectSchema)]),
		})
		.strict();
export const EscritorCreateOrConnectWithoutSeguidoresInputObjectSchema: z.ZodType<Prisma.EscritorCreateOrConnectWithoutSeguidoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateOrConnectWithoutSeguidoresInput>;
export const EscritorCreateOrConnectWithoutSeguidoresInputObjectZodSchema = makeSchema();
