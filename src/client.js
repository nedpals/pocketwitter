import PocketBase from "pocketbase";

/**
 * The PocketBase instance for making API requests.
 * @type {PocketBase}
 */
export const pb = new PocketBase('http://localhost:8090');