import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaCreateOrConnectWithoutLibrosInputObjectSchema as ListaCreateOrConnectWithoutLibrosInputObjectSchema } from "./ListaCreateOrConnectWithoutLibrosInput.schema.ts";
import { ListaCreateWithoutLibrosInputObjectSchema as ListaCreateWithoutLibrosInputObjectSchema } from "./ListaCreateWithoutLibrosInput.schema.ts";
import { ListaUncheckedCreateWithoutLibrosInputObjectSchema as ListaUncheckedCreateWithoutLibrosInputObjectSchema } from "./ListaUncheckedCreateWithoutLibrosInput.schema.ts";
import { ListaWhereUniqueInputObjectSchema as ListaWhereUniqueInputObjectSchema } from "./ListaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ListaCreateWithoutLibrosInputObjectSchema),
					z.lazy(() => ListaUncheckedCreateWithoutLibrosInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => ListaCreateOrConnectWithoutLibrosInputObjectSchema)
				.optional(),
			connect: z.lazy(() => ListaWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const ListaCreateNestedOneWithoutLibrosInputObjectSchema: z.ZodType<Prisma.ListaCreateNestedOneWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaCreateNestedOneWithoutLibrosInput>;
export const ListaCreateNestedOneWithoutLibrosInputObjectZodSchema =
	makeSchema();
