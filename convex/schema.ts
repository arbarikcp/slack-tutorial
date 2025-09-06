import { defineSchema,defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";
 


const schema = defineSchema({
  ...authTables,tasks: defineTable({
    isCompleted: v.boolean(),
    text: v.string(),
  }),
  // Your other tables...
});
 
export default schema;