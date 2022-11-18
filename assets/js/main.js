// 1
// pole.onclick = function(event) {
//    let fieldCoords = this.getBoundingClientRect();
//    let ballCoords = {
//      top: event.clientY - fieldCoords.top - pole.clientTop - ball.clientHeight / 1,
//      left: event.clientX - fieldCoords.left - pole.clientLeft - ball.clientWidth / 1
//    };
//    if (ballCoords.top < 1) ballCoords.top = 2;
//    if (ballCoords.left < 1) ballCoords.left = 2;
//    if (ballCoords.left + ball.clientWidth > pole.clientWidth) {
//      ballCoords.left = pole.clientWidth - ball.clientWidth;
//    }
//    if (ballCoords.top + ball.clientHeight > pole.clientHeight) {
//      ballCoords.top = pole.clientHeight - ball.clientHeight;
//    }
//    ball.style.left = ballCoords.left + 'px';
//    ball.style.top = ballCoords.top + 'px';
//  }


// 3
