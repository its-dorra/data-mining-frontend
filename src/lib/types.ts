import type { formSchema } from './zod-schemas';
import { z } from 'zod';

export type FormData = z.infer<typeof formSchema>;
