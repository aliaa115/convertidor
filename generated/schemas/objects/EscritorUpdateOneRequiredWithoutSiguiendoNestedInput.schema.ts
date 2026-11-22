import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateOrConnectWithoutSiguiendoInputObjectSchema as EscritorCreateOrConnectWithoutSiguiendoInputObjectSchema } from "./EscritorCreateOrConnectWithoutSiguiendoInput.schema.ts";
import { EscritorCreateWithoutSiguiendoInputObjectSchema as EscritorCreateWithoutSiguiendoInputObjectSchema } from "./EscritorCreateWithoutSiguiendoInput.schema.ts";
import { EscritorUncheckedCreateWithoutSiguiendoInputObjectSchema as EscritorUncheckedCreateWithoutSiguiendoInputObjectSchema } from "./EscritorUncheckedCreateWithoutSiguiendoInput.schema.ts";
import { EscritorUncheckedUpdateWithoutSiguiendoInputObjectSchema as EscritorUncheckedUpdateWithoutSiguiendoInputObjectSchema } from "./EscritorUncheckedUpdateWithoutSiguiendoInput.schema.ts";
import { EscritorUpdateToOneWithWhereWithoutSiguiendoInputObjectSchema as EscritorUpdateToOneWithWhereWithoutSiguiendoInputObjectSchema } from "./EscritorUpdateToOneWithWhereWithoutSiguiendoInput.schema.ts";
import { EscritorUpdateWithoutSiguiendoInputObjectSchema as EscritorUpdateWithoutSiguiendoInputObjectSchema } from "./EscritorUpdateWithoutSiguiendoInput.schema.ts";
import { EscritorUpsertWithoutSiguiendoInputObjectSchema as EscritorUpsertWithoutSiguiendoInputObjectSchema } from "./EscritorUpsertWithoutSiguiendoInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EscritorCreateWithoutSiguiendoInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutSiguiendoInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EscritorCreateOrConnectWithoutSiguiendoInputObjectSchema).optional(),
			upsert: z.lazy(() => EscritorUpsertWithoutSiguiendoInputObjectSchema).optional(),
			connect: z.lazy(() => EscritorWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => EscritorUpdateToOneWithWhereWithoutSiguiendoInputObjectSchema),
					z.lazy(() => EscritorUpdateWithoutSiguiendoInputObjectSchema),
					z.lazy(() => EscritorUncheckedUpdateWithoutSiguiendoInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EscritorUpdateOneRequiredWithoutSiguiendoNestedInputObjectSchema: z.ZodType<Prisma.EscritorUpdateOneRequiredWithoutSiguiendoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateOneRequiredWithoutSiguiendoNestedInput>;
export const EscritorUpdateOneRequiredWithoutSiguiendoNestedInputObjectZodSchema = makeSchema();
