import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { AvatarCreateWithoutEscritoresInputObjectSchema as AvatarCreateWithoutEscritoresInputObjectSchema } from "./AvatarCreateWithoutEscritoresInput.schema.ts";
import { AvatarUncheckedCreateWithoutEscritoresInputObjectSchema as AvatarUncheckedCreateWithoutEscritoresInputObjectSchema } from "./AvatarUncheckedCreateWithoutEscritoresInput.schema.ts";
import { AvatarUncheckedUpdateWithoutEscritoresInputObjectSchema as AvatarUncheckedUpdateWithoutEscritoresInputObjectSchema } from "./AvatarUncheckedUpdateWithoutEscritoresInput.schema.ts";
import { AvatarUpdateWithoutEscritoresInputObjectSchema as AvatarUpdateWithoutEscritoresInputObjectSchema } from "./AvatarUpdateWithoutEscritoresInput.schema.ts";
import { AvatarWhereInputObjectSchema as AvatarWhereInputObjectSchema } from "./AvatarWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => AvatarUpdateWithoutEscritoresInputObjectSchema), z.lazy(() => AvatarUncheckedUpdateWithoutEscritoresInputObjectSchema)]),
			create: z.union([z.lazy(() => AvatarCreateWithoutEscritoresInputObjectSchema), z.lazy(() => AvatarUncheckedCreateWithoutEscritoresInputObjectSchema)]),
			where: z.lazy(() => AvatarWhereInputObjectSchema).optional(),
		})
		.strict();
export const AvatarUpsertWithoutEscritoresInputObjectSchema: z.ZodType<Prisma.AvatarUpsertWithoutEscritoresInput> = makeSchema() as unknown as z.ZodType<Prisma.AvatarUpsertWithoutEscritoresInput>;
export const AvatarUpsertWithoutEscritoresInputObjectZodSchema = makeSchema();
