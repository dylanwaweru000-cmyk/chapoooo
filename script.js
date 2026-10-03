// Edit these lists to change the testimonials and projects.
const testimonials = {
  "Alex Smith": "Great to work with and thoughtful about every detail.",
  "Sam Lee": "They made our idea easy to use and understand."
};

const projects = [
  { title: "Garden Planner", description: "A simple tool for planning a home garden.", tech: "HTML, CSS, JavaScript" },
  { title: "Book Tracker", description: "A small app for keeping track of books.", tech: "HTML, CSS, JavaScript" }
];

const testimonialList = document.querySelector("#testimonial-list");
let testimonialHTML = "";

for (const name in testimonials) {
  testimonialHTML += `
    <article class="card">
      <p>“${testimonials[name]}”</p>
      <strong>${name}</strong>
    </article>
  `;
}

testimonialList.innerHTML = testimonialHTML;

const projectList = document.querySelector("#project-list");
projectList.innerHTML = projects.map(item => `
  <article class="card">
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    <p><strong>Made with:</strong> ${item.tech}</p>
  </article>
`).join("");