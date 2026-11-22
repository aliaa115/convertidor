import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateWithoutNotasAutorInputObjectSchema as EscritorCreateWithoutNotasAutorInputObjectSchema } from "./EscritorCreateWithoutNotasAutorInput.schema.ts";
import { EscritorUncheckedCreateWithoutNotasAutorInputObjectSchema as EscritorUncheckedCreateWithoutNotasAutorInputObjectSchema } from "./EscritorUncheckedCreateWithoutNotasAutorInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => EscritorCreateWithoutNotasAutorInputObjectSchema),
				z.lazy(() => EscritorUncheckedCreateWithoutNotasAutorInputObjectSchema),
			]),
		})
		.strict();
export const EscritorCreateOrConnectWithoutNotasAutorInputObjectSchema: z.ZodType<Prisma.EscritorCreateOrConnectWithoutNotasAutorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateOrConnectWithoutNotasAutorInput>;
export const EscritorCreateOrConnectWithoutNotasAutorInputObjectZodSchema =
	makeSchema();
