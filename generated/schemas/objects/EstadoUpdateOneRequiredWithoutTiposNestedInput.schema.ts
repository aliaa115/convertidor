import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateOrConnectWithoutTiposInputObjectSchema as EstadoCreateOrConnectWithoutTiposInputObjectSchema } from "./EstadoCreateOrConnectWithoutTiposInput.schema.ts";
import { EstadoCreateWithoutTiposInputObjectSchema as EstadoCreateWithoutTiposInputObjectSchema } from "./EstadoCreateWithoutTiposInput.schema.ts";
import { EstadoUncheckedCreateWithoutTiposInputObjectSchema as EstadoUncheckedCreateWithoutTiposInputObjectSchema } from "./EstadoUncheckedCreateWithoutTiposInput.schema.ts";
import { EstadoUncheckedUpdateWithoutTiposInputObjectSchema as EstadoUncheckedUpdateWithoutTiposInputObjectSchema } from "./EstadoUncheckedUpdateWithoutTiposInput.schema.ts";
import { EstadoUpdateToOneWithWhereWithoutTiposInputObjectSchema as EstadoUpdateToOneWithWhereWithoutTiposInputObjectSchema } from "./EstadoUpdateToOneWithWhereWithoutTiposInput.schema.ts";
import { EstadoUpdateWithoutTiposInputObjectSchema as EstadoUpdateWithoutTiposInputObjectSchema } from "./EstadoUpdateWithoutTiposInput.schema.ts";
import { EstadoUpsertWithoutTiposInputObjectSchema as EstadoUpsertWithoutTiposInputObjectSchema } from "./EstadoUpsertWithoutTiposInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EstadoCreateWithoutTiposInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutTiposInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EstadoCreateOrConnectWithoutTiposInputObjectSchema).optional(),
			upsert: z.lazy(() => EstadoUpsertWithoutTiposInputObjectSchema).optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => EstadoUpdateToOneWithWhereWithoutTiposInputObjectSchema),
					z.lazy(() => EstadoUpdateWithoutTiposInputObjectSchema),
					z.lazy(() => EstadoUncheckedUpdateWithoutTiposInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EstadoUpdateOneRequiredWithoutTiposNestedInputObjectSchema: z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutTiposNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutTiposNestedInput>;
export const EstadoUpdateOneRequiredWithoutTiposNestedInputObjectZodSchema = makeSchema();
