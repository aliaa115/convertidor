import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaUncheckedUpdateWithoutUsuarioInputObjectSchema as ListaUncheckedUpdateWithoutUsuarioInputObjectSchema } from "./ListaUncheckedUpdateWithoutUsuarioInput.schema.ts";
import { ListaUpdateWithoutUsuarioInputObjectSchema as ListaUpdateWithoutUsuarioInputObjectSchema } from "./ListaUpdateWithoutUsuarioInput.schema.ts";
import { ListaWhereUniqueInputObjectSchema as ListaWhereUniqueInputObjectSchema } from "./ListaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => ListaUpdateWithoutUsuarioInputObjectSchema),
				z.lazy(() => ListaUncheckedUpdateWithoutUsuarioInputObjectSchema),
			]),
		})
		.strict();
export const ListaUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.ListaUpdateWithWhereUniqueWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaUpdateWithWhereUniqueWithoutUsuarioInput>;
export const ListaUpdateWithWhereUniqueWithoutUsuarioInputObjectZodSchema =
	makeSchema();
