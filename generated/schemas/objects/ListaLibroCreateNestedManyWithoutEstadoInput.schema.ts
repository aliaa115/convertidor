import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaLibroCreateManyEstadoInputEnvelopeObjectSchema as ListaLibroCreateManyEstadoInputEnvelopeObjectSchema } from "./ListaLibroCreateManyEstadoInputEnvelope.schema.ts";
import { ListaLibroCreateOrConnectWithoutEstadoInputObjectSchema as ListaLibroCreateOrConnectWithoutEstadoInputObjectSchema } from "./ListaLibroCreateOrConnectWithoutEstadoInput.schema.ts";
import { ListaLibroCreateWithoutEstadoInputObjectSchema as ListaLibroCreateWithoutEstadoInputObjectSchema } from "./ListaLibroCreateWithoutEstadoInput.schema.ts";
import { ListaLibroUncheckedCreateWithoutEstadoInputObjectSchema as ListaLibroUncheckedCreateWithoutEstadoInputObjectSchema } from "./ListaLibroUncheckedCreateWithoutEstadoInput.schema.ts";
import { ListaLibroWhereUniqueInputObjectSchema as ListaLibroWhereUniqueInputObjectSchema } from "./ListaLibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ListaLibroCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => ListaLibroCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => ListaLibroUncheckedCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => ListaLibroUncheckedCreateWithoutEstadoInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => ListaLibroCreateOrConnectWithoutEstadoInputObjectSchema), z.lazy(() => ListaLibroCreateOrConnectWithoutEstadoInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => ListaLibroCreateManyEstadoInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => ListaLibroWhereUniqueInputObjectSchema), z.lazy(() => ListaLibroWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const ListaLibroCreateNestedManyWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ListaLibroCreateNestedManyWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroCreateNestedManyWithoutEstadoInput>;
export const ListaLibroCreateNestedManyWithoutEstadoInputObjectZodSchema = makeSchema();
