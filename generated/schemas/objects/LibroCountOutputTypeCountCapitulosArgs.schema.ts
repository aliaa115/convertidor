import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloWhereInputObjectSchema as CapituloWhereInputObjectSchema } from "./CapituloWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => CapituloWhereInputObjectSchema).optional(),
		})
		.strict();
export const LibroCountOutputTypeCountCapitulosArgsObjectSchema = makeSchema();
export const LibroCountOutputTypeCountCapitulosArgsObjectZodSchema =
	makeSchema();
