const cube = document.getElementById("cube");

const clickOnSide = (side) => {
  if (!side) return;

  const activeSide = cube.dataset.side || "front";

  cube.classList.remove(`show-${activeSide}`);
  cube.classList.add(`show-${side}`);

  cube.dataset.side = side;
};

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const sideToTurn = e.currentTarget.dataset.side;
    clickOnSide(sideToTurn);
  });
});
