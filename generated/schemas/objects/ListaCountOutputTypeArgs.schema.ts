import * as z from "zod";
import { ListaCountOutputTypeSelectObjectSchema as ListaCountOutputTypeSelectObjectSchema } from "./ListaCountOutputTypeSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => ListaCountOutputTypeSelectObjectSchema).optional(),
		})
		.strict();
export const ListaCountOutputTypeArgsObjectSchema = makeSchema();
export const ListaCountOutputTypeArgsObjectZodSchema = makeSchema();
