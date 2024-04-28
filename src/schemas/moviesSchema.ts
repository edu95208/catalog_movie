import { z } from "zod";
import { baseSchema } from "./baseSchema";

export const movieSchema = baseSchema.extend({
    title: z.string().min(1),
    year: z.number().min(1895).max(2022),
    genres: z.string().min(1),
    director: z.string().optional()
})

const movieCreateSchema = movieSchema.omit({id:true})