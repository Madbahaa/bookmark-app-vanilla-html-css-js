document.getElementById('myForm').addEventListener('submit' , saveBookMark);

function saveBookMark(e){

    var siteName = document.getElementById('webSite').value;
    var siteUrl = document.getElementById('siteUrl').value;

    var bookmark = {
        name: siteName,
        url : siteUrl
    }

    if(localStorage.getItem('bookmarks') === null ) {
        var bookmarks= [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    else {
        var bookmarks= JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    document.getElementById('myForm').reset();
    
    e.preventDefault();
}

function deleteBookmark(url){
    function deleteBookmark(url){
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        for(var i =0;i < bookmarks.length;i++){
          if(bookmarks[i].url == url){
            bookmarks.splice(i, 1);
          }
        }
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      
      }

}