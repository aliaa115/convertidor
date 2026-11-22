import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateOrConnectWithoutLibrosInputObjectSchema as EstadoCreateOrConnectWithoutLibrosInputObjectSchema } from "./EstadoCreateOrConnectWithoutLibrosInput.schema.ts";
import { EstadoCreateWithoutLibrosInputObjectSchema as EstadoCreateWithoutLibrosInputObjectSchema } from "./EstadoCreateWithoutLibrosInput.schema.ts";
import { EstadoUncheckedCreateWithoutLibrosInputObjectSchema as EstadoUncheckedCreateWithoutLibrosInputObjectSchema } from "./EstadoUncheckedCreateWithoutLibrosInput.schema.ts";
import { EstadoUncheckedUpdateWithoutLibrosInputObjectSchema as EstadoUncheckedUpdateWithoutLibrosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutLibrosInput.schema.ts";
import { EstadoUpdateToOneWithWhereWithoutLibrosInputObjectSchema as EstadoUpdateToOneWithWhereWithoutLibrosInputObjectSchema } from "./EstadoUpdateToOneWithWhereWithoutLibrosInput.schema.ts";
import { EstadoUpdateWithoutLibrosInputObjectSchema as EstadoUpdateWithoutLibrosInputObjectSchema } from "./EstadoUpdateWithoutLibrosInput.schema.ts";
import { EstadoUpsertWithoutLibrosInputObjectSchema as EstadoUpsertWithoutLibrosInputObjectSchema } from "./EstadoUpsertWithoutLibrosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EstadoCreateWithoutLibrosInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutLibrosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EstadoCreateOrConnectWithoutLibrosInputObjectSchema).optional(),
			upsert: z.lazy(() => EstadoUpsertWithoutLibrosInputObjectSchema).optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => EstadoUpdateToOneWithWhereWithoutLibrosInputObjectSchema),
					z.lazy(() => EstadoUpdateWithoutLibrosInputObjectSchema),
					z.lazy(() => EstadoUncheckedUpdateWithoutLibrosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EstadoUpdateOneRequiredWithoutLibrosNestedInputObjectSchema: z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutLibrosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutLibrosNestedInput>;
export const EstadoUpdateOneRequiredWithoutLibrosNestedInputObjectZodSchema = makeSchema();
