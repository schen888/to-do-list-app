function newItem(){
    let inputValue=$('#input').val();
    let list=$('#list');
    console.log(inputValue);

    if (inputValue==='') {
        alert('You must write something.');
    } else {
        let li=$('<li></li>');
        li.append(inputValue);
        list.append(li);
    }
}