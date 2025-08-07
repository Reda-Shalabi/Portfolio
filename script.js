document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
});


function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
}

  const readMoreBtn = document.getElementById("read-more-btn");
  const aboutFull = document.getElementById("about-full");

  readMoreBtn.addEventListener("click", () => {
    if (aboutFull.style.display === "none") {
      aboutFull.style.display = "block";
      readMoreBtn.textContent = "Read Less";
    } else {
      aboutFull.style.display = "none";
      readMoreBtn.textContent = "Read More";
    }
  });

document.querySelectorAll(".slide-in-right").forEach((el) => {
  observer.observe(el);
});

  document.querySelectorAll('.slide-in-right, .slide-in-left').forEach(el => {
    observer.observe(el);
  });

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  window.scrollY > 50
    ? (navbar.style.backgroundColor = "rgba(10, 10, 10, 0.98)")
    : (navbar.style.backgroundColor = "rgba(10, 10, 10, 0.95)");
});

        const form = document.querySelector('form');
        const thanks = document.getElementById('thanks-message');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const data = new FormData(form);
            fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    form.reset();
                    thanks.style.display = 'block';
                } else {
                    thanks.style.display = 'block';
                    thanks.style.color = 'red';
                    thanks.textContent = 'حدث خطأ، حاول مرة أخرى.';
                }
            }).catch(() => {
                thanks.style.display = 'block';
                thanks.style.color = 'red';
                thanks.textContent = 'حدث خطأ، حاول مرة أخرى.';
            });
        });
