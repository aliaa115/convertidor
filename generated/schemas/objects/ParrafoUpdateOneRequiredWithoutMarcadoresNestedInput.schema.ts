import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ParrafoCreateOrConnectWithoutMarcadoresInputObjectSchema as ParrafoCreateOrConnectWithoutMarcadoresInputObjectSchema } from "./ParrafoCreateOrConnectWithoutMarcadoresInput.schema.ts";
import { ParrafoCreateWithoutMarcadoresInputObjectSchema as ParrafoCreateWithoutMarcadoresInputObjectSchema } from "./ParrafoCreateWithoutMarcadoresInput.schema.ts";
import { ParrafoUncheckedCreateWithoutMarcadoresInputObjectSchema as ParrafoUncheckedCreateWithoutMarcadoresInputObjectSchema } from "./ParrafoUncheckedCreateWithoutMarcadoresInput.schema.ts";
import { ParrafoUncheckedUpdateWithoutMarcadoresInputObjectSchema as ParrafoUncheckedUpdateWithoutMarcadoresInputObjectSchema } from "./ParrafoUncheckedUpdateWithoutMarcadoresInput.schema.ts";
import { ParrafoUpdateToOneWithWhereWithoutMarcadoresInputObjectSchema as ParrafoUpdateToOneWithWhereWithoutMarcadoresInputObjectSchema } from "./ParrafoUpdateToOneWithWhereWithoutMarcadoresInput.schema.ts";
import { ParrafoUpdateWithoutMarcadoresInputObjectSchema as ParrafoUpdateWithoutMarcadoresInputObjectSchema } from "./ParrafoUpdateWithoutMarcadoresInput.schema.ts";
import { ParrafoUpsertWithoutMarcadoresInputObjectSchema as ParrafoUpsertWithoutMarcadoresInputObjectSchema } from "./ParrafoUpsertWithoutMarcadoresInput.schema.ts";
import { ParrafoWhereUniqueInputObjectSchema as ParrafoWhereUniqueInputObjectSchema } from "./ParrafoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ParrafoCreateWithoutMarcadoresInputObjectSchema),
					z.lazy(
						() => ParrafoUncheckedCreateWithoutMarcadoresInputObjectSchema,
					),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => ParrafoCreateOrConnectWithoutMarcadoresInputObjectSchema)
				.optional(),
			upsert: z
				.lazy(() => ParrafoUpsertWithoutMarcadoresInputObjectSchema)
				.optional(),
			connect: z.lazy(() => ParrafoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(
						() => ParrafoUpdateToOneWithWhereWithoutMarcadoresInputObjectSchema,
					),
					z.lazy(() => ParrafoUpdateWithoutMarcadoresInputObjectSchema),
					z.lazy(
						() => ParrafoUncheckedUpdateWithoutMarcadoresInputObjectSchema,
					),
				])
				.optional(),
		})
		.strict();
export const ParrafoUpdateOneRequiredWithoutMarcadoresNestedInputObjectSchema: z.ZodType<Prisma.ParrafoUpdateOneRequiredWithoutMarcadoresNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoUpdateOneRequiredWithoutMarcadoresNestedInput>;
export const ParrafoUpdateOneRequiredWithoutMarcadoresNestedInputObjectZodSchema =
	makeSchema();
