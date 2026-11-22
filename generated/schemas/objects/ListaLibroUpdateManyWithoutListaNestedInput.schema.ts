import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaLibroCreateManyListaInputEnvelopeObjectSchema as ListaLibroCreateManyListaInputEnvelopeObjectSchema } from "./ListaLibroCreateManyListaInputEnvelope.schema.ts";
import { ListaLibroCreateOrConnectWithoutListaInputObjectSchema as ListaLibroCreateOrConnectWithoutListaInputObjectSchema } from "./ListaLibroCreateOrConnectWithoutListaInput.schema.ts";
import { ListaLibroCreateWithoutListaInputObjectSchema as ListaLibroCreateWithoutListaInputObjectSchema } from "./ListaLibroCreateWithoutListaInput.schema.ts";
import { ListaLibroScalarWhereInputObjectSchema as ListaLibroScalarWhereInputObjectSchema } from "./ListaLibroScalarWhereInput.schema.ts";
import { ListaLibroUncheckedCreateWithoutListaInputObjectSchema as ListaLibroUncheckedCreateWithoutListaInputObjectSchema } from "./ListaLibroUncheckedCreateWithoutListaInput.schema.ts";
import { ListaLibroUpdateManyWithWhereWithoutListaInputObjectSchema as ListaLibroUpdateManyWithWhereWithoutListaInputObjectSchema } from "./ListaLibroUpdateManyWithWhereWithoutListaInput.schema.ts";
import { ListaLibroUpdateWithWhereUniqueWithoutListaInputObjectSchema as ListaLibroUpdateWithWhereUniqueWithoutListaInputObjectSchema } from "./ListaLibroUpdateWithWhereUniqueWithoutListaInput.schema.ts";
import { ListaLibroUpsertWithWhereUniqueWithoutListaInputObjectSchema as ListaLibroUpsertWithWhereUniqueWithoutListaInputObjectSchema } from "./ListaLibroUpsertWithWhereUniqueWithoutListaInput.schema.ts";
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
			upsert: z.union([z.lazy(() => ListaLibroUpsertWithWhereUniqueWithoutListaInputObjectSchema), z.lazy(() => ListaLibroUpsertWithWhereUniqueWithoutListaInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => ListaLibroCreateManyListaInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => ListaLibroWhereUniqueInputObjectSchema), z.lazy(() => ListaLibroWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => ListaLibroWhereUniqueInputObjectSchema), z.lazy(() => ListaLibroWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => ListaLibroWhereUniqueInputObjectSchema), z.lazy(() => ListaLibroWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => ListaLibroWhereUniqueInputObjectSchema), z.lazy(() => ListaLibroWhereUniqueInputObjectSchema).array()]).optional(),
			update: z.union([z.lazy(() => ListaLibroUpdateWithWhereUniqueWithoutListaInputObjectSchema), z.lazy(() => ListaLibroUpdateWithWhereUniqueWithoutListaInputObjectSchema).array()]).optional(),
			updateMany: z.union([z.lazy(() => ListaLibroUpdateManyWithWhereWithoutListaInputObjectSchema), z.lazy(() => ListaLibroUpdateManyWithWhereWithoutListaInputObjectSchema).array()]).optional(),
			deleteMany: z.union([z.lazy(() => ListaLibroScalarWhereInputObjectSchema), z.lazy(() => ListaLibroScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const ListaLibroUpdateManyWithoutListaNestedInputObjectSchema: z.ZodType<Prisma.ListaLibroUpdateManyWithoutListaNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroUpdateManyWithoutListaNestedInput>;
export const ListaLibroUpdateManyWithoutListaNestedInputObjectZodSchema = makeSchema();
