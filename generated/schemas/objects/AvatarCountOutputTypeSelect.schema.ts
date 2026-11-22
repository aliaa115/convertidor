import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { AvatarCountOutputTypeCountEscritoresArgsObjectSchema as AvatarCountOutputTypeCountEscritoresArgsObjectSchema } from "./AvatarCountOutputTypeCountEscritoresArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			escritores: z
				.union([
					z.boolean(),
					z.lazy(() => AvatarCountOutputTypeCountEscritoresArgsObjectSchema),
				])
				.optional(),
		})
		.strict();
export const AvatarCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.AvatarCountOutputTypeSelect> =
	makeSchema() as unknown as z.ZodType<Prisma.AvatarCountOutputTypeSelect>;
export const AvatarCountOutputTypeSelectObjectZodSchema = makeSchema();
