import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioCreateWithoutPadreInputObjectSchema as ComentarioCreateWithoutPadreInputObjectSchema } from "./ComentarioCreateWithoutPadreInput.schema.ts";
import { ComentarioUncheckedCreateWithoutPadreInputObjectSchema as ComentarioUncheckedCreateWithoutPadreInputObjectSchema } from "./ComentarioUncheckedCreateWithoutPadreInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => ComentarioCreateWithoutPadreInputObjectSchema),
				z.lazy(() => ComentarioUncheckedCreateWithoutPadreInputObjectSchema),
			]),
		})
		.strict();
export const ComentarioCreateOrConnectWithoutPadreInputObjectSchema: z.ZodType<Prisma.ComentarioCreateOrConnectWithoutPadreInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioCreateOrConnectWithoutPadreInput>;
export const ComentarioCreateOrConnectWithoutPadreInputObjectZodSchema =
	makeSchema();
