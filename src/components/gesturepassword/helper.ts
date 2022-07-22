type pointProps = {
  x: number,
  y: number
}
//判断是点还是圆圈
export const isPointInCircle = (point:pointProps, center:pointProps, radius:number) => {
  let d = getDistance(point, center);
  return d <= radius;
};

//计算两点的距离
export const getDistance = function (pt1: pointProps, pt2:pointProps) {
  let a = Math.pow((pt1.x - pt2.x), 2);
  let b = Math.pow((pt1.y - pt2.y), 2);
  let d = Math.sqrt(a + b);
  return d;
};