import * as envConfig from "../config.js";

console.oldTrace = console.trace;
const trace = (msg) => {
  console.groupCollapsed(msg);
  console.oldTrace(msg);
  console.groupEnd();
};

/**
 * <p>디버그 메세지</p>
 * @param
 * @param
 * @return
 */
export function log(msg) {
  if (envConfig.DEBUG_MODE <= envConfig.LOG_LEVEL) {
    trace(msg);
  }
}

/**
 * <p>경고 메세지</p>
 * @param
 * @param
 * @return
 */
export function warn(msg) {
  if (envConfig.WARN_MODE <= envConfig.LOG_LEVEL) {
    console.warn(msg);
  }
}

/**
 * <p>에러 메세지</p>
 * @param
 * @param
 * @return
 */
export function error(msg) {
  if (envConfig.ERROR_MODE <= envConfig.LOG_LEVEL) {
    console.error(msg);
  }
}
