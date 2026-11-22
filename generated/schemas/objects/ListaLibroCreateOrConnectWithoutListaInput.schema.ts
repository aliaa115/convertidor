import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaLibroCreateWithoutListaInputObjectSchema as ListaLibroCreateWithoutListaInputObjectSchema } from "./ListaLibroCreateWithoutListaInput.schema.ts";
import { ListaLibroUncheckedCreateWithoutListaInputObjectSchema as ListaLibroUncheckedCreateWithoutListaInputObjectSchema } from "./ListaLibroUncheckedCreateWithoutListaInput.schema.ts";
import { ListaLibroWhereUniqueInputObjectSchema as ListaLibroWhereUniqueInputObjectSchema } from "./ListaLibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaLibroWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => ListaLibroCreateWithoutListaInputObjectSchema), z.lazy(() => ListaLibroUncheckedCreateWithoutListaInputObjectSchema)]),
		})
		.strict();
export const ListaLibroCreateOrConnectWithoutListaInputObjectSchema: z.ZodType<Prisma.ListaLibroCreateOrConnectWithoutListaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroCreateOrConnectWithoutListaInput>;
export const ListaLibroCreateOrConnectWithoutListaInputObjectZodSchema = makeSchema();
