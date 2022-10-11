import s from "../button/button.module.scss";

function addActiveClass(url = null) {
  const currentNumberOfPage = url ? url.split("=")[1] : "1";
  const pagination = document.getElementById("pagination");
  const btns = Array.from(pagination.getElementsByTagName("button"));
  btns.forEach((btn) => {
    btn.classList.remove(s.activeBtn);
    if (btn.textContent === currentNumberOfPage) btn.classList.add(s.activeBtn);
  });
}

export default addActiveClass;
