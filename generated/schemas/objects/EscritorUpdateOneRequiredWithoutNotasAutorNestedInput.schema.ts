import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateOrConnectWithoutNotasAutorInputObjectSchema as EscritorCreateOrConnectWithoutNotasAutorInputObjectSchema } from "./EscritorCreateOrConnectWithoutNotasAutorInput.schema.ts";
import { EscritorCreateWithoutNotasAutorInputObjectSchema as EscritorCreateWithoutNotasAutorInputObjectSchema } from "./EscritorCreateWithoutNotasAutorInput.schema.ts";
import { EscritorUncheckedCreateWithoutNotasAutorInputObjectSchema as EscritorUncheckedCreateWithoutNotasAutorInputObjectSchema } from "./EscritorUncheckedCreateWithoutNotasAutorInput.schema.ts";
import { EscritorUncheckedUpdateWithoutNotasAutorInputObjectSchema as EscritorUncheckedUpdateWithoutNotasAutorInputObjectSchema } from "./EscritorUncheckedUpdateWithoutNotasAutorInput.schema.ts";
import { EscritorUpdateToOneWithWhereWithoutNotasAutorInputObjectSchema as EscritorUpdateToOneWithWhereWithoutNotasAutorInputObjectSchema } from "./EscritorUpdateToOneWithWhereWithoutNotasAutorInput.schema.ts";
import { EscritorUpdateWithoutNotasAutorInputObjectSchema as EscritorUpdateWithoutNotasAutorInputObjectSchema } from "./EscritorUpdateWithoutNotasAutorInput.schema.ts";
import { EscritorUpsertWithoutNotasAutorInputObjectSchema as EscritorUpsertWithoutNotasAutorInputObjectSchema } from "./EscritorUpsertWithoutNotasAutorInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EscritorCreateWithoutNotasAutorInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutNotasAutorInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EscritorCreateOrConnectWithoutNotasAutorInputObjectSchema).optional(),
			upsert: z.lazy(() => EscritorUpsertWithoutNotasAutorInputObjectSchema).optional(),
			connect: z.lazy(() => EscritorWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => EscritorUpdateToOneWithWhereWithoutNotasAutorInputObjectSchema),
					z.lazy(() => EscritorUpdateWithoutNotasAutorInputObjectSchema),
					z.lazy(() => EscritorUncheckedUpdateWithoutNotasAutorInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EscritorUpdateOneRequiredWithoutNotasAutorNestedInputObjectSchema: z.ZodType<Prisma.EscritorUpdateOneRequiredWithoutNotasAutorNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateOneRequiredWithoutNotasAutorNestedInput>;
export const EscritorUpdateOneRequiredWithoutNotasAutorNestedInputObjectZodSchema = makeSchema();
