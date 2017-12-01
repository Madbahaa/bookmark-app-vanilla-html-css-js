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
    fetchBookmarks();
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
        fetchBookmarks();
      }

}

function fetchBookmarks(){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    var bookmarksResults = document.getElementById('bookmarksOutput');
    bookmarksResults.innerHTML = '';
    for(var i = 0; i < bookmarks.length; i++){
      var name = bookmarks[i].name;
      var url = bookmarks[i].url;
      bookmarksResults.innerHTML += '<blockquote>'+
                                    '<h4><em>' +name+ '</em></h4>'+
                                    '<a href="'+url+'"><input  class="button-outline" type="submit" value="visit"></a>'+ 
                                    '<input onclick="deleteBookmark(\''+url+'\')" class="button-primary" type="submit" value="Delete">'+
                                    '</blockquote>';
    }
  }