import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaLibroCreateWithoutEstadoInputObjectSchema as ListaLibroCreateWithoutEstadoInputObjectSchema } from "./ListaLibroCreateWithoutEstadoInput.schema.ts";
import { ListaLibroUncheckedCreateWithoutEstadoInputObjectSchema as ListaLibroUncheckedCreateWithoutEstadoInputObjectSchema } from "./ListaLibroUncheckedCreateWithoutEstadoInput.schema.ts";
import { ListaLibroWhereUniqueInputObjectSchema as ListaLibroWhereUniqueInputObjectSchema } from "./ListaLibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaLibroWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => ListaLibroCreateWithoutEstadoInputObjectSchema), z.lazy(() => ListaLibroUncheckedCreateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const ListaLibroCreateOrConnectWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ListaLibroCreateOrConnectWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroCreateOrConnectWithoutEstadoInput>;
export const ListaLibroCreateOrConnectWithoutEstadoInputObjectZodSchema = makeSchema();
