import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SeguirUsuarioCreateWithoutEscritorInputObjectSchema as SeguirUsuarioCreateWithoutEscritorInputObjectSchema } from "./SeguirUsuarioCreateWithoutEscritorInput.schema.ts";
import { SeguirUsuarioUncheckedCreateWithoutEscritorInputObjectSchema as SeguirUsuarioUncheckedCreateWithoutEscritorInputObjectSchema } from "./SeguirUsuarioUncheckedCreateWithoutEscritorInput.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./SeguirUsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => SeguirUsuarioCreateWithoutEscritorInputObjectSchema),
				z.lazy(
					() => SeguirUsuarioUncheckedCreateWithoutEscritorInputObjectSchema,
				),
			]),
		})
		.strict();
export const SeguirUsuarioCreateOrConnectWithoutEscritorInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioCreateOrConnectWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioCreateOrConnectWithoutEscritorInput>;
export const SeguirUsuarioCreateOrConnectWithoutEscritorInputObjectZodSchema =
	makeSchema();
