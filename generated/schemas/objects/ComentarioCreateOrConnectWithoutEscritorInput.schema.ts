import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioCreateWithoutEscritorInputObjectSchema as ComentarioCreateWithoutEscritorInputObjectSchema } from "./ComentarioCreateWithoutEscritorInput.schema.ts";
import { ComentarioUncheckedCreateWithoutEscritorInputObjectSchema as ComentarioUncheckedCreateWithoutEscritorInputObjectSchema } from "./ComentarioUncheckedCreateWithoutEscritorInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => ComentarioCreateWithoutEscritorInputObjectSchema),
				z.lazy(() => ComentarioUncheckedCreateWithoutEscritorInputObjectSchema),
			]),
		})
		.strict();
export const ComentarioCreateOrConnectWithoutEscritorInputObjectSchema: z.ZodType<Prisma.ComentarioCreateOrConnectWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioCreateOrConnectWithoutEscritorInput>;
export const ComentarioCreateOrConnectWithoutEscritorInputObjectZodSchema =
	makeSchema();
