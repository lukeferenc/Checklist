function newItem() {

    //Adding to the item list:
    let li = $('<li></li>'); //creating li element
    let inputValue = $('#input').val(); //getting the value of the input field
    $(li).append(document.createTextNode(inputValue)); //add the text as part of li


    if(inputValue.length < 1) {
        alert('You must write something!'); //throwing alert when entering empty value to the list
    }else{
        $('#list').append(li); //adding li as part of the list
    }

    //Crossing out and item from item list:
    function crossOut() {
        $(li).addClass('strike');
    }

    $(li).on('dblclick', crossOut);

    //Adding the delete button:
    let crossOutButton = $('<crossOutButton> </crossOutButton>');
    $(crossOutButton).append(document.createTextNode('X'));
    $(li).append(crossOutButton);

    $(crossOutButton).on('click', deleteListItem);

    //Adding CLASS DELETE: 
    function deleteListItem() {
        $(li).addClass('delete');
    }

    //Reordering the item:   
    $(list).sortable();
}