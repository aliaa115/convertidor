import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateWithoutAvatarInputObjectSchema as EscritorCreateWithoutAvatarInputObjectSchema } from "./EscritorCreateWithoutAvatarInput.schema.ts";
import { EscritorUncheckedCreateWithoutAvatarInputObjectSchema as EscritorUncheckedCreateWithoutAvatarInputObjectSchema } from "./EscritorUncheckedCreateWithoutAvatarInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => EscritorCreateWithoutAvatarInputObjectSchema),
				z.lazy(() => EscritorUncheckedCreateWithoutAvatarInputObjectSchema),
			]),
		})
		.strict();
export const EscritorCreateOrConnectWithoutAvatarInputObjectSchema: z.ZodType<Prisma.EscritorCreateOrConnectWithoutAvatarInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateOrConnectWithoutAvatarInput>;
export const EscritorCreateOrConnectWithoutAvatarInputObjectZodSchema =
	makeSchema();
