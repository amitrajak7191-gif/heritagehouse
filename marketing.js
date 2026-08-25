/* =========================================================
   HERITAGE HOUSE DIGITAL
   Marketing Page JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ======================================================
     MOBILE MENU
     ====================================================== */

  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const marketingNav = document.getElementById("marketingNav");

  if (mobileMenuBtn && marketingNav) {

    mobileMenuBtn.addEventListener("click", () => {

      marketingNav.classList.toggle("mobile-open");

      if (marketingNav.classList.contains("mobile-open")) {
        mobileMenuBtn.textContent = "✕";
      } else {
        mobileMenuBtn.textContent = "☰";
      }

    });


    marketingNav.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {

        marketingNav.classList.remove("mobile-open");
        mobileMenuBtn.textContent = "☰";

      });

    });

  }



  /* ======================================================
     PACKAGE SELECTION
     Automatically selects package in quote form
     ====================================================== */

  const packageButtons =
    document.querySelectorAll("[data-package]");

  const packageSelect =
    document.getElementById("package");


  packageButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const selectedPackage =
        button.getAttribute("data-package");

      if (packageSelect && selectedPackage) {
        packageSelect.value = selectedPackage;
      }

    });

  });



  /* ======================================================
     QUOTE FORM
     WEB3FORMS SUBMISSION
     ====================================================== */

  const quoteForm =
    document.getElementById("quoteForm");


  if (quoteForm) {

    quoteForm.addEventListener(
      "submit",
      async (event) => {

        event.preventDefault();


        const submitButton =
          quoteForm.querySelector(".quote-submit");


        const originalButtonContent =
          submitButton
            ? submitButton.innerHTML
            : "";


        /* Disable button while sending */

        if (submitButton) {

          submitButton.disabled = true;

          submitButton.innerHTML =
            "Sending...";

        }


        try {

          /* Collect all form fields */

          const formData =
            new FormData(quoteForm);


          /* Send enquiry to Web3Forms */

          const response =
            await fetch(
              "https://api.web3forms.com/submit",
              {
                method: "POST",
                body: formData
              }
            );


          const result =
            await response.json();


          /* Successful submission */

          if (response.ok && result.success) {

            quoteForm.reset();

            showSuccessMessage();

          }


          /* Web3Forms returned an error */

          else {

            console.error(
              "Web3Forms submission error:",
              result
            );


            alert(
              "Sorry, your enquiry could not be sent. Please try again."
            );


            if (submitButton) {

              submitButton.disabled = false;

              submitButton.innerHTML =
                originalButtonContent;

            }

          }

        }


        /* Internet / connection error */

        catch (error) {

          console.error(
            "Form submission error:",
            error
          );


          alert(
            "Sorry, there was a connection problem. Please try again."
          );


          if (submitButton) {

            submitButton.disabled = false;

            submitButton.innerHTML =
              originalButtonContent;

          }

        }

      }
    );

  }



  /* ======================================================
     SUCCESS MESSAGE
     Only appears AFTER successful submission
     ====================================================== */

  function showSuccessMessage() {

    const formWrap =
      document.querySelector(
        ".quote-form-wrap"
      );


    if (!formWrap) {
      return;
    }


    formWrap.innerHTML = `

      <div
        class="form-success"
        style="
          text-align:center;
          padding:60px 30px;
        "
      >

        <div
          class="success-icon"
          style="
            width:64px;
            height:64px;
            display:grid;
            place-items:center;
            margin:0 auto 22px;
            border-radius:50%;
            background:#2b6e5e;
            color:#ffffff;
            font-size:28px;
            font-weight:700;
          "
        >
          ✓
        </div>


        <h3
          style="
            font-family:'Playfair Display', serif;
            font-size:36px;
            margin-bottom:15px;
          "
        >
          Thank you.
        </h3>


        <p
          style="
            max-width:440px;
            margin:0 auto 30px;
            color:#706b63;
          "
        >
          Your enquiry has been sent successfully.
          Our team will review your requirements
          and get back to you shortly.
        </p>


        <a
          href="#home"
          class="primary-btn"
        >
          Back to Top

          <span>
            ↑
          </span>

        </a>

      </div>

    `;

  }



  /* ======================================================
     HEADER SHADOW ON SCROLL
     ====================================================== */

  const header =
    document.querySelector(
      ".marketing-header"
    );


  window.addEventListener(
    "scroll",
    () => {

      if (!header) {
        return;
      }


      if (window.scrollY > 20) {

        header.style.boxShadow =
          "0 8px 30px rgba(40, 25, 10, 0.07)";

      }

      else {

        header.style.boxShadow =
          "none";

      }

    }
  );

});