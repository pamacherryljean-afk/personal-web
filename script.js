images.forEach(item => {
  const div = document.createElement("div");
  div.classList.add("gallery-item");

  const link = document.createElement("a"); // create a link
  link.href = item.src; // point to original image
  link.target = "_blank"; // open in new tab

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.caption;

  const caption = document.createElement("p");
  caption.textContent = item.caption;

  link.appendChild(img); // put image inside link
  div.appendChild(link);
  div.appendChild(caption);

  galleryContainer.appendChild(div);
});
