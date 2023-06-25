let title = document.querySelector("h1");

if (document.location.href.includes("project-pets")) {
  let info_all = document.querySelectorAll(".pets");

  title.innerHTML = "Project Charter - PETS WEB";
  info_all.forEach((item) => {
    item.style.display = "grid";
  });
} else if (document.location.href.includes("project-cv")) {
  title.innerHTML = "Project Charter - CV WEB";
  let info_all = document.querySelectorAll(".cv");

  info_all.forEach((item) => {
    item.style.display = "grid";
  });
} else if (document.location.href.includes("project-news")) {
  title.innerHTML = "Project Charter - News";
  let info_all = document.querySelectorAll(".news");

  info_all.forEach((item) => {
    item.style.display = "grid";
  });
}
