"use strict";

const shareButton = document.querySelector(".share__button")
const shareInfo = document.querySelector(".share__info")
const articleFooterInfo = document.querySelector(".article__footer__info")
const articleFooter = document.querySelector(".article__footer")
function showShare() {
  shareInfo.classList.toggle("hidden")
  articleFooterInfo.classList.toggle("hidden")
  articleFooter.classList.toggle("article__footer--share-active")
  shareButton.classList.toggle("share__button--active")
}

shareButton.addEventListener("click", showShare)