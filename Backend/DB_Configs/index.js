import 'dotenv/config.js'
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as Schema from './Schema.js'
const sql = neon(process.env.DRIZZLE_DATABASE_URL);
export const db = drizzle(sql,{Schema});