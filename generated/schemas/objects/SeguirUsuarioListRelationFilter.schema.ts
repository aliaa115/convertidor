import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SeguirUsuarioWhereInputObjectSchema as SeguirUsuarioWhereInputObjectSchema } from "./SeguirUsuarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			every: z.lazy(() => SeguirUsuarioWhereInputObjectSchema).optional(),
			some: z.lazy(() => SeguirUsuarioWhereInputObjectSchema).optional(),
			none: z.lazy(() => SeguirUsuarioWhereInputObjectSchema).optional(),
		})
		.strict();
export const SeguirUsuarioListRelationFilterObjectSchema: z.ZodType<Prisma.SeguirUsuarioListRelationFilter> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioListRelationFilter>;
export const SeguirUsuarioListRelationFilterObjectZodSchema = makeSchema();
