import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { AvatarCreateOrConnectWithoutEscritoresInputObjectSchema as AvatarCreateOrConnectWithoutEscritoresInputObjectSchema } from "./AvatarCreateOrConnectWithoutEscritoresInput.schema.ts";
import { AvatarCreateWithoutEscritoresInputObjectSchema as AvatarCreateWithoutEscritoresInputObjectSchema } from "./AvatarCreateWithoutEscritoresInput.schema.ts";
import { AvatarUncheckedCreateWithoutEscritoresInputObjectSchema as AvatarUncheckedCreateWithoutEscritoresInputObjectSchema } from "./AvatarUncheckedCreateWithoutEscritoresInput.schema.ts";
import { AvatarWhereUniqueInputObjectSchema as AvatarWhereUniqueInputObjectSchema } from "./AvatarWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => AvatarCreateWithoutEscritoresInputObjectSchema), z.lazy(() => AvatarUncheckedCreateWithoutEscritoresInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => AvatarCreateOrConnectWithoutEscritoresInputObjectSchema).optional(),
			connect: z.lazy(() => AvatarWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const AvatarCreateNestedOneWithoutEscritoresInputObjectSchema: z.ZodType<Prisma.AvatarCreateNestedOneWithoutEscritoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.AvatarCreateNestedOneWithoutEscritoresInput>;
export const AvatarCreateNestedOneWithoutEscritoresInputObjectZodSchema = makeSchema();
