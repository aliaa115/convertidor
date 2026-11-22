import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateOrConnectWithoutListasInputObjectSchema as EstadoCreateOrConnectWithoutListasInputObjectSchema } from "./EstadoCreateOrConnectWithoutListasInput.schema.ts";
import { EstadoCreateWithoutListasInputObjectSchema as EstadoCreateWithoutListasInputObjectSchema } from "./EstadoCreateWithoutListasInput.schema.ts";
import { EstadoUncheckedCreateWithoutListasInputObjectSchema as EstadoUncheckedCreateWithoutListasInputObjectSchema } from "./EstadoUncheckedCreateWithoutListasInput.schema.ts";
import { EstadoUncheckedUpdateWithoutListasInputObjectSchema as EstadoUncheckedUpdateWithoutListasInputObjectSchema } from "./EstadoUncheckedUpdateWithoutListasInput.schema.ts";
import { EstadoUpdateToOneWithWhereWithoutListasInputObjectSchema as EstadoUpdateToOneWithWhereWithoutListasInputObjectSchema } from "./EstadoUpdateToOneWithWhereWithoutListasInput.schema.ts";
import { EstadoUpdateWithoutListasInputObjectSchema as EstadoUpdateWithoutListasInputObjectSchema } from "./EstadoUpdateWithoutListasInput.schema.ts";
import { EstadoUpsertWithoutListasInputObjectSchema as EstadoUpsertWithoutListasInputObjectSchema } from "./EstadoUpsertWithoutListasInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EstadoCreateWithoutListasInputObjectSchema),
					z.lazy(() => EstadoUncheckedCreateWithoutListasInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EstadoCreateOrConnectWithoutListasInputObjectSchema)
				.optional(),
			upsert: z
				.lazy(() => EstadoUpsertWithoutListasInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(
						() => EstadoUpdateToOneWithWhereWithoutListasInputObjectSchema,
					),
					z.lazy(() => EstadoUpdateWithoutListasInputObjectSchema),
					z.lazy(() => EstadoUncheckedUpdateWithoutListasInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EstadoUpdateOneRequiredWithoutListasNestedInputObjectSchema: z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutListasNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutListasNestedInput>;
export const EstadoUpdateOneRequiredWithoutListasNestedInputObjectZodSchema =
	makeSchema();
