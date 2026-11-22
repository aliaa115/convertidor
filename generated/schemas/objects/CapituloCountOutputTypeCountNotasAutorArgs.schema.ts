import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NotaAutorWhereInputObjectSchema as NotaAutorWhereInputObjectSchema } from "./NotaAutorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => NotaAutorWhereInputObjectSchema).optional(),
		})
		.strict();
export const CapituloCountOutputTypeCountNotasAutorArgsObjectSchema =
	makeSchema();
export const CapituloCountOutputTypeCountNotasAutorArgsObjectZodSchema =
	makeSchema();
