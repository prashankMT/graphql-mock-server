import casual from "casual";
import RandExp from "randexp";
import { MockList } from "graphql-tools";
import { startCase } from "lodash";

export default {
  Int: () => casual.integer(0),
  String: ()=> casual.title,
  Library: ()=>({
    name: casual._full_name
  }),
  Comment: ()=>({
    text: casual.text
  }),
  User:()=>({
    name: casual.name,
    email: casual.email
  }),
  Account:()=>({
    name: casual.company_name
  }),
  Reaction:()=>({
    type: casual.type
  })

};
