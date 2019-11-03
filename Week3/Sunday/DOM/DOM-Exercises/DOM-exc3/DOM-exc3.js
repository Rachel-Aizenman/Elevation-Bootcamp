const getRandomColor = function() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
  }

for (var i = 0; i < 6; i++) {
    var newDiv = document.createElement('div')
    newDiv.id = 'box' + i;
    newDiv.className = 'boxClass';
    newDiv.style.color = 'getRandomColor()';
    document.getElementById("container").appendChild(newDiv);
    console.log(newDiv)
    
}



const changeRandomColor = function () {
    // var letters = '0123456789ABCDEF'.split('');
    // var color = '#';
    // for (var i = 0; i < 6; i++) {
    //     color += letters[Math.floor(Math.random() * 16)];
    // }
    // // return color;
    document.getElementsByClassName('boxClass').style.color = "blue";
}




