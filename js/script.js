function newItem(){
    let inputValue=$('#input').val();
    let list=$('#list');

    if (inputValue==='') {
        alert('You must write something.');
    } else {
        let li=$('<li></li>');
        li.append(inputValue);
        list.append(li);
        let crossOutButton=$('<crossOutButton></crossOutButton>');
        crossOutButton.append(document.createTextNode('X'));
        li.append(crossOutButton);
    }
}