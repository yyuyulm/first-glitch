export const spCode =  `
  let r = getRayDirection();
  rotateY(mouse.x * PI / 2 + time*.3);
  rotateX(mouse.y * PI / 2);
  rotateX(r.z*10 + time);
  rotateY(r.z*10 + time);

  let f = fresnel(3);
  color(hsv2rgb(vec3(f*3 + 0.3*time,0.8,1)));
  metal(1.0);
  shine(1.0);
  
  let scale = 2.5;
  let s = getSpace();
  let t = vec3(-time,time,-time);
  let n = 0.45*noise(scale * s + t * 1);
  sphere(0.4);
  expand(n);
`;