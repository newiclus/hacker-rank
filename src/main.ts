import MinimumBribes from "./modules/arrays/bribes";
import LeftRotation from "./modules/arrays/left_rotation";
import MinimumSwaps from "./modules/arrays/minimum_swaps";

function home() {
  console.log("%cArrays Problems", "color:cyan; font-size:20px");
  console.log("- Minimum of Bribes: ", MinimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));
  console.log("- Left Rotation: ", LeftRotation([1, 2, 3, 4, 5], 4));
  console.log("- Minimum of Swaps: ", MinimumSwaps([4, 3, 1, 2]));
}

home();
