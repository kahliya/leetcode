/*
 * @lc app=leetcode id=1344 lang=typescript
 *
 * [1344] Angle Between Hands of a Clock
 */

// @lc code=start
const PER_HOUR_ANGLE = 360 / 12;
const PER_MINUTE_ANGLE = 360 / 60;

function angleClock(hour: number, minutes: number): number {
  const hourDegree = ((hour % 12) + minutes / 60) * PER_HOUR_ANGLE;
  const minuteDegree = minutes * PER_MINUTE_ANGLE;
  const angle = Math.abs(hourDegree - minuteDegree);

  return angle > 180 ? 360 - angle : angle;
}

// @lc code=end
const rez = angleClock(1, 57);
console.log(rez);
