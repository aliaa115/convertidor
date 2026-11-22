import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { TipoCreateOrConnectWithoutLibrosInputObjectSchema as TipoCreateOrConnectWithoutLibrosInputObjectSchema } from "./TipoCreateOrConnectWithoutLibrosInput.schema.ts";
import { TipoCreateWithoutLibrosInputObjectSchema as TipoCreateWithoutLibrosInputObjectSchema } from "./TipoCreateWithoutLibrosInput.schema.ts";
import { TipoUncheckedCreateWithoutLibrosInputObjectSchema as TipoUncheckedCreateWithoutLibrosInputObjectSchema } from "./TipoUncheckedCreateWithoutLibrosInput.schema.ts";
import { TipoUncheckedUpdateWithoutLibrosInputObjectSchema as TipoUncheckedUpdateWithoutLibrosInputObjectSchema } from "./TipoUncheckedUpdateWithoutLibrosInput.schema.ts";
import { TipoUpdateToOneWithWhereWithoutLibrosInputObjectSchema as TipoUpdateToOneWithWhereWithoutLibrosInputObjectSchema } from "./TipoUpdateToOneWithWhereWithoutLibrosInput.schema.ts";
import { TipoUpdateWithoutLibrosInputObjectSchema as TipoUpdateWithoutLibrosInputObjectSchema } from "./TipoUpdateWithoutLibrosInput.schema.ts";
import { TipoUpsertWithoutLibrosInputObjectSchema as TipoUpsertWithoutLibrosInputObjectSchema } from "./TipoUpsertWithoutLibrosInput.schema.ts";
import { TipoWhereUniqueInputObjectSchema as TipoWhereUniqueInputObjectSchema } from "./TipoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => TipoCreateWithoutLibrosInputObjectSchema), z.lazy(() => TipoUncheckedCreateWithoutLibrosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => TipoCreateOrConnectWithoutLibrosInputObjectSchema).optional(),
			upsert: z.lazy(() => TipoUpsertWithoutLibrosInputObjectSchema).optional(),
			connect: z.lazy(() => TipoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => TipoUpdateToOneWithWhereWithoutLibrosInputObjectSchema),
					z.lazy(() => TipoUpdateWithoutLibrosInputObjectSchema),
					z.lazy(() => TipoUncheckedUpdateWithoutLibrosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const TipoUpdateOneRequiredWithoutLibrosNestedInputObjectSchema: z.ZodType<Prisma.TipoUpdateOneRequiredWithoutLibrosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoUpdateOneRequiredWithoutLibrosNestedInput>;
export const TipoUpdateOneRequiredWithoutLibrosNestedInputObjectZodSchema = makeSchema();
