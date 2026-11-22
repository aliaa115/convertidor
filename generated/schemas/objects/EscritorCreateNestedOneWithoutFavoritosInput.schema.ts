import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateOrConnectWithoutFavoritosInputObjectSchema as EscritorCreateOrConnectWithoutFavoritosInputObjectSchema } from "./EscritorCreateOrConnectWithoutFavoritosInput.schema.ts";
import { EscritorCreateWithoutFavoritosInputObjectSchema as EscritorCreateWithoutFavoritosInputObjectSchema } from "./EscritorCreateWithoutFavoritosInput.schema.ts";
import { EscritorUncheckedCreateWithoutFavoritosInputObjectSchema as EscritorUncheckedCreateWithoutFavoritosInputObjectSchema } from "./EscritorUncheckedCreateWithoutFavoritosInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EscritorCreateWithoutFavoritosInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutFavoritosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EscritorCreateOrConnectWithoutFavoritosInputObjectSchema).optional(),
			connect: z.lazy(() => EscritorWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EscritorCreateNestedOneWithoutFavoritosInputObjectSchema: z.ZodType<Prisma.EscritorCreateNestedOneWithoutFavoritosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateNestedOneWithoutFavoritosInput>;
export const EscritorCreateNestedOneWithoutFavoritosInputObjectZodSchema = makeSchema();
