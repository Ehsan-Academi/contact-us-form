// برای جلوگیری از چسباندن محتوا در فیلدهای ورودی
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input, textarea"); // انتخاب همه فیلدهای ورودی و textarea

  inputs.forEach((input) => {
    // جلوگیری از چسباندن محتوا
    input.addEventListener("paste", (event) => {
      event.preventDefault(); // جلوگیری از عملیات paste
    });

    // جلوگیری از تغییرات پیش‌فرض (در صورتی که بخواهید)
    input.addEventListener("input", (event) => {
      if (input.value === "") {
        input.value = ""; // جلوگیری از تغییر به مقادیر پیش‌فرض
      }
    });
  });
});

const formHandler = (event) => {
  event.preventDefault();

  //clear previous error Message
  document.getElementById("form-message").textContent = "";
  document.getElementById("description-error").textContent = "";
  document.getElementById("email-error").textContent = "";

  let validation = true;
  //   let error=[];

  //email validation
  const emailField = document.getElementById("email");
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailField.value)) {
    document.getElementById("email-error").textContent =
      "Please Enter a valid email";
    validation = false;
  }

  //description validation
  const descriptionField = document.getElementById("description");
  if (descriptionField.value.trim().length === 0) {
    document.getElementById("description-error").textContent =
      "Please enter a message";
    validation = false;
  }

  const policyCheckbox = document.querySelector('input[type="checkbox"]');
  if (!policyCheckbox.checked) {
    alert("لطفاً شرایط را تایید کنید.");
    return; // یا، یک خطای جدید بیان کنید.
  }

  // if validation is true
  if (validation) {
    const formMessage = document.getElementById("form-message");

    formMessage.style.display = "block";
    formMessage.innerText = "اطلاعات با موفقیت ارسال شد";
    document.getElementById("contact-form").reset();

    // Hide the form message after 3 seconds
    setTimeout(() => {
      formMessage.style.display = "none";
    }, 3000);
  }
};

document.getElementById("contact-form").addEventListener("submit", formHandler);
