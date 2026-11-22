import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloCreateWithoutNotasAutorInputObjectSchema as CapituloCreateWithoutNotasAutorInputObjectSchema } from "./CapituloCreateWithoutNotasAutorInput.schema.ts";
import { CapituloUncheckedCreateWithoutNotasAutorInputObjectSchema as CapituloUncheckedCreateWithoutNotasAutorInputObjectSchema } from "./CapituloUncheckedCreateWithoutNotasAutorInput.schema.ts";
import { CapituloWhereUniqueInputObjectSchema as CapituloWhereUniqueInputObjectSchema } from "./CapituloWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => CapituloWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => CapituloCreateWithoutNotasAutorInputObjectSchema),
				z.lazy(() => CapituloUncheckedCreateWithoutNotasAutorInputObjectSchema),
			]),
		})
		.strict();
export const CapituloCreateOrConnectWithoutNotasAutorInputObjectSchema: z.ZodType<Prisma.CapituloCreateOrConnectWithoutNotasAutorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloCreateOrConnectWithoutNotasAutorInput>;
export const CapituloCreateOrConnectWithoutNotasAutorInputObjectZodSchema =
	makeSchema();
