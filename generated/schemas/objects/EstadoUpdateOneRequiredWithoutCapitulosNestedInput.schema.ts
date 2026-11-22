import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateOrConnectWithoutCapitulosInputObjectSchema as EstadoCreateOrConnectWithoutCapitulosInputObjectSchema } from "./EstadoCreateOrConnectWithoutCapitulosInput.schema.ts";
import { EstadoCreateWithoutCapitulosInputObjectSchema as EstadoCreateWithoutCapitulosInputObjectSchema } from "./EstadoCreateWithoutCapitulosInput.schema.ts";
import { EstadoUncheckedCreateWithoutCapitulosInputObjectSchema as EstadoUncheckedCreateWithoutCapitulosInputObjectSchema } from "./EstadoUncheckedCreateWithoutCapitulosInput.schema.ts";
import { EstadoUncheckedUpdateWithoutCapitulosInputObjectSchema as EstadoUncheckedUpdateWithoutCapitulosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutCapitulosInput.schema.ts";
import { EstadoUpdateToOneWithWhereWithoutCapitulosInputObjectSchema as EstadoUpdateToOneWithWhereWithoutCapitulosInputObjectSchema } from "./EstadoUpdateToOneWithWhereWithoutCapitulosInput.schema.ts";
import { EstadoUpdateWithoutCapitulosInputObjectSchema as EstadoUpdateWithoutCapitulosInputObjectSchema } from "./EstadoUpdateWithoutCapitulosInput.schema.ts";
import { EstadoUpsertWithoutCapitulosInputObjectSchema as EstadoUpsertWithoutCapitulosInputObjectSchema } from "./EstadoUpsertWithoutCapitulosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EstadoCreateWithoutCapitulosInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutCapitulosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EstadoCreateOrConnectWithoutCapitulosInputObjectSchema).optional(),
			upsert: z.lazy(() => EstadoUpsertWithoutCapitulosInputObjectSchema).optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => EstadoUpdateToOneWithWhereWithoutCapitulosInputObjectSchema),
					z.lazy(() => EstadoUpdateWithoutCapitulosInputObjectSchema),
					z.lazy(() => EstadoUncheckedUpdateWithoutCapitulosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EstadoUpdateOneRequiredWithoutCapitulosNestedInputObjectSchema: z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutCapitulosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutCapitulosNestedInput>;
export const EstadoUpdateOneRequiredWithoutCapitulosNestedInputObjectZodSchema = makeSchema();
