import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateOrConnectWithoutMarcadoresInputObjectSchema as EstadoCreateOrConnectWithoutMarcadoresInputObjectSchema } from "./EstadoCreateOrConnectWithoutMarcadoresInput.schema.ts";
import { EstadoCreateWithoutMarcadoresInputObjectSchema as EstadoCreateWithoutMarcadoresInputObjectSchema } from "./EstadoCreateWithoutMarcadoresInput.schema.ts";
import { EstadoUncheckedCreateWithoutMarcadoresInputObjectSchema as EstadoUncheckedCreateWithoutMarcadoresInputObjectSchema } from "./EstadoUncheckedCreateWithoutMarcadoresInput.schema.ts";
import { EstadoUncheckedUpdateWithoutMarcadoresInputObjectSchema as EstadoUncheckedUpdateWithoutMarcadoresInputObjectSchema } from "./EstadoUncheckedUpdateWithoutMarcadoresInput.schema.ts";
import { EstadoUpdateToOneWithWhereWithoutMarcadoresInputObjectSchema as EstadoUpdateToOneWithWhereWithoutMarcadoresInputObjectSchema } from "./EstadoUpdateToOneWithWhereWithoutMarcadoresInput.schema.ts";
import { EstadoUpdateWithoutMarcadoresInputObjectSchema as EstadoUpdateWithoutMarcadoresInputObjectSchema } from "./EstadoUpdateWithoutMarcadoresInput.schema.ts";
import { EstadoUpsertWithoutMarcadoresInputObjectSchema as EstadoUpsertWithoutMarcadoresInputObjectSchema } from "./EstadoUpsertWithoutMarcadoresInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EstadoCreateWithoutMarcadoresInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutMarcadoresInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EstadoCreateOrConnectWithoutMarcadoresInputObjectSchema).optional(),
			upsert: z.lazy(() => EstadoUpsertWithoutMarcadoresInputObjectSchema).optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => EstadoUpdateToOneWithWhereWithoutMarcadoresInputObjectSchema),
					z.lazy(() => EstadoUpdateWithoutMarcadoresInputObjectSchema),
					z.lazy(() => EstadoUncheckedUpdateWithoutMarcadoresInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EstadoUpdateOneRequiredWithoutMarcadoresNestedInputObjectSchema: z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutMarcadoresNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutMarcadoresNestedInput>;
export const EstadoUpdateOneRequiredWithoutMarcadoresNestedInputObjectZodSchema = makeSchema();
