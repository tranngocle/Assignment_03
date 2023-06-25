//an thong tin user
function handlerSubmit() {
  //lay gia tri id cua email chuyen sang in thuong
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();

  //lay element cua the p hien thi loi
  const errorEmail = document.getElementById("error-email");
  //check email input
  const checkEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //dung match de kiem tra email nhap vao
  const check = emailValue.match(checkEmail);

  //lay phan chua thong tin user
  const sectionContent = document.querySelector(
    "#personal-info .section-content"
  );

  //lay element de kiem soat submit
  const submitControl = document.querySelector(".submit-email");
  if (check) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng Email!";
  }
}

//event khi nguoi dung ra chuot vao button
function handlerMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block"; //dan hang ngang 2 nut
}

//event khi nguoi dung ra chuot khoi button
function handlerMouseOut(element) {
  const viewMore = element.querySelector(".control-view");
  if (!viewMore.classList.value.includes("less-more")) {
    viewMore.style.display = "none";
  }
}

//event khi nguoi dung nhap chuot vao button view more or less more
function handlerViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".control-view");
  //cai dat su kien tren ca 2 nut view more va less more
  const sectionContent = parentElement.querySelectorAll(".section-content");

  //khi nhap vao view more
  if (viewMore.classList.value.includes("view-more")) {
    sectionContent.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.classList.remove("view-more");
    viewMore.classList.add("less-more");
    viewMore.innerHTML = "Less more";
  } else {
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.remove("less-more");
    viewMore.classList.add("view-more");
    viewMore.innerHTML == "View more";
  }
}
