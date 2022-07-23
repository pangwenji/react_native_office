type pointProps = {
  x: number | any,
  y: number | any
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
 
export  const isEquals = (start: pointProps, end: pointProps) => {
  return (start.x === end.x && start.y === end.y);
}

export const getTransform = (pt1:pointProps, pt2:pointProps) => { 
  let d = getDistance(pt1, pt2);

  let c = (pt2.x - pt1.x) / d;
  let a = Math.acos(c);           // 旋转角度
  if ( pt1.y > pt2.y ) a = 2 * Math.PI - a;

  let c1 = {
      x: pt1.x + d / 2,
      y: pt1.y
  };
  let c2 = {
      x: (pt2.x + pt1.x) / 2,
      y: (pt2.y + pt1.y) /2
  };
  let x = c2.x - c1.x;
  let y = c2.y - c1.y;

  return {d, a, x, y};
}