import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaCreateWithoutLibrosInputObjectSchema as ListaCreateWithoutLibrosInputObjectSchema } from "./ListaCreateWithoutLibrosInput.schema.ts";
import { ListaUncheckedCreateWithoutLibrosInputObjectSchema as ListaUncheckedCreateWithoutLibrosInputObjectSchema } from "./ListaUncheckedCreateWithoutLibrosInput.schema.ts";
import { ListaWhereUniqueInputObjectSchema as ListaWhereUniqueInputObjectSchema } from "./ListaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => ListaCreateWithoutLibrosInputObjectSchema),
				z.lazy(() => ListaUncheckedCreateWithoutLibrosInputObjectSchema),
			]),
		})
		.strict();
export const ListaCreateOrConnectWithoutLibrosInputObjectSchema: z.ZodType<Prisma.ListaCreateOrConnectWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaCreateOrConnectWithoutLibrosInput>;
export const ListaCreateOrConnectWithoutLibrosInputObjectZodSchema =
	makeSchema();
