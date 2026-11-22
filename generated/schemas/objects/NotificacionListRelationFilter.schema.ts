import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NotificacionWhereInputObjectSchema as NotificacionWhereInputObjectSchema } from "./NotificacionWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			every: z.lazy(() => NotificacionWhereInputObjectSchema).optional(),
			some: z.lazy(() => NotificacionWhereInputObjectSchema).optional(),
			none: z.lazy(() => NotificacionWhereInputObjectSchema).optional(),
		})
		.strict();
export const NotificacionListRelationFilterObjectSchema: z.ZodType<Prisma.NotificacionListRelationFilter> =
	makeSchema() as unknown as z.ZodType<Prisma.NotificacionListRelationFilter>;
export const NotificacionListRelationFilterObjectZodSchema = makeSchema();
