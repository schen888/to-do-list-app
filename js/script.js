function newItem(){
    let inputValue=$('#input').val();
    let list=$('#list');
    let li=$('<li></li>');
    let crossOutButton=$('<crossOutButton></crossOutButton>');

    if (inputValue==='') {
        alert('You must write something.');
    } else {
        li.append(inputValue);
        list.append(li);
        crossOutButton.append(document.createTextNode('X'));
        li.append(crossOutButton);
    }

    li.dblclick(()=>li.toggleClass('strike'));

    crossOutButton.click(()=>li.addClass('delete'));

    $('#list').sortable();
}
