/* tslint:disable */
/* eslint-disable */
export class PlayerWASM {
  free(): void;
  /**
   * @param {(string)[]} scene
   * @param {number} fr
   * @param {number} w
   * @param {number} h
   * @param {boolean} debug
   * @param {boolean} enable_aabb
   * @param {boolean} disable_shade
   * @returns {PlayerWASM}
   */
  static new(scene: (string)[], fr: number, w: number, h: number, debug: boolean, enable_aabb: boolean, disable_shade: boolean): PlayerWASM;
  /**
   * @returns {(string)[]}
   */
  get_a(): (string)[];
  update(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_playerwasm_free: (a: number, b: number) => void;
  readonly playerwasm_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => number;
  readonly playerwasm_get_a: (a: number, b: number) => void;
  readonly playerwasm_update: (a: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
