import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaCreateWithoutEstadoInputObjectSchema as ListaCreateWithoutEstadoInputObjectSchema } from "./ListaCreateWithoutEstadoInput.schema.ts";
import { ListaUncheckedCreateWithoutEstadoInputObjectSchema as ListaUncheckedCreateWithoutEstadoInputObjectSchema } from "./ListaUncheckedCreateWithoutEstadoInput.schema.ts";
import { ListaWhereUniqueInputObjectSchema as ListaWhereUniqueInputObjectSchema } from "./ListaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => ListaCreateWithoutEstadoInputObjectSchema),
				z.lazy(() => ListaUncheckedCreateWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const ListaCreateOrConnectWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ListaCreateOrConnectWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaCreateOrConnectWithoutEstadoInput>;
export const ListaCreateOrConnectWithoutEstadoInputObjectZodSchema =
	makeSchema();
