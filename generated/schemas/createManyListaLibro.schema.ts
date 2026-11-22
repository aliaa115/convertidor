import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ListaLibroCreateManyInputObjectSchema as ListaLibroCreateManyInputObjectSchema } from "./objects/ListaLibroCreateManyInput.schema.ts";

export const ListaLibroCreateManySchema: z.ZodType<Prisma.ListaLibroCreateManyArgs> =
	z
		.object({
			data: z.union([
				ListaLibroCreateManyInputObjectSchema,
				z.array(ListaLibroCreateManyInputObjectSchema),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.ListaLibroCreateManyArgs>;

export const ListaLibroCreateManyZodSchema = z
	.object({
		data: z.union([
			ListaLibroCreateManyInputObjectSchema,
			z.array(ListaLibroCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
