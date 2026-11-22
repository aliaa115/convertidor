import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaCreateOrConnectWithoutLibrosInputObjectSchema as ListaCreateOrConnectWithoutLibrosInputObjectSchema } from "./ListaCreateOrConnectWithoutLibrosInput.schema.ts";
import { ListaCreateWithoutLibrosInputObjectSchema as ListaCreateWithoutLibrosInputObjectSchema } from "./ListaCreateWithoutLibrosInput.schema.ts";
import { ListaUncheckedCreateWithoutLibrosInputObjectSchema as ListaUncheckedCreateWithoutLibrosInputObjectSchema } from "./ListaUncheckedCreateWithoutLibrosInput.schema.ts";
import { ListaUncheckedUpdateWithoutLibrosInputObjectSchema as ListaUncheckedUpdateWithoutLibrosInputObjectSchema } from "./ListaUncheckedUpdateWithoutLibrosInput.schema.ts";
import { ListaUpdateToOneWithWhereWithoutLibrosInputObjectSchema as ListaUpdateToOneWithWhereWithoutLibrosInputObjectSchema } from "./ListaUpdateToOneWithWhereWithoutLibrosInput.schema.ts";
import { ListaUpdateWithoutLibrosInputObjectSchema as ListaUpdateWithoutLibrosInputObjectSchema } from "./ListaUpdateWithoutLibrosInput.schema.ts";
import { ListaUpsertWithoutLibrosInputObjectSchema as ListaUpsertWithoutLibrosInputObjectSchema } from "./ListaUpsertWithoutLibrosInput.schema.ts";
import { ListaWhereInputObjectSchema as ListaWhereInputObjectSchema } from "./ListaWhereInput.schema.ts";
import { ListaWhereUniqueInputObjectSchema as ListaWhereUniqueInputObjectSchema } from "./ListaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => ListaCreateWithoutLibrosInputObjectSchema), z.lazy(() => ListaUncheckedCreateWithoutLibrosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => ListaCreateOrConnectWithoutLibrosInputObjectSchema).optional(),
			upsert: z.lazy(() => ListaUpsertWithoutLibrosInputObjectSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => ListaWhereInputObjectSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => ListaWhereInputObjectSchema)]).optional(),
			connect: z.lazy(() => ListaWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => ListaUpdateToOneWithWhereWithoutLibrosInputObjectSchema),
					z.lazy(() => ListaUpdateWithoutLibrosInputObjectSchema),
					z.lazy(() => ListaUncheckedUpdateWithoutLibrosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const ListaUpdateOneWithoutLibrosNestedInputObjectSchema: z.ZodType<Prisma.ListaUpdateOneWithoutLibrosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaUpdateOneWithoutLibrosNestedInput>;
export const ListaUpdateOneWithoutLibrosNestedInputObjectZodSchema = makeSchema();
