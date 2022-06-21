const contactOptEl = document.getElementById("contact-options");
const images = [
  "question.svg",
  "party-coordinator-form.svg",
  "concern.svg",
  "swimming-pool.svg",
  "suggestion.svg",
  "compliment.svg",
  "form.svg",
  "baby.svg",
];
const titles = [
  "New Customer Inquiries",
  "Contact Party Coordinator",
  "Voice a Concern",
  "Pool Rental",
  "Give a Suggestion",
  "Share a Compliment",
  "Water Safety Presentation Inquiry",
  "Parent & Me Lesson Interest",
];
let completedImages = [];
completedImages = images.map((image, index) => {
  return `<div class="contact-option col-xs-12 col-lg-3 p-0 d-inline-flex flex-column m-auto my-5">
            <a href="#">
              <div class="card shadow border-0 m-auto mb-2">
                <div class="card-body d-flex align-center">
                  <!--class="maxw-100" -->
                  <img src="images/icon-buttons/${image}" class="m-auto w-100"  alt="${titles[index]}" />
                </div>
              </div>
              <p>${titles[index]}</p>                    
            </a>
          </div>
        `;
  // return `<li class="award">
  //         <img src="images/awards/${image}"  alt="${alts[index]}" class="maxw-100"/>
  //       </li>
  //       `;
});
contactOptEl.innerHTML = completedImages.join("");
