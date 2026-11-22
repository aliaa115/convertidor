import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorFindManySchema as EscritorFindManySchema } from "../findManyEscritor.schema.ts";
import { AvatarCountOutputTypeArgsObjectSchema as AvatarCountOutputTypeArgsObjectSchema } from "./AvatarCountOutputTypeArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			escritores: z
				.union([z.boolean(), z.lazy(() => EscritorFindManySchema)])
				.optional(),
			_count: z
				.union([
					z.boolean(),
					z.lazy(() => AvatarCountOutputTypeArgsObjectSchema),
				])
				.optional(),
		})
		.strict();
export const AvatarIncludeObjectSchema: z.ZodType<Prisma.AvatarInclude> =
	makeSchema() as unknown as z.ZodType<Prisma.AvatarInclude>;
export const AvatarIncludeObjectZodSchema = makeSchema();
