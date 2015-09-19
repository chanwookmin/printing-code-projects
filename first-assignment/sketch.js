var r = new Rune({
  container: "#canvas",
  width: 612,
  height: 792,
  debug: true
});

r.rect(150, 160, 320,320)
  .fill(0)
  .stroke(0)
  r.ellipse(260, 230, 260, 300)
  .fill(255)
  .stroke(255)

r.triangle(170, 350, 300, 663 ,404, 200)
  .fill(255)
  .stroke(0)



r.draw();