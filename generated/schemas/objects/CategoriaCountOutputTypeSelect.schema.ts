import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CategoriaCountOutputTypeCountLibrosArgsObjectSchema as CategoriaCountOutputTypeCountLibrosArgsObjectSchema } from "./CategoriaCountOutputTypeCountLibrosArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			libros: z
				.union([
					z.boolean(),
					z.lazy(() => CategoriaCountOutputTypeCountLibrosArgsObjectSchema),
				])
				.optional(),
		})
		.strict();
export const CategoriaCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CategoriaCountOutputTypeSelect> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaCountOutputTypeSelect>;
export const CategoriaCountOutputTypeSelectObjectZodSchema = makeSchema();
