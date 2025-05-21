const mainContent = document.getElementById("main-content");
const navButtons = document.querySelectorAll("[data-page]");
const mobileMenuBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const header = document.getElementById("header");

let currentPage = "home";

const services = [
  {
    title: "Проектирование домов",
    description: "Разработка индивидуальных архитектурных проектов с учетом ваших пожеланий и особенностей участка.",
    icon: `<svg viewBox="0 0 24 24" class="w-6 h-6"><path fill="currentColor" d="M19.4,17.8l-4.3-4.4c-0.4-0.4-1-0.4-1.4,0L12,15.1l-1.7-1.7c-0.4-0.4-1-0.4-1.4,0l-4.3,4.4c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0 l3.6-3.6h1.7v7.1c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1v-7.1h1.7l3.6,3.6c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4C19.4,17.9,19.4,17.8,19.4,17.8z M5,13.1c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v0c0,0.6-0.4,1-1,1H6 C5.4,14.1,5,13.7,5,13.1z M5,9.1c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v0c0,0.6-0.4,1-1,1H6C5.4,10.1,5,9.7,5,9.1z M5,5.1 c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v0c0,0.6-0.4,1-1,1H6C5.4,6.1,5,5.7,5,5.1z"/></svg>`
  },
  {
    title: "Строительство каркасных домов",
    description: "Быстрое и экономичное возведение теплых и надежных каркасных домов по современным технологиям.",
    icon: `<svg viewBox="0 0 24 24" class="w-6 h-6"><path fill="currentColor" d="M12,1L3,7v6c0,5.5,4.5,10,10,10s10-4.5,10-10V7L12,1z M12,19c-4.4,0-8-3.6-8-8v-5l8-4.9l8,4.9v5C20,15.4,16.4,19,12,19z"/></svg>`
  },
  {
    title: "Монолитное строительство",
    description: "Возведение прочных и долговечных домов методом монолитного бетонирования с высокой теплоизоляцией.",
    icon: `<svg viewBox="0 0 24 24" class="w-6 h-6"><path fill="currentColor" d="M21,16H3V4h18V16z M21,2H3C1.9,2,1,2.9,1,4v12c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2z M19,14H5V6h14V14z M19,4H5V4.5 h14V4z"/></svg>`
  },
  {
    title: "Финишная отделка",
    description: "Проведение внутренних и наружных отделочных работ с использованием качественных материалов.",
    icon: `<svg viewBox="0 0 24 24" class="w-6 h-6"><path fill="currentColor" d="M17,3H7C5.9,3,5,3.9,5,5v14c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V5C19,3.9,18.1,3,17,3z M17,19H7V5h10V19z M15,11h-4v4h4 V11z"/></svg>`
  }
];

const projects = [
  {
    title: "Дом «Сосновый бор»",
    image: "https://picsum.photos/seed/pineforest/600/400 ",
    area: "120 м²",
    rooms: "4 спальни, 2 санузла",
    price: "от 3,5 млн ₽"
  },
  {
    title: "Дом «Уютный уголок»",
    image: "https://picsum.photos/seed/cozycorner/600/400 ",
    area: "90 м²",
    rooms: "3 спальни, 1 санузел",
    price: "от 2,8 млн ₽"
  },
  {
    title: "Дом «Элитный комфорт»",
    image: "https://picsum.photos/seed/elitcomf/600/400 ",
    area: "180 м²",
    rooms: "5 спален, 3 санузла",
    price: "от 5,2 млн ₽"
  }
];

function renderPage(page) {
  switch (page) {
    case "home":
      return `
        <section class="hero">
          <div class="hero-content">
            <h1>Строительство индивидуальных жилых домов</h1>
            <p>Создаем комфортные дома под ключ по индивидуальным проектам для вашего уюта и благополучия.</p>
            <button data-page="projects" class="btn-primary">Посмотреть проекты</button>
            <button data-page="contact" class="btn-secondary">Оставить заявку</button>
          </div>
        </section>
      `;
    case "services":
      return `
        <section class="section">
          <div class="container">
            <h2 class="section-title">Наши услуги</h2>
            <div class="services-grid">
              ${services.map(service => `
                <div class="service-card">
                  <div class="service-icon">${service.icon}</div>
                  <h3>${service.title}</h3>
                  <p>${service.description}</p>
                </div>
              `).join("")}
            </div>
          </div>
        </section>
      `;
    case "projects":
      return `
        <section class="section">
          <div class="container">
            <h2 class="section-title">Наши проекты</h2>
            <div class="projects-grid">
              ${projects.map(project => `
                <div class="project-card">
                  <img src="${project.image}" alt="${project.title}" style="width:100%;height:auto;">
                  <h3>${project.title}</h3>
                  <p>Площадь: ${project.area}</p>
                  <p>Комнаты: ${project.rooms}</p>
                  <p><strong>${project.price}</strong></p>
                  <button data-page="contact" class="btn-primary">Заказать проект</button>
                </div>
              `).join("")}
            </div>
          </div>
        </section>
      `;
    case "about":
      return `
        <section class="section">
          <div class="container">
            <h2 class="section-title">О компании</h2>
            <p>Мы специализируемся на строительстве индивидуальных жилых домов различных категорий сложности. Наш опыт позволяет нам создавать комфортные и функциональные дома, соответствующие самым высоким требованиям.</p>
            <p>Мы используем современные технологии и материалы, обеспечивая высокое качество исполнения и соблюдение сроков сдачи объектов.</p>
            <p>Наши клиенты получают полный цикл услуг — от проектирования до сдачи готового дома под ключ.</p>
          </div>
        </section>
      `;
    case "contact":
      return `
        <section class="section">
          <div class="container">
            <h2 class="section-title">Свяжитесь с нами</h2>
            <form class="space-y-4">
              <div>
                <label>Имя:</label>
                <input type="text" class="border w-full p-2 rounded" placeholder="Ваше имя">
              </div>
              <div>
                <label>Email:</label>
                <input type="email" class="border w-full p-2 rounded" placeholder="Ваш email">
              </div>
              <div>
                <label>Телефон:</label>
                <input type="tel" class="border w-full p-2 rounded" placeholder="+7 (XXX) XXX-XX-XX">
              </div>
              <div>
                <label>Сообщение:</label>
                <textarea rows="4" class="border w-full p-2 rounded"></textarea>
              </div>
              <button type="submit" class="btn-primary w-full">Отправить запрос</button>
            </form>
          </div>
        </section>
      `;
    default:
      return "<p>Страница не найдена</p>";
  }
}

function setActivePage(page) {
  currentPage = page;
  mainContent.innerHTML = renderPage(page);

  // Update active nav buttons
  navButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.page === page);
  });
}

document.addEventListener("click", e => {
  if (e.target.matches("[data-page]")) {
    const page = e.target.dataset.page;
    setActivePage(page);
  }
});

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

// Initial load
setActivePage(currentPage);