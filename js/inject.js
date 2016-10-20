function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('p');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

var fragment = create('<ul class="footer" id="test"><li>gfgh</li></ul>');
// You can use native DOM methods to insert the fragment:
document.body.insertBefore(fragment, document.body.childNodes[1]);
