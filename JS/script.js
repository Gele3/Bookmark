var Name = document.getElementById("bookmarkName")
var bURL = document.getElementById("bookmarkURL")
var bookmark = ""
var bList = []
if (localStorage.getItem("bList")) {
  bList = JSON.parse(localStorage.getItem("bList"))
  addbookmark()
}

var cIndex = 0;

function addBM() {
  if (!valRegex(Name) || !valRegex(bURL)) {
    document.getElementById("valid-regex").classList.remove("d-none");
    return;
  }

  listObj = {
    name: Name.value,
    url: bURL.value
  }
  bList.push(listObj)
  addbookmark()
  console.log(bList)
  localStorage.setItem("bList", JSON.stringify(bList))
}

function addbookmark() {
  bookmark = ``
  for (var i = 0; i < bList.length; i++) {
    bookmark += `
  <tr>
  <td>${i + 1}</td>
  <td>${bList[i].name}</td>
          <td>
            <button onclick="openInNewTab('${bList[i].url}')" class=" btn text-white bg-fosdo2">
              <i class="fa-solid fa-eye pe-2"></i>Visit
            </button>
          </td>
          <td>
            <button onclick="delBookmark(${i})" class="btn text-white pe-2 bg-dell">
              <i class="fa-solid fa-trash-can"></i>
              Delete
           </button>
          </td> 
  </tr>
`
  }

  document.getElementById("tableContent").innerHTML = bookmark
  clear()
}

function clear() {
  Name.value = null
  bURL.value = null
}

function openInNewTab(url) {
  window.open(url);
}

function delBookmark(index) {
  bList.splice(index, 1);
  addbookmark();
  localStorage.setItem("bList", JSON.stringify(bList))
}

function valRegex(element) {
  var regex = {
    bookmarkName : /^[a-zA-Z0-9.-]{3,}$/,
    bookmarkURL : /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  }

  if (regex[element.id].test(element.value)) {
    console.log("Match")
    element.classList.add("is-valid")
    element.classList.remove("is-invalid")
    return true;
  } else {
    console.log("No Match")
    element.classList.add("is-invalid")
    element.classList.remove("is-valid")
    return false;
  }
}

// document.getElementById("closeBtn").addEventListener("click", function() {
//   document.getElementById("valid-regex").classList.add("d-none");
// });

function remAlert(){
document.getElementById("valid-regex").classList.add("d-none");
}
