

function radialGradient(color, colorState, angle) {
  if (angle === undefined) {
    angle = "69.43% 69.43% at 50% 50%";
  }
  return `radial-gradient(${angle}, ${color}, ${colorState})`;
}

export default radialGradient;
