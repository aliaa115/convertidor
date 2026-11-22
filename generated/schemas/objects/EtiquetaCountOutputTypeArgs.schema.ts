import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EtiquetaCountOutputTypeSelectObjectSchema as EtiquetaCountOutputTypeSelectObjectSchema } from "./EtiquetaCountOutputTypeSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z
				.lazy(() => EtiquetaCountOutputTypeSelectObjectSchema)
				.optional(),
		})
		.strict();
export const EtiquetaCountOutputTypeArgsObjectSchema = makeSchema();
export const EtiquetaCountOutputTypeArgsObjectZodSchema = makeSchema();
