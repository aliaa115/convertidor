import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateOrConnectWithoutIdiomaInputObjectSchema as EstadoCreateOrConnectWithoutIdiomaInputObjectSchema } from "./EstadoCreateOrConnectWithoutIdiomaInput.schema.ts";
import { EstadoCreateWithoutIdiomaInputObjectSchema as EstadoCreateWithoutIdiomaInputObjectSchema } from "./EstadoCreateWithoutIdiomaInput.schema.ts";
import { EstadoUncheckedCreateWithoutIdiomaInputObjectSchema as EstadoUncheckedCreateWithoutIdiomaInputObjectSchema } from "./EstadoUncheckedCreateWithoutIdiomaInput.schema.ts";
import { EstadoUncheckedUpdateWithoutIdiomaInputObjectSchema as EstadoUncheckedUpdateWithoutIdiomaInputObjectSchema } from "./EstadoUncheckedUpdateWithoutIdiomaInput.schema.ts";
import { EstadoUpdateToOneWithWhereWithoutIdiomaInputObjectSchema as EstadoUpdateToOneWithWhereWithoutIdiomaInputObjectSchema } from "./EstadoUpdateToOneWithWhereWithoutIdiomaInput.schema.ts";
import { EstadoUpdateWithoutIdiomaInputObjectSchema as EstadoUpdateWithoutIdiomaInputObjectSchema } from "./EstadoUpdateWithoutIdiomaInput.schema.ts";
import { EstadoUpsertWithoutIdiomaInputObjectSchema as EstadoUpsertWithoutIdiomaInputObjectSchema } from "./EstadoUpsertWithoutIdiomaInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EstadoCreateWithoutIdiomaInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutIdiomaInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EstadoCreateOrConnectWithoutIdiomaInputObjectSchema).optional(),
			upsert: z.lazy(() => EstadoUpsertWithoutIdiomaInputObjectSchema).optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => EstadoUpdateToOneWithWhereWithoutIdiomaInputObjectSchema),
					z.lazy(() => EstadoUpdateWithoutIdiomaInputObjectSchema),
					z.lazy(() => EstadoUncheckedUpdateWithoutIdiomaInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EstadoUpdateOneRequiredWithoutIdiomaNestedInputObjectSchema: z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutIdiomaNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutIdiomaNestedInput>;
export const EstadoUpdateOneRequiredWithoutIdiomaNestedInputObjectZodSchema = makeSchema();
