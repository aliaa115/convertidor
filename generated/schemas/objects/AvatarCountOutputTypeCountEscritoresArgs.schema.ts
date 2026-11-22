import * as z from "zod";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
		})
		.strict();
export const AvatarCountOutputTypeCountEscritoresArgsObjectSchema = makeSchema();
export const AvatarCountOutputTypeCountEscritoresArgsObjectZodSchema = makeSchema();
