// Exercise: Find the top navbar by query for the element type, which is <nav>.
  document.getElementsByTagName("nav")[0];
// Exercise: Find the sidebar on the right by using it's id.
  document.getElementById('sidebar-right');
// Exercise: Find the "Pages" and "Groups" sections of the sidebar by using their class.
  document.getElementById('sidebar-left').getElementsByClassName('pages');
  document.getElementById('sidebar-left').getElementsByClassName('groups');

// Exercise: Find all of the comments on the page.
  document.getElementsByClassName("panel");
// Exercise: Find the first comment on the page.
  document.getElementsByClassName("panel")[0];
// Exercise: Find the last comment on the page.
  var comments = document.getElementsByClassName("panel");
  var lastCommentIndex = comments.length - 1;
  comments[lastCommentIndex];
// Exercise: Find the fourth comment on the page.
  comments[3]
// Exercise: Find one of the ads in the sidebar and hide them.
  var whatever = document.getElementsByClassName("ad-slot")[0];
  whatever.style.visibility = "hidden";

// Exercise: Set the visibility to the form that you hid in the previous step to make it visible again.
  whatever.style.visibility = "visible";

// Exercise: Use setAttribute to change src attribute of one of the ads in the sidebar.
  var goat = whatever.getElementsByTagName('img')[0];
  goat.setAttribute('src', 'http://placebear.com/200/300');
// Exercise: Find Sam's post and change it's text to something incredible.
  var postMessage = document.getElementsByClassName('post media')[3];
  var samPost = postMessage.getElementsByTagName('p')[0];
  samPost.innerHTML = 'Nate is very smart';
// Exercise: Find the first post and add the .post-liked class to it.
  var posts = document.getElementsByClassName('post media')[0];
  posts.className = "post post-liked media"
// Exercise: Find the second post and remove the .post-liked class.
  var second = document.getElementsByClassName('post media')[1];
  second.className = second.classList.remove("post-liked");
