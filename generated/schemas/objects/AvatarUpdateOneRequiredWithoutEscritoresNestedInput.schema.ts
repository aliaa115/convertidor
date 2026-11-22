import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { AvatarCreateOrConnectWithoutEscritoresInputObjectSchema as AvatarCreateOrConnectWithoutEscritoresInputObjectSchema } from "./AvatarCreateOrConnectWithoutEscritoresInput.schema.ts";
import { AvatarCreateWithoutEscritoresInputObjectSchema as AvatarCreateWithoutEscritoresInputObjectSchema } from "./AvatarCreateWithoutEscritoresInput.schema.ts";
import { AvatarUncheckedCreateWithoutEscritoresInputObjectSchema as AvatarUncheckedCreateWithoutEscritoresInputObjectSchema } from "./AvatarUncheckedCreateWithoutEscritoresInput.schema.ts";
import { AvatarUncheckedUpdateWithoutEscritoresInputObjectSchema as AvatarUncheckedUpdateWithoutEscritoresInputObjectSchema } from "./AvatarUncheckedUpdateWithoutEscritoresInput.schema.ts";
import { AvatarUpdateToOneWithWhereWithoutEscritoresInputObjectSchema as AvatarUpdateToOneWithWhereWithoutEscritoresInputObjectSchema } from "./AvatarUpdateToOneWithWhereWithoutEscritoresInput.schema.ts";
import { AvatarUpdateWithoutEscritoresInputObjectSchema as AvatarUpdateWithoutEscritoresInputObjectSchema } from "./AvatarUpdateWithoutEscritoresInput.schema.ts";
import { AvatarUpsertWithoutEscritoresInputObjectSchema as AvatarUpsertWithoutEscritoresInputObjectSchema } from "./AvatarUpsertWithoutEscritoresInput.schema.ts";
import { AvatarWhereUniqueInputObjectSchema as AvatarWhereUniqueInputObjectSchema } from "./AvatarWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => AvatarCreateWithoutEscritoresInputObjectSchema), z.lazy(() => AvatarUncheckedCreateWithoutEscritoresInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => AvatarCreateOrConnectWithoutEscritoresInputObjectSchema).optional(),
			upsert: z.lazy(() => AvatarUpsertWithoutEscritoresInputObjectSchema).optional(),
			connect: z.lazy(() => AvatarWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => AvatarUpdateToOneWithWhereWithoutEscritoresInputObjectSchema),
					z.lazy(() => AvatarUpdateWithoutEscritoresInputObjectSchema),
					z.lazy(() => AvatarUncheckedUpdateWithoutEscritoresInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const AvatarUpdateOneRequiredWithoutEscritoresNestedInputObjectSchema: z.ZodType<Prisma.AvatarUpdateOneRequiredWithoutEscritoresNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.AvatarUpdateOneRequiredWithoutEscritoresNestedInput>;
export const AvatarUpdateOneRequiredWithoutEscritoresNestedInputObjectZodSchema = makeSchema();
