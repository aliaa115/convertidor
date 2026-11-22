import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { UsuarioCreateWithoutEscritorInputObjectSchema as UsuarioCreateWithoutEscritorInputObjectSchema } from "./UsuarioCreateWithoutEscritorInput.schema.ts";
import { UsuarioUncheckedCreateWithoutEscritorInputObjectSchema as UsuarioUncheckedCreateWithoutEscritorInputObjectSchema } from "./UsuarioUncheckedCreateWithoutEscritorInput.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./UsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => UsuarioCreateWithoutEscritorInputObjectSchema),
				z.lazy(() => UsuarioUncheckedCreateWithoutEscritorInputObjectSchema),
			]),
		})
		.strict();
export const UsuarioCreateOrConnectWithoutEscritorInputObjectSchema: z.ZodType<Prisma.UsuarioCreateOrConnectWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateOrConnectWithoutEscritorInput>;
export const UsuarioCreateOrConnectWithoutEscritorInputObjectZodSchema =
	makeSchema();
