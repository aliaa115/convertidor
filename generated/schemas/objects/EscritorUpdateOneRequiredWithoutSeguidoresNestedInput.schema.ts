import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateOrConnectWithoutSeguidoresInputObjectSchema as EscritorCreateOrConnectWithoutSeguidoresInputObjectSchema } from "./EscritorCreateOrConnectWithoutSeguidoresInput.schema.ts";
import { EscritorCreateWithoutSeguidoresInputObjectSchema as EscritorCreateWithoutSeguidoresInputObjectSchema } from "./EscritorCreateWithoutSeguidoresInput.schema.ts";
import { EscritorUncheckedCreateWithoutSeguidoresInputObjectSchema as EscritorUncheckedCreateWithoutSeguidoresInputObjectSchema } from "./EscritorUncheckedCreateWithoutSeguidoresInput.schema.ts";
import { EscritorUncheckedUpdateWithoutSeguidoresInputObjectSchema as EscritorUncheckedUpdateWithoutSeguidoresInputObjectSchema } from "./EscritorUncheckedUpdateWithoutSeguidoresInput.schema.ts";
import { EscritorUpdateToOneWithWhereWithoutSeguidoresInputObjectSchema as EscritorUpdateToOneWithWhereWithoutSeguidoresInputObjectSchema } from "./EscritorUpdateToOneWithWhereWithoutSeguidoresInput.schema.ts";
import { EscritorUpdateWithoutSeguidoresInputObjectSchema as EscritorUpdateWithoutSeguidoresInputObjectSchema } from "./EscritorUpdateWithoutSeguidoresInput.schema.ts";
import { EscritorUpsertWithoutSeguidoresInputObjectSchema as EscritorUpsertWithoutSeguidoresInputObjectSchema } from "./EscritorUpsertWithoutSeguidoresInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EscritorCreateWithoutSeguidoresInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutSeguidoresInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EscritorCreateOrConnectWithoutSeguidoresInputObjectSchema).optional(),
			upsert: z.lazy(() => EscritorUpsertWithoutSeguidoresInputObjectSchema).optional(),
			connect: z.lazy(() => EscritorWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => EscritorUpdateToOneWithWhereWithoutSeguidoresInputObjectSchema),
					z.lazy(() => EscritorUpdateWithoutSeguidoresInputObjectSchema),
					z.lazy(() => EscritorUncheckedUpdateWithoutSeguidoresInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EscritorUpdateOneRequiredWithoutSeguidoresNestedInputObjectSchema: z.ZodType<Prisma.EscritorUpdateOneRequiredWithoutSeguidoresNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateOneRequiredWithoutSeguidoresNestedInput>;
export const EscritorUpdateOneRequiredWithoutSeguidoresNestedInputObjectZodSchema = makeSchema();
