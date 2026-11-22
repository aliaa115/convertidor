import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateOrConnectWithoutGlosariosInputObjectSchema as EscritorCreateOrConnectWithoutGlosariosInputObjectSchema } from "./EscritorCreateOrConnectWithoutGlosariosInput.schema.ts";
import { EscritorCreateWithoutGlosariosInputObjectSchema as EscritorCreateWithoutGlosariosInputObjectSchema } from "./EscritorCreateWithoutGlosariosInput.schema.ts";
import { EscritorUncheckedCreateWithoutGlosariosInputObjectSchema as EscritorUncheckedCreateWithoutGlosariosInputObjectSchema } from "./EscritorUncheckedCreateWithoutGlosariosInput.schema.ts";
import { EscritorUncheckedUpdateWithoutGlosariosInputObjectSchema as EscritorUncheckedUpdateWithoutGlosariosInputObjectSchema } from "./EscritorUncheckedUpdateWithoutGlosariosInput.schema.ts";
import { EscritorUpdateToOneWithWhereWithoutGlosariosInputObjectSchema as EscritorUpdateToOneWithWhereWithoutGlosariosInputObjectSchema } from "./EscritorUpdateToOneWithWhereWithoutGlosariosInput.schema.ts";
import { EscritorUpdateWithoutGlosariosInputObjectSchema as EscritorUpdateWithoutGlosariosInputObjectSchema } from "./EscritorUpdateWithoutGlosariosInput.schema.ts";
import { EscritorUpsertWithoutGlosariosInputObjectSchema as EscritorUpsertWithoutGlosariosInputObjectSchema } from "./EscritorUpsertWithoutGlosariosInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EscritorCreateWithoutGlosariosInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutGlosariosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EscritorCreateOrConnectWithoutGlosariosInputObjectSchema).optional(),
			upsert: z.lazy(() => EscritorUpsertWithoutGlosariosInputObjectSchema).optional(),
			connect: z.lazy(() => EscritorWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => EscritorUpdateToOneWithWhereWithoutGlosariosInputObjectSchema),
					z.lazy(() => EscritorUpdateWithoutGlosariosInputObjectSchema),
					z.lazy(() => EscritorUncheckedUpdateWithoutGlosariosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EscritorUpdateOneRequiredWithoutGlosariosNestedInputObjectSchema: z.ZodType<Prisma.EscritorUpdateOneRequiredWithoutGlosariosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateOneRequiredWithoutGlosariosNestedInput>;
export const EscritorUpdateOneRequiredWithoutGlosariosNestedInputObjectZodSchema = makeSchema();
