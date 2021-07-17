import type { Locals } from "$lib/types";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler<Locals> = async ({locals, headers}) => {
  locals.userid = null
  console.log(locals.userid)
  return {
    status: 302,
    headers: {
      location: '/'
    }
  }
};
