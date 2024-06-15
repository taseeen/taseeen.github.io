let clicks = 0;

const handleClick = () => {
  clicks += 1;
  document.getElementById("b").innerHTML = clicks;
}