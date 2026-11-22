import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { NotaAutorCreateWithoutCapituloInputObjectSchema as NotaAutorCreateWithoutCapituloInputObjectSchema } from "./NotaAutorCreateWithoutCapituloInput.schema.ts";
import { NotaAutorUncheckedCreateWithoutCapituloInputObjectSchema as NotaAutorUncheckedCreateWithoutCapituloInputObjectSchema } from "./NotaAutorUncheckedCreateWithoutCapituloInput.schema.ts";
import { NotaAutorUncheckedUpdateWithoutCapituloInputObjectSchema as NotaAutorUncheckedUpdateWithoutCapituloInputObjectSchema } from "./NotaAutorUncheckedUpdateWithoutCapituloInput.schema.ts";
import { NotaAutorUpdateWithoutCapituloInputObjectSchema as NotaAutorUpdateWithoutCapituloInputObjectSchema } from "./NotaAutorUpdateWithoutCapituloInput.schema.ts";
import { NotaAutorWhereUniqueInputObjectSchema as NotaAutorWhereUniqueInputObjectSchema } from "./NotaAutorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => NotaAutorWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => NotaAutorUpdateWithoutCapituloInputObjectSchema), z.lazy(() => NotaAutorUncheckedUpdateWithoutCapituloInputObjectSchema)]),
			create: z.union([z.lazy(() => NotaAutorCreateWithoutCapituloInputObjectSchema), z.lazy(() => NotaAutorUncheckedCreateWithoutCapituloInputObjectSchema)]),
		})
		.strict();
export const NotaAutorUpsertWithWhereUniqueWithoutCapituloInputObjectSchema: z.ZodType<Prisma.NotaAutorUpsertWithWhereUniqueWithoutCapituloInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorUpsertWithWhereUniqueWithoutCapituloInput>;
export const NotaAutorUpsertWithWhereUniqueWithoutCapituloInputObjectZodSchema = makeSchema();
