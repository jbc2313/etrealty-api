import { initialFeed } from "../utils/initialFeed";

// manually adding url
import { contFeed } from '../utils/contFeed';

export async function startFeeding() {

  let result = await contFeed();

  return result;

};
