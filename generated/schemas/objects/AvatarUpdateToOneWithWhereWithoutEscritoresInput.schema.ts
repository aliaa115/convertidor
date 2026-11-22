import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { AvatarUncheckedUpdateWithoutEscritoresInputObjectSchema as AvatarUncheckedUpdateWithoutEscritoresInputObjectSchema } from "./AvatarUncheckedUpdateWithoutEscritoresInput.schema.ts";
import { AvatarUpdateWithoutEscritoresInputObjectSchema as AvatarUpdateWithoutEscritoresInputObjectSchema } from "./AvatarUpdateWithoutEscritoresInput.schema.ts";
import { AvatarWhereInputObjectSchema as AvatarWhereInputObjectSchema } from "./AvatarWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => AvatarWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => AvatarUpdateWithoutEscritoresInputObjectSchema),
				z.lazy(() => AvatarUncheckedUpdateWithoutEscritoresInputObjectSchema),
			]),
		})
		.strict();
export const AvatarUpdateToOneWithWhereWithoutEscritoresInputObjectSchema: z.ZodType<Prisma.AvatarUpdateToOneWithWhereWithoutEscritoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.AvatarUpdateToOneWithWhereWithoutEscritoresInput>;
export const AvatarUpdateToOneWithWhereWithoutEscritoresInputObjectZodSchema =
	makeSchema();
