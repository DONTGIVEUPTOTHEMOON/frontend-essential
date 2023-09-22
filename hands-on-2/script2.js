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
