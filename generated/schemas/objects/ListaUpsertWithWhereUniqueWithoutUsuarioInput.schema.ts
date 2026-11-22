import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaCreateWithoutUsuarioInputObjectSchema as ListaCreateWithoutUsuarioInputObjectSchema } from "./ListaCreateWithoutUsuarioInput.schema.ts";
import { ListaUncheckedCreateWithoutUsuarioInputObjectSchema as ListaUncheckedCreateWithoutUsuarioInputObjectSchema } from "./ListaUncheckedCreateWithoutUsuarioInput.schema.ts";
import { ListaUncheckedUpdateWithoutUsuarioInputObjectSchema as ListaUncheckedUpdateWithoutUsuarioInputObjectSchema } from "./ListaUncheckedUpdateWithoutUsuarioInput.schema.ts";
import { ListaUpdateWithoutUsuarioInputObjectSchema as ListaUpdateWithoutUsuarioInputObjectSchema } from "./ListaUpdateWithoutUsuarioInput.schema.ts";
import { ListaWhereUniqueInputObjectSchema as ListaWhereUniqueInputObjectSchema } from "./ListaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => ListaUpdateWithoutUsuarioInputObjectSchema),
				z.lazy(() => ListaUncheckedUpdateWithoutUsuarioInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => ListaCreateWithoutUsuarioInputObjectSchema),
				z.lazy(() => ListaUncheckedCreateWithoutUsuarioInputObjectSchema),
			]),
		})
		.strict();
export const ListaUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.ListaUpsertWithWhereUniqueWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaUpsertWithWhereUniqueWithoutUsuarioInput>;
export const ListaUpsertWithWhereUniqueWithoutUsuarioInputObjectZodSchema =
	makeSchema();
