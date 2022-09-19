function newItem(){
    let inputValue=$('#input').val();
    let list=$('#list');
    let li=$('<li></li>');
    list.append(li);

    if (inputValue==='') {
        alert('You must write something.');
    } else {
        li.append(inputValue);
        let crossOutButton=$('<crossOutButton></crossOutButton>');
        crossOutButton.append(document.createTextNode('X'));
        li.append(crossOutButton);
    }

/*     function crossOut(){
        li.toggleClass('strike');
    }
     */
    li.dblclick(()=>li.toggleClass('strike'));


}
