import { date, pgTable, varchar ,serial} from "drizzle-orm/pg-core";

export const UserList = pgTable('userDetails',{
    id:serial('id').primaryKey(),
    firstName:varchar('firstName').notNull(),
    lastName:varchar('lastName').notNull(),
    gender:varchar('gender').notNull(),
    dob:date('dob').notNull(),
    address:varchar('address').notNull(),
    contact:varchar('contact').notNull(),
    email:varchar('email').notNull().unique(),
    passport:varchar('passport').notNull(),
    password:varchar('password').notNull(),
    imageurl:varchar('imageurl')
})