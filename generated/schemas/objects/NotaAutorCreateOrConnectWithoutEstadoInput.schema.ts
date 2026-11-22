import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { NotaAutorCreateWithoutEstadoInputObjectSchema as NotaAutorCreateWithoutEstadoInputObjectSchema } from "./NotaAutorCreateWithoutEstadoInput.schema.ts";
import { NotaAutorUncheckedCreateWithoutEstadoInputObjectSchema as NotaAutorUncheckedCreateWithoutEstadoInputObjectSchema } from "./NotaAutorUncheckedCreateWithoutEstadoInput.schema.ts";
import { NotaAutorWhereUniqueInputObjectSchema as NotaAutorWhereUniqueInputObjectSchema } from "./NotaAutorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => NotaAutorWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => NotaAutorCreateWithoutEstadoInputObjectSchema), z.lazy(() => NotaAutorUncheckedCreateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const NotaAutorCreateOrConnectWithoutEstadoInputObjectSchema: z.ZodType<Prisma.NotaAutorCreateOrConnectWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorCreateOrConnectWithoutEstadoInput>;
export const NotaAutorCreateOrConnectWithoutEstadoInputObjectZodSchema = makeSchema();
