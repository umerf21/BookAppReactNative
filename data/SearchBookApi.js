const API_TOKEN = "AIzaSyCH1cTbJsdnTtzTsHWAMoSfS_V9Vmi4Cxw"

export function getbooksfromApi(text){

    //const url = "https://www.googleapis.com/books/v1/volumes?q=java&key=AIzaSyCH1cTbJsdnTtzTsHWAMoSfS_V9Vmi4Cxw"
    const url = "https://www.googleapis.com/books/v1/volumes?q=" + text + "+inauthor:keyes&key="+ API_TOKEN
    console.log(url)
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}