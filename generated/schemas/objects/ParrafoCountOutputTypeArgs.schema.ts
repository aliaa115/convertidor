import * as z from "zod";
import { ParrafoCountOutputTypeSelectObjectSchema as ParrafoCountOutputTypeSelectObjectSchema } from "./ParrafoCountOutputTypeSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => ParrafoCountOutputTypeSelectObjectSchema).optional(),
		})
		.strict();
export const ParrafoCountOutputTypeArgsObjectSchema = makeSchema();
export const ParrafoCountOutputTypeArgsObjectZodSchema = makeSchema();
