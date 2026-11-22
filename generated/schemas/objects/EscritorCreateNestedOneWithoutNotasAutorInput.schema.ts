import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateOrConnectWithoutNotasAutorInputObjectSchema as EscritorCreateOrConnectWithoutNotasAutorInputObjectSchema } from "./EscritorCreateOrConnectWithoutNotasAutorInput.schema.ts";
import { EscritorCreateWithoutNotasAutorInputObjectSchema as EscritorCreateWithoutNotasAutorInputObjectSchema } from "./EscritorCreateWithoutNotasAutorInput.schema.ts";
import { EscritorUncheckedCreateWithoutNotasAutorInputObjectSchema as EscritorUncheckedCreateWithoutNotasAutorInputObjectSchema } from "./EscritorUncheckedCreateWithoutNotasAutorInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EscritorCreateWithoutNotasAutorInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutNotasAutorInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EscritorCreateOrConnectWithoutNotasAutorInputObjectSchema).optional(),
			connect: z.lazy(() => EscritorWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EscritorCreateNestedOneWithoutNotasAutorInputObjectSchema: z.ZodType<Prisma.EscritorCreateNestedOneWithoutNotasAutorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateNestedOneWithoutNotasAutorInput>;
export const EscritorCreateNestedOneWithoutNotasAutorInputObjectZodSchema = makeSchema();
