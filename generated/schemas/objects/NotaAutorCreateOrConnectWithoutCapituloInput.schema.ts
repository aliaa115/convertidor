import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { NotaAutorCreateWithoutCapituloInputObjectSchema as NotaAutorCreateWithoutCapituloInputObjectSchema } from "./NotaAutorCreateWithoutCapituloInput.schema.ts";
import { NotaAutorUncheckedCreateWithoutCapituloInputObjectSchema as NotaAutorUncheckedCreateWithoutCapituloInputObjectSchema } from "./NotaAutorUncheckedCreateWithoutCapituloInput.schema.ts";
import { NotaAutorWhereUniqueInputObjectSchema as NotaAutorWhereUniqueInputObjectSchema } from "./NotaAutorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => NotaAutorWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => NotaAutorCreateWithoutCapituloInputObjectSchema), z.lazy(() => NotaAutorUncheckedCreateWithoutCapituloInputObjectSchema)]),
		})
		.strict();
export const NotaAutorCreateOrConnectWithoutCapituloInputObjectSchema: z.ZodType<Prisma.NotaAutorCreateOrConnectWithoutCapituloInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorCreateOrConnectWithoutCapituloInput>;
export const NotaAutorCreateOrConnectWithoutCapituloInputObjectZodSchema = makeSchema();
