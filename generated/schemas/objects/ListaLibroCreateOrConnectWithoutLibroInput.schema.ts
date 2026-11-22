import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaLibroCreateWithoutLibroInputObjectSchema as ListaLibroCreateWithoutLibroInputObjectSchema } from "./ListaLibroCreateWithoutLibroInput.schema.ts";
import { ListaLibroUncheckedCreateWithoutLibroInputObjectSchema as ListaLibroUncheckedCreateWithoutLibroInputObjectSchema } from "./ListaLibroUncheckedCreateWithoutLibroInput.schema.ts";
import { ListaLibroWhereUniqueInputObjectSchema as ListaLibroWhereUniqueInputObjectSchema } from "./ListaLibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaLibroWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => ListaLibroCreateWithoutLibroInputObjectSchema),
				z.lazy(() => ListaLibroUncheckedCreateWithoutLibroInputObjectSchema),
			]),
		})
		.strict();
export const ListaLibroCreateOrConnectWithoutLibroInputObjectSchema: z.ZodType<Prisma.ListaLibroCreateOrConnectWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroCreateOrConnectWithoutLibroInput>;
export const ListaLibroCreateOrConnectWithoutLibroInputObjectZodSchema =
	makeSchema();
