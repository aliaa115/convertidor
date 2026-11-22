import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateOrConnectWithoutFavoritosInputObjectSchema as EscritorCreateOrConnectWithoutFavoritosInputObjectSchema } from "./EscritorCreateOrConnectWithoutFavoritosInput.schema.ts";
import { EscritorCreateWithoutFavoritosInputObjectSchema as EscritorCreateWithoutFavoritosInputObjectSchema } from "./EscritorCreateWithoutFavoritosInput.schema.ts";
import { EscritorUncheckedCreateWithoutFavoritosInputObjectSchema as EscritorUncheckedCreateWithoutFavoritosInputObjectSchema } from "./EscritorUncheckedCreateWithoutFavoritosInput.schema.ts";
import { EscritorUncheckedUpdateWithoutFavoritosInputObjectSchema as EscritorUncheckedUpdateWithoutFavoritosInputObjectSchema } from "./EscritorUncheckedUpdateWithoutFavoritosInput.schema.ts";
import { EscritorUpdateToOneWithWhereWithoutFavoritosInputObjectSchema as EscritorUpdateToOneWithWhereWithoutFavoritosInputObjectSchema } from "./EscritorUpdateToOneWithWhereWithoutFavoritosInput.schema.ts";
import { EscritorUpdateWithoutFavoritosInputObjectSchema as EscritorUpdateWithoutFavoritosInputObjectSchema } from "./EscritorUpdateWithoutFavoritosInput.schema.ts";
import { EscritorUpsertWithoutFavoritosInputObjectSchema as EscritorUpsertWithoutFavoritosInputObjectSchema } from "./EscritorUpsertWithoutFavoritosInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EscritorCreateWithoutFavoritosInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutFavoritosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EscritorCreateOrConnectWithoutFavoritosInputObjectSchema).optional(),
			upsert: z.lazy(() => EscritorUpsertWithoutFavoritosInputObjectSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => EscritorWhereInputObjectSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => EscritorWhereInputObjectSchema)]).optional(),
			connect: z.lazy(() => EscritorWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => EscritorUpdateToOneWithWhereWithoutFavoritosInputObjectSchema),
					z.lazy(() => EscritorUpdateWithoutFavoritosInputObjectSchema),
					z.lazy(() => EscritorUncheckedUpdateWithoutFavoritosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EscritorUpdateOneWithoutFavoritosNestedInputObjectSchema: z.ZodType<Prisma.EscritorUpdateOneWithoutFavoritosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateOneWithoutFavoritosNestedInput>;
export const EscritorUpdateOneWithoutFavoritosNestedInputObjectZodSchema = makeSchema();
