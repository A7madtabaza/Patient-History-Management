const selectElement = document.getElementById("color-options");
const rectangleContainer = document.getElementById("rectangle-container");

selectElement.addEventListener("change", function () {
  const selectedColor = selectElement.value;

  // إنشاء مستطيل جديد
  const rectangle = document.createElement("div");
  rectangle.classList.add("rectangle");
  rectangle.style.backgroundColor = selectedColor;

  // إضافة المستطيل إلى الحاوية
  rectangleContainer.appendChild(rectangle);
});

