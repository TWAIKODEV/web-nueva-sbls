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
import type * as admissionForm from "../admissionForm.js";
import type * as contactForm from "../contactForm.js";
import type * as events from "../events.js";
import type * as index from "../index.js";
import type * as news from "../news.js";
import type * as programs from "../programs.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  admissionForm: typeof admissionForm;
  contactForm: typeof contactForm;
  events: typeof events;
  index: typeof index;
  news: typeof news;
  programs: typeof programs;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
