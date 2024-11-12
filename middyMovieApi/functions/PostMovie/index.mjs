import { errorHandler } from "../../middlewares/errorHandler.mjs";
import { validateKey } from "../../middlewares/validateKey.mjs";
import { validateNewMovie } from "../../middlewares/validateNewMovie.mjs";
import { sendResponse } from "../../responses/index.mjs";
import { movies } from "../../data/movies.mjs";
import middy from '@middy/core';

export const handler = middy(async (event) => {
  movies.push(JSON.parse(event.body));
  return sendResponse(201, 'New movie added!');
}).use(validateKey())
  .use(validateNewMovie())
  .use(errorHandler());
