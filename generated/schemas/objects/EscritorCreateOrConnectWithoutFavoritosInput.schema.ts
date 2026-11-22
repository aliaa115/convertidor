import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateWithoutFavoritosInputObjectSchema as EscritorCreateWithoutFavoritosInputObjectSchema } from "./EscritorCreateWithoutFavoritosInput.schema.ts";
import { EscritorUncheckedCreateWithoutFavoritosInputObjectSchema as EscritorUncheckedCreateWithoutFavoritosInputObjectSchema } from "./EscritorUncheckedCreateWithoutFavoritosInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => EscritorCreateWithoutFavoritosInputObjectSchema),
				z.lazy(() => EscritorUncheckedCreateWithoutFavoritosInputObjectSchema),
			]),
		})
		.strict();
export const EscritorCreateOrConnectWithoutFavoritosInputObjectSchema: z.ZodType<Prisma.EscritorCreateOrConnectWithoutFavoritosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateOrConnectWithoutFavoritosInput>;
export const EscritorCreateOrConnectWithoutFavoritosInputObjectZodSchema =
	makeSchema();
