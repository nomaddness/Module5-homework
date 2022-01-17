//Task6
const arr = ["Basil", "Iwan", 1, 2, "Daniel", null, "Basil", 0, "Kate", "Sophia"];
let standard = arr[0];
arr.some(arr => {
   if (arr !== standard) {
      console.log("false");
      return false;
   } else {
      console.log("true");
   }
})