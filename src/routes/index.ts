import { config as dConfig } from "dotenv"

dConfig()

export async function get() {
  console.log(process.env['TEST']);
  
  return {
    status: 300,
    redirect: '/'
  }
}