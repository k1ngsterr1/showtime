function togglePasswordVisibility(
  inputSelector: string,
  toggleSelector: string
) {
  const passwordInput = document.querySelector(
    inputSelector
  ) as HTMLInputElement | null;
  const toggleButton = document.querySelector(
    toggleSelector
  ) as HTMLElement | null;

  if (!passwordInput || !toggleButton) return;

  toggleButton?.addEventListener("click", function () {
    if (passwordInput.type === "password") {
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
  togglePasswordVisibility("#password-input", "#toggle-icon");
});
