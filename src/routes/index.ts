import { config as dConfig } from "dotenv"

dConfig()

export async function get({response}) {
  console.log(process.env['TEST']);
  
  return response
}