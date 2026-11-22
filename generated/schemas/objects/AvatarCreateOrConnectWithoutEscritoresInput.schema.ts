import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { AvatarCreateWithoutEscritoresInputObjectSchema as AvatarCreateWithoutEscritoresInputObjectSchema } from "./AvatarCreateWithoutEscritoresInput.schema.ts";
import { AvatarUncheckedCreateWithoutEscritoresInputObjectSchema as AvatarUncheckedCreateWithoutEscritoresInputObjectSchema } from "./AvatarUncheckedCreateWithoutEscritoresInput.schema.ts";
import { AvatarWhereUniqueInputObjectSchema as AvatarWhereUniqueInputObjectSchema } from "./AvatarWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => AvatarWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => AvatarCreateWithoutEscritoresInputObjectSchema), z.lazy(() => AvatarUncheckedCreateWithoutEscritoresInputObjectSchema)]),
		})
		.strict();
export const AvatarCreateOrConnectWithoutEscritoresInputObjectSchema: z.ZodType<Prisma.AvatarCreateOrConnectWithoutEscritoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.AvatarCreateOrConnectWithoutEscritoresInput>;
export const AvatarCreateOrConnectWithoutEscritoresInputObjectZodSchema = makeSchema();
