export const spCode =  `
  rotateY(mouse.x * PI / 2 + time*.5);
  rotateX(mouse.y * PI / 2);
  rotateY(getRayDirection().y*4+time);

  let f = fresnel(3);
  color(hsv2rgb(vec3(f*3 + 0.3*time,0.8,1)));
  metal(1.0);
  shine(1.0);
  
  let scale = 1.5;
  let s = getSpace();
  let n = 0.3*noise(scale * s + time * 0.2);
  sphere(0.4);
  expand(n);
`;