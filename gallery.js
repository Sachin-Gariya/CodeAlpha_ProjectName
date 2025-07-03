const images = {
  Mountain: [
    "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?cs=srgb&dl=pexels-sagui-andrea-200115-618833.jpg&fm=jpg",
    "https://cdn.britannica.com/98/263098-138-87DCA742/why-are-mountains-so-tall.jpg?w=800&h=450&c=crop",
    "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
    "https://media.timeout.com/images/106041640/image.jpg",
  ],
  River: [
    "https://static.toiimg.com/photo/116331360.cms",
    "https://loveincorporated.blob.core.windows.net/contentimages/gallery/3c447d6c-454c-4abc-ba83-add6ee47412d-upperdelawarerivernewyork.jpg",
    "https://natureworldwide.in/wp-content/uploads/2023/08/mckenzie-river-5129717_640.jpg",
    "https://loveincorporated.blob.core.windows.net/contentimages/gallery/fbc5bf05-4ef6-480f-97af-b59fc11c45de-Itchen.jpg",
  ],
  Desert: [
    "https://www.globaladventurechallenges.com/storage/app/media/Blogs/Sahara/sahara-4.png",
    "https://ychef.files.bbci.co.uk/1280x720/p07m8338.jpg",
    "https://images.wildernessdestinations.com/resources/wilderness-safaris/uploads/medium/file/20939/original_dimensions_Holden_Frith__5_.jpg",
    "https://cdn.images.express.co.uk/img/dynamic/78/590x/secondary/Sand-dunes-in-the-Sahara-Desert-6062176.jpg?r=1743521522413",
  ],
  Forest: [
    "https://cdn.britannica.com/99/195599-050-2E431443/Oulankajoki-river-forest-Finland-Oulanka-National-Park.jpg",
    "https://www.vaegbillederxxl.dk/webshop/TAPETE/Wallpaper-Into-The-Forest--T_intotheforest_0.jpg",
    "https://www.metroparks.net/wp-content/uploads/2017/06/1080p_HBK_autumn-morning_GI-1024x686.jpg",
    "https://sb.ecobnb.net/app/uploads/sites/3/2022/04/aoki-870x490.jpg",
  ],
};

let currentCategory = "";
let currentIndex = 0;

const modal = document.getElementById("lightbox-modal");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

document.querySelectorAll(".gallery-item img").forEach((img, index) => {
  img.addEventListener("click", () => {
    const label = img.previousElementSibling.textContent.trim();
    currentCategory = label;
    currentIndex = 0;
    openLightbox();
  });
});

function openLightbox() {
  modal.classList.remove("hidden");
  updateImage();
}

function closeLightbox() {
  modal.classList.add("hidden");
}

function updateImage() {
  lightboxImage.src = images[currentCategory][currentIndex];
}

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images[currentCategory].length;
  updateImage();
};

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images[currentCategory].length) % images[currentCategory].length;
  updateImage();
};

closeBtn.onclick = closeLightbox;
window.onclick = (e) => {
  if (e.target === modal) closeLightbox();
};
