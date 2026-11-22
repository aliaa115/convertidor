import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaLibroCreateManyListaInputEnvelopeObjectSchema as ListaLibroCreateManyListaInputEnvelopeObjectSchema } from "./ListaLibroCreateManyListaInputEnvelope.schema.ts";
import { ListaLibroCreateOrConnectWithoutListaInputObjectSchema as ListaLibroCreateOrConnectWithoutListaInputObjectSchema } from "./ListaLibroCreateOrConnectWithoutListaInput.schema.ts";
import { ListaLibroCreateWithoutListaInputObjectSchema as ListaLibroCreateWithoutListaInputObjectSchema } from "./ListaLibroCreateWithoutListaInput.schema.ts";
import { ListaLibroUncheckedCreateWithoutListaInputObjectSchema as ListaLibroUncheckedCreateWithoutListaInputObjectSchema } from "./ListaLibroUncheckedCreateWithoutListaInput.schema.ts";
import { ListaLibroWhereUniqueInputObjectSchema as ListaLibroWhereUniqueInputObjectSchema } from "./ListaLibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ListaLibroCreateWithoutListaInputObjectSchema),
					z.lazy(() => ListaLibroCreateWithoutListaInputObjectSchema).array(),
					z.lazy(() => ListaLibroUncheckedCreateWithoutListaInputObjectSchema),
					z.lazy(() => ListaLibroUncheckedCreateWithoutListaInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => ListaLibroCreateOrConnectWithoutListaInputObjectSchema), z.lazy(() => ListaLibroCreateOrConnectWithoutListaInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => ListaLibroCreateManyListaInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => ListaLibroWhereUniqueInputObjectSchema), z.lazy(() => ListaLibroWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const ListaLibroCreateNestedManyWithoutListaInputObjectSchema: z.ZodType<Prisma.ListaLibroCreateNestedManyWithoutListaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroCreateNestedManyWithoutListaInput>;
export const ListaLibroCreateNestedManyWithoutListaInputObjectZodSchema = makeSchema();
