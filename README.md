# ERIK GARFIA ACEVEDO

## Try Front Ionic / Angular (create an application with ionic or angular)
* Given the following URLs:
    * https://picsum.photos/id/0/info
    * https://picsum.photos/id/0/500/500.jpg
* Get information about a specific image by using
    * /id/{id}/info endpoint
    * /id/{id}/{width}/{height} endpoint
* Id between 0 and 1083.

## 1st Generate a Json of 4000 elements
    Generate an Array / Json of 4000 elements with the following structure
    1. [
    2.   {
    3.     id: image_id,
    4.     photo: url_photo,
    5.     author: image_author,
    6.     text: random_lorem_ipsum_text
    7.   },
    8.   .....
    9. ]

## 2nd Display the 4000 elements on the screen
* Show the 4000 elements on the screen, the scroll must have an optimal performance.
* It should show the image, the author and the random text generated
* Load images on the page asynchronously (Images asynchronously meaning one after another and only when we scroll to a browser viewport will the next image load).

## 3rd Add Filter
* Add a filter that allows you to search by the image ID, author and by the text.

## 4th Favourites 
* You must allow the user to add / remove images as favourites and browse their favourites list.
* Favourites images should appear even after reloading the page.