import {deviceWidth} from '../stories/screens/config';
const fontsize = size => {
  const width = Math.floor(deviceWidth * 0.0035);
  const fontsize = size * width;
  return fontsize;
};
export const appFontSize = {
  SMALL_06: fontsize(6),
  SMALL_07: fontsize(7),
  SMALL_08: fontsize(8),
  SMALL_09: fontsize(9),
  NORMAL_10: fontsize(10),
  NORMAL_11: fontsize(11),
  NORMAL_12: fontsize(12),
  NORMAL_13: fontsize(13),
  NORMAL_14: fontsize(14),
  SUB_HEAD_15: fontsize(15),
  SUB_HEAD_16: fontsize(16),
  SUB_HEAD_17: fontsize(17),
  SUB_HEAD_18: fontsize(18),
  SUB_HEAD_19: fontsize(19),
  HEAD_20: fontsize(20),
  HEAD_21: fontsize(21),
  HEAD_22: fontsize(22),
  HEAD_23: fontsize(23),
  HEAD_24: fontsize(24),
  // common fontsize
  HEADER_BACK_BUTTON: fontsize(24),
};
