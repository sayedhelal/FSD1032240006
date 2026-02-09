const inputs = document.querySelectorAll("input");
const form = document.getElementById("form");
const submitBtn = document.getElementById("submitBtn");
const togglePass = document.getElementById("togglePass");
const password = document.getElementById("password");
const strengthBar = document.getElementById("strengthBar");
const successMsg = document.getElementById("successMsg");


/* ========== LIVE VALIDATION ========== */

inputs.forEach(input => {
    input.addEventListener("input", () => {
        validate(input);
        checkForm();
    });
});


function validate(input) {
    const value = input.value.trim();
    const group = input.parentElement;
    const error = group.querySelector("small");

    let message = "";

    if (input.id === "name" && value.length < 3)
        message = "Minimum 3 characters";

    if (input.id === "email" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        message = "Invalid email";

    if (input.id === "phone" &&
        !/^[0-9]{10}$/.test(value))
        message = "10 digits required";

    if (input.id === "confirmPassword" &&
        value !== password.value)
        message = "Passwords not matching";

    if (message) {
        group.classList.add("error");
        group.classList.remove("success");
        error.innerText = message;
        return false;
    }

    group.classList.remove("error");
    group.classList.add("success");
    error.innerText = "";
    return true;
}


/* ========== PASSWORD STRENGTH ========== */

password.addEventListener("input", () => {
    const val = password.value;
    let strength = 0;

    if (val.length > 5) strength++;
    if (/[A-Z]/.test(val)) strength++;
    if (/[0-9]/.test(val)) strength++;
    if (/[@$!%*?&]/.test(val)) strength++;

    const widths = ["25%", "50%", "75%", "100%"];
    const colors = ["red", "orange", "yellowgreen", "green"];

    strengthBar.style.width = widths[strength-1] || "0";
    strengthBar.style.background = colors[strength-1] || "transparent";
});


/* ========== SHOW/HIDE PASSWORD ========== */

togglePass.addEventListener("click", () => {
    password.type =
        password.type === "password" ? "text" : "password";
});


/* ========== ENABLE BUTTON ONLY IF VALID ========== */

function checkForm() {
    const allValid = [...inputs].every(i => validate(i));
    submitBtn.disabled = !allValid;
}


/* ========== SUBMIT ========== */

form.addEventListener("submit", e => {
    e.preventDefault();
    successMsg.innerText = "🎉 Account Created Successfully!";
    form.reset();
    strengthBar.style.width = 0;
    submitBtn.disabled = true;
});
