import { css, memoizeStyle } from '../../lib/theming/Emotion';
import { Theme } from '../../lib/theming/Theme';

const styles = {
  root(t: Theme) {
    const width = parseInt(t.calendarDayHeight) * 7 + parseInt(t.calendarDayMarginRight) * 7;
    const calendarPaddingRight = parseInt(t.calendarPaddingX) - parseInt(t.calendarDayMarginRight);
    return css`
      box-sizing: content-box;
      color: ${t.textColorDefault};
      display: block;
      padding: 0 ${calendarPaddingRight}px 0 ${t.calendarPaddingX};
      width: ${width}px;
    `;
  },

  wrapper() {
    return css`
      font-size: 14px;
      overflow: hidden;
      position: relative;
    `;
  },
};

export const jsStyles = memoizeStyle(styles);
