function togglePasswordVisiblity(
  inputSelector: string,
  toggleSelector: string
) {
  const passwordInput = document.querySelector(
    inputSelector
  ) as HTMLInputElement | null;
  const toggleButton = document.querySelector(
    toggleSelector
  ) as HTMLElement | null;

  console.log("kek");

  if (!passwordInput || !toggleButton) return;

  toggleButton?.addEventListener("click", function () {
    if (passwordInput.type === "passwowrd") {
      passwordInput.type = "text";
      this.classList.add("mdi-eye-off");
      this.classList.remove("mdi-eye");
    } else {
      passwordInput.type = "password";
      this.classList.add("mdi-eye");
      this.classList.remove("mdi-eye-off");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  togglePasswordVisiblity("#password-input", "#toggle-icon");
});
