/* Redux Actions */
import {
  SETHOMEDETAILS,
} from "../../types";

export function setHomeDetails(data) {
  return {
    type: SETHOMEDETAILS,
    payLoad: data,
  };
}
