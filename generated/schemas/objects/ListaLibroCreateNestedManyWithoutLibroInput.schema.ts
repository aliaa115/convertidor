import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaLibroCreateManyLibroInputEnvelopeObjectSchema as ListaLibroCreateManyLibroInputEnvelopeObjectSchema } from "./ListaLibroCreateManyLibroInputEnvelope.schema.ts";
import { ListaLibroCreateOrConnectWithoutLibroInputObjectSchema as ListaLibroCreateOrConnectWithoutLibroInputObjectSchema } from "./ListaLibroCreateOrConnectWithoutLibroInput.schema.ts";
import { ListaLibroCreateWithoutLibroInputObjectSchema as ListaLibroCreateWithoutLibroInputObjectSchema } from "./ListaLibroCreateWithoutLibroInput.schema.ts";
import { ListaLibroUncheckedCreateWithoutLibroInputObjectSchema as ListaLibroUncheckedCreateWithoutLibroInputObjectSchema } from "./ListaLibroUncheckedCreateWithoutLibroInput.schema.ts";
import { ListaLibroWhereUniqueInputObjectSchema as ListaLibroWhereUniqueInputObjectSchema } from "./ListaLibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ListaLibroCreateWithoutLibroInputObjectSchema),
					z.lazy(() => ListaLibroCreateWithoutLibroInputObjectSchema).array(),
					z.lazy(() => ListaLibroUncheckedCreateWithoutLibroInputObjectSchema),
					z.lazy(() => ListaLibroUncheckedCreateWithoutLibroInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => ListaLibroCreateOrConnectWithoutLibroInputObjectSchema), z.lazy(() => ListaLibroCreateOrConnectWithoutLibroInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => ListaLibroCreateManyLibroInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => ListaLibroWhereUniqueInputObjectSchema), z.lazy(() => ListaLibroWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const ListaLibroCreateNestedManyWithoutLibroInputObjectSchema: z.ZodType<Prisma.ListaLibroCreateNestedManyWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroCreateNestedManyWithoutLibroInput>;
export const ListaLibroCreateNestedManyWithoutLibroInputObjectZodSchema = makeSchema();
