var pBars = document.getElementsByTagName('progress');
pBars = Array.prototype.slice.call(pBars);
var widths = [90, 70, 60, 40, 15, 40];
window.onload = () => {
  for (let i in pBars){
    pBars[i].value = widths[i];
  }
  let a = document.querySelectorAll('a');
  for (let e of a){
    e.target = "_blank";
  }
};
function filter(txt,button){
  let buttons = document.getElementsByClassName('tags');
  buttons = Array.prototype.slice.call(buttons);
  buttons.forEach(el => {
    if (el.classList.contains('active')){
      el.classList.remove('active');
    }
  });
  button.classList.toggle('active');
  let projects = document.getElementsByClassName('project');
  for (let el of projects){
    let tags = el.dataset.tags.split(',');
    if (tags.includes(txt)){
      el.classList.remove("project-hide");
      setTimeout(()=>{
        el.style.display = "flex";
      },300);
    }
    else{
      el.classList.add("project-hide");
      setTimeout(()=>{
        el.style.display = "none";
      },300);
    }
  }
}