import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaCountOutputTypeCountLibrosArgsObjectSchema as ListaCountOutputTypeCountLibrosArgsObjectSchema } from "./ListaCountOutputTypeCountLibrosArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			libros: z
				.union([
					z.boolean(),
					z.lazy(() => ListaCountOutputTypeCountLibrosArgsObjectSchema),
				])
				.optional(),
		})
		.strict();
export const ListaCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ListaCountOutputTypeSelect> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaCountOutputTypeSelect>;
export const ListaCountOutputTypeSelectObjectZodSchema = makeSchema();
