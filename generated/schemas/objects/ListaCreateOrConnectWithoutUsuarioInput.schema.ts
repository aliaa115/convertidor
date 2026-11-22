import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaCreateWithoutUsuarioInputObjectSchema as ListaCreateWithoutUsuarioInputObjectSchema } from "./ListaCreateWithoutUsuarioInput.schema.ts";
import { ListaUncheckedCreateWithoutUsuarioInputObjectSchema as ListaUncheckedCreateWithoutUsuarioInputObjectSchema } from "./ListaUncheckedCreateWithoutUsuarioInput.schema.ts";
import { ListaWhereUniqueInputObjectSchema as ListaWhereUniqueInputObjectSchema } from "./ListaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => ListaCreateWithoutUsuarioInputObjectSchema),
				z.lazy(() => ListaUncheckedCreateWithoutUsuarioInputObjectSchema),
			]),
		})
		.strict();
export const ListaCreateOrConnectWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.ListaCreateOrConnectWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaCreateOrConnectWithoutUsuarioInput>;
export const ListaCreateOrConnectWithoutUsuarioInputObjectZodSchema =
	makeSchema();
