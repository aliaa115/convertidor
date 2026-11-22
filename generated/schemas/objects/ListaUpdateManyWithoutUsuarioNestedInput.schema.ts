import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaCreateManyUsuarioInputEnvelopeObjectSchema as ListaCreateManyUsuarioInputEnvelopeObjectSchema } from "./ListaCreateManyUsuarioInputEnvelope.schema.ts";
import { ListaCreateOrConnectWithoutUsuarioInputObjectSchema as ListaCreateOrConnectWithoutUsuarioInputObjectSchema } from "./ListaCreateOrConnectWithoutUsuarioInput.schema.ts";
import { ListaCreateWithoutUsuarioInputObjectSchema as ListaCreateWithoutUsuarioInputObjectSchema } from "./ListaCreateWithoutUsuarioInput.schema.ts";
import { ListaScalarWhereInputObjectSchema as ListaScalarWhereInputObjectSchema } from "./ListaScalarWhereInput.schema.ts";
import { ListaUncheckedCreateWithoutUsuarioInputObjectSchema as ListaUncheckedCreateWithoutUsuarioInputObjectSchema } from "./ListaUncheckedCreateWithoutUsuarioInput.schema.ts";
import { ListaUpdateManyWithWhereWithoutUsuarioInputObjectSchema as ListaUpdateManyWithWhereWithoutUsuarioInputObjectSchema } from "./ListaUpdateManyWithWhereWithoutUsuarioInput.schema.ts";
import { ListaUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema as ListaUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema } from "./ListaUpdateWithWhereUniqueWithoutUsuarioInput.schema.ts";
import { ListaUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema as ListaUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema } from "./ListaUpsertWithWhereUniqueWithoutUsuarioInput.schema.ts";
import { ListaWhereUniqueInputObjectSchema as ListaWhereUniqueInputObjectSchema } from "./ListaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ListaCreateWithoutUsuarioInputObjectSchema),
					z.lazy(() => ListaCreateWithoutUsuarioInputObjectSchema).array(),
					z.lazy(() => ListaUncheckedCreateWithoutUsuarioInputObjectSchema),
					z.lazy(() => ListaUncheckedCreateWithoutUsuarioInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => ListaCreateOrConnectWithoutUsuarioInputObjectSchema), z.lazy(() => ListaCreateOrConnectWithoutUsuarioInputObjectSchema).array()]).optional(),
			upsert: z.union([z.lazy(() => ListaUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema), z.lazy(() => ListaUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => ListaCreateManyUsuarioInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => ListaWhereUniqueInputObjectSchema), z.lazy(() => ListaWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => ListaWhereUniqueInputObjectSchema), z.lazy(() => ListaWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => ListaWhereUniqueInputObjectSchema), z.lazy(() => ListaWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => ListaWhereUniqueInputObjectSchema), z.lazy(() => ListaWhereUniqueInputObjectSchema).array()]).optional(),
			update: z.union([z.lazy(() => ListaUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema), z.lazy(() => ListaUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema).array()]).optional(),
			updateMany: z.union([z.lazy(() => ListaUpdateManyWithWhereWithoutUsuarioInputObjectSchema), z.lazy(() => ListaUpdateManyWithWhereWithoutUsuarioInputObjectSchema).array()]).optional(),
			deleteMany: z.union([z.lazy(() => ListaScalarWhereInputObjectSchema), z.lazy(() => ListaScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const ListaUpdateManyWithoutUsuarioNestedInputObjectSchema: z.ZodType<Prisma.ListaUpdateManyWithoutUsuarioNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaUpdateManyWithoutUsuarioNestedInput>;
export const ListaUpdateManyWithoutUsuarioNestedInputObjectZodSchema = makeSchema();
