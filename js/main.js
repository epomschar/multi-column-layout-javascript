function renderGrid(){
    var blocks = document.getElementById('grid_container').children,
        pad = 10,
        cols = 4,
        newLeft,
        newTop;
    for(var i = 1; i < blocks.length; i++){
        if(i % cols == 0){
            newTop = blocks[i - cols].offsetTop + blocks[i - cols].offsetHeight + pad;
            blocks[i].style.top = newTop + "px";            
        } else {
            if(blocks[i - cols]){
                newTop = blocks[i - cols].offsetTop + blocks[i - cols].offsetHeight + pad;
                blocks[i].style.top = newTop + "px";             
            }
            
            newLeft = blocks[i - 1].offsetLeft + blocks[i - 1].offsetWidth + pad;
            blocks[i].style.left = newLeft + "px";
        }
    }
    
}
window.addEventListener('load', renderGrid, false);
window.addEventListener('resize', renderGrid, false);
