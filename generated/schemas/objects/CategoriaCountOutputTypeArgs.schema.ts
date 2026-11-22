import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CategoriaCountOutputTypeSelectObjectSchema as CategoriaCountOutputTypeSelectObjectSchema } from "./CategoriaCountOutputTypeSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z
				.lazy(() => CategoriaCountOutputTypeSelectObjectSchema)
				.optional(),
		})
		.strict();
export const CategoriaCountOutputTypeArgsObjectSchema = makeSchema();
export const CategoriaCountOutputTypeArgsObjectZodSchema = makeSchema();
