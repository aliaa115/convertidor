import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NotaAutorUncheckedUpdateWithoutCapituloInputObjectSchema as NotaAutorUncheckedUpdateWithoutCapituloInputObjectSchema } from "./NotaAutorUncheckedUpdateWithoutCapituloInput.schema.ts";
import { NotaAutorUpdateWithoutCapituloInputObjectSchema as NotaAutorUpdateWithoutCapituloInputObjectSchema } from "./NotaAutorUpdateWithoutCapituloInput.schema.ts";
import { NotaAutorWhereUniqueInputObjectSchema as NotaAutorWhereUniqueInputObjectSchema } from "./NotaAutorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => NotaAutorWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => NotaAutorUpdateWithoutCapituloInputObjectSchema),
				z.lazy(() => NotaAutorUncheckedUpdateWithoutCapituloInputObjectSchema),
			]),
		})
		.strict();
export const NotaAutorUpdateWithWhereUniqueWithoutCapituloInputObjectSchema: z.ZodType<Prisma.NotaAutorUpdateWithWhereUniqueWithoutCapituloInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorUpdateWithWhereUniqueWithoutCapituloInput>;
export const NotaAutorUpdateWithWhereUniqueWithoutCapituloInputObjectZodSchema =
	makeSchema();
