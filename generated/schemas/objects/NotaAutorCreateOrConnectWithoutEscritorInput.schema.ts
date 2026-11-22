import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { NotaAutorCreateWithoutEscritorInputObjectSchema as NotaAutorCreateWithoutEscritorInputObjectSchema } from "./NotaAutorCreateWithoutEscritorInput.schema.ts";
import { NotaAutorUncheckedCreateWithoutEscritorInputObjectSchema as NotaAutorUncheckedCreateWithoutEscritorInputObjectSchema } from "./NotaAutorUncheckedCreateWithoutEscritorInput.schema.ts";
import { NotaAutorWhereUniqueInputObjectSchema as NotaAutorWhereUniqueInputObjectSchema } from "./NotaAutorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => NotaAutorWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => NotaAutorCreateWithoutEscritorInputObjectSchema), z.lazy(() => NotaAutorUncheckedCreateWithoutEscritorInputObjectSchema)]),
		})
		.strict();
export const NotaAutorCreateOrConnectWithoutEscritorInputObjectSchema: z.ZodType<Prisma.NotaAutorCreateOrConnectWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorCreateOrConnectWithoutEscritorInput>;
export const NotaAutorCreateOrConnectWithoutEscritorInputObjectZodSchema = makeSchema();
