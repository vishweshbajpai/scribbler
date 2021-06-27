var likeCount = 1;
//Function for Like Button
function likeClickHandler() {
  let temp = document.getElementById("likeCountText");
  if (likeCount === 1) {
    document.getElementById("likeText").innerHTML = "Liked!";
    temp.innerHTML = "1 person likes this!";
  } else {
    temp.innerHTML = likeCount + " people have liked this!";
  }
  likeCount++;
}

var edit = true;
// Function for Edit Button
function editClickHandler() {
  let temp = document.getElementById("editText");
  let title = document.getElementById("blog-title-text");
  let content = document.getElementById("blog-content-text");
  if (edit === true) {
    temp.innerHTML = "Save";
    edit = false;
    title.contentEditable = true;
    content.contentEditable = true;
    title.style.border = "1px solid #dc3545";
    content.style.border = "1px solid #dc3545";
  } else {
    temp.innerHTML = "Edit";
    edit = true;
    title.contentEditable = false;
    content.contentEditable = false;
    title.style.border = "0";
    content.style.border = "0";
  }
}

// Function for Comment Button
function commentClickHandler(comment) {
  if (comment) {
    var div = document.createElement("div");
    div.className = "comments";
    var p = document.createElement("p");
    p.className = "each-comment";
    div.appendChild(p);
    p.innerText = comment;
    document.getElementById("addNewComment").prepend(div);
    document.getElementById("textarea").value = "";
  }
}
