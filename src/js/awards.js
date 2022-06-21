const awardsEl = document.getElementById("awards");
const images = [
  "colorado-parenting-family-fav2021.png",
  "bay-area-parent-gold2020.png",
  "mla-swim-lessons-winner-2020-250x250.png",
  "colorado-parenting-family-fav2020.png",
  "website-parenting-oc-2019.jpeg",
  "colorado-parenting-family-fav2019.jpeg",
  "bay-area-parent-2019.jpeg",
  "best-of-la-kids-winner.jpeg",
  "best-of-the-best-2018.jpeg",
];
const alts = [
  "Colorado Parenting Family Fav2021",
  "Bay Area Parent Gold 2020",
  "Mla Swim Lessons Winner 2020",
  "Colorado Parenting Family Fav 2020",
  "Website Parenting Oc 2019",
  "Colorado Parenting Family Fav 2019",
  "Bay Area Parent 2019",
  "Best of la kids winner",
  "Best of the best 2018",
];
let completedImages = [];
completedImages = images.map((image, index) => {
  return `<div class="award col-xs-12 col-md-4 p-0">
          <img src="images/awards/${image}"  alt="${alts[index]}" class="maxw-100"/>
        </div>
        `;
  // return `<li class="award">
  //         <img src="images/awards/${image}"  alt="${alts[index]}" class="maxw-100"/>
  //       </li>
  //       `;
});
awardsEl.innerHTML = completedImages.join("");
