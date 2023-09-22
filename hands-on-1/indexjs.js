// const main = () => {
//   const frontendInpet = document.getElementById("frontend");

//   const frontendButton = document.getElementById("add-front");

//   const frontendMilestoneList = document.getElementById("frontend-milestone");

//   frontendButton.addEventListener("click", (e) => {
//     e.proventDefault();

//     const newList = document.createElement("li");

//     newList.textContent = frontendInpet.value;

//     frontendMilestoneList.appendChild(newList);
//   });
// };

// document.addEventListener("DOMContentLoaded", () => {
//   main();
// });
// const main = () => {
//   const frontendInput = document.getElementById("frontend");

//   const frontendButton = document.getElementById("add-front");

//   const frontendMilestonesList = document.getElementById("frontend-milestone");

//   frontendButton.addEventListener("click", (e) => {
//     e.preventDefault();

//     const newList = document.createElement("li");

//     newList.textContent = frontendInput.value;

//     frontendMilestonesList.appendChild(newList);
//   });
// };

// document.addEventListener("DOMContentLoaded", () => {
//   main();
// });

const main = async () => {
  try {
    const response = await fetch("https://api.minireg.thanayut.in.th/courses");
    console.log(response);

    const rawData = await response.json();
    if (!response.ok) {
      throw new Error(`code - ${response.status}-${rawData.massage}`);
    }
    console.log(rawData);
  } catch (err) {
    console.log(err);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
