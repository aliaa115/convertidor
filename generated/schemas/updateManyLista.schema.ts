import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ListaUpdateManyMutationInputObjectSchema as ListaUpdateManyMutationInputObjectSchema } from "./objects/ListaUpdateManyMutationInput.schema.ts";
import { ListaWhereInputObjectSchema as ListaWhereInputObjectSchema } from "./objects/ListaWhereInput.schema.ts";

export const ListaUpdateManySchema: z.ZodType<Prisma.ListaUpdateManyArgs> = z
	.object({
		data: ListaUpdateManyMutationInputObjectSchema,
		where: ListaWhereInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ListaUpdateManyArgs>;

export const ListaUpdateManyZodSchema = z
	.object({
		data: ListaUpdateManyMutationInputObjectSchema,
		where: ListaWhereInputObjectSchema.optional(),
	})
	.strict();
