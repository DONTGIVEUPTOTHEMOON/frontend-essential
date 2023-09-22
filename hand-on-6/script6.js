const main = async () => {
  try {
    const response = await fetch("https://api.minireg.thanayut.in.th/courses");
    console.log(response);

    const rawData = await response.json();
    if (!response.ok) {
      throw new Error(`code - ${response.status}-${rawData.massage}`);
    }
    console.log(rawData);
    const courses = rawData.courses;
    console.log(courses);
    for (let i = 0; i < courses.length; i++) {
      const courseMain = document.getElementById("site-main");
      const newSection = document.createElement("section");
      newSection.setAttribute("class", "subject");
      newSection.innerHTML = `
      <h3>${courses[i].courseNo} ${courses[i].abbrName}</h3>
      <p>จำนวนหน่วยกิต</p>
      <p>${courses[i].credit} หน่วยกิต</p>
      <h3>ภาควิชา/กลุ่มวิชา/สาขาวิชา</h3>
      <h4>${courses[i].department}</h4>
      <h4>ประเภท GenEd</h4>
      <p>${courses[i].genEdType}</p>`;

      courseMain.appendChild(newSection);
    }
  } catch (err) {
    console.log(err);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
