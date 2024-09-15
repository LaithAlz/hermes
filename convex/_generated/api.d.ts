/* prettier-ignore-start */

/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as functions_createConversation from "../functions/createConversation.js";
import type * as functions_getConversation from "../functions/getConversation.js";
import type * as messages_getMessage from "../messages/getMessage.js";
import type * as messages_sendMessage from "../messages/sendMessage.js";
import type * as myFunctions from "../myFunctions.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "functions/createConversation": typeof functions_createConversation;
  "functions/getConversation": typeof functions_getConversation;
  "messages/getMessage": typeof messages_getMessage;
  "messages/sendMessage": typeof messages_sendMessage;
  myFunctions: typeof myFunctions;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

/* prettier-ignore-end */
