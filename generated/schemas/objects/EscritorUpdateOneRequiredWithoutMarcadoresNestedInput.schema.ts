import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateOrConnectWithoutMarcadoresInputObjectSchema as EscritorCreateOrConnectWithoutMarcadoresInputObjectSchema } from "./EscritorCreateOrConnectWithoutMarcadoresInput.schema.ts";
import { EscritorCreateWithoutMarcadoresInputObjectSchema as EscritorCreateWithoutMarcadoresInputObjectSchema } from "./EscritorCreateWithoutMarcadoresInput.schema.ts";
import { EscritorUncheckedCreateWithoutMarcadoresInputObjectSchema as EscritorUncheckedCreateWithoutMarcadoresInputObjectSchema } from "./EscritorUncheckedCreateWithoutMarcadoresInput.schema.ts";
import { EscritorUncheckedUpdateWithoutMarcadoresInputObjectSchema as EscritorUncheckedUpdateWithoutMarcadoresInputObjectSchema } from "./EscritorUncheckedUpdateWithoutMarcadoresInput.schema.ts";
import { EscritorUpdateToOneWithWhereWithoutMarcadoresInputObjectSchema as EscritorUpdateToOneWithWhereWithoutMarcadoresInputObjectSchema } from "./EscritorUpdateToOneWithWhereWithoutMarcadoresInput.schema.ts";
import { EscritorUpdateWithoutMarcadoresInputObjectSchema as EscritorUpdateWithoutMarcadoresInputObjectSchema } from "./EscritorUpdateWithoutMarcadoresInput.schema.ts";
import { EscritorUpsertWithoutMarcadoresInputObjectSchema as EscritorUpsertWithoutMarcadoresInputObjectSchema } from "./EscritorUpsertWithoutMarcadoresInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EscritorCreateWithoutMarcadoresInputObjectSchema),
					z.lazy(
						() => EscritorUncheckedCreateWithoutMarcadoresInputObjectSchema,
					),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EscritorCreateOrConnectWithoutMarcadoresInputObjectSchema)
				.optional(),
			upsert: z
				.lazy(() => EscritorUpsertWithoutMarcadoresInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EscritorWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(
						() =>
							EscritorUpdateToOneWithWhereWithoutMarcadoresInputObjectSchema,
					),
					z.lazy(() => EscritorUpdateWithoutMarcadoresInputObjectSchema),
					z.lazy(
						() => EscritorUncheckedUpdateWithoutMarcadoresInputObjectSchema,
					),
				])
				.optional(),
		})
		.strict();
export const EscritorUpdateOneRequiredWithoutMarcadoresNestedInputObjectSchema: z.ZodType<Prisma.EscritorUpdateOneRequiredWithoutMarcadoresNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateOneRequiredWithoutMarcadoresNestedInput>;
export const EscritorUpdateOneRequiredWithoutMarcadoresNestedInputObjectZodSchema =
	makeSchema();
