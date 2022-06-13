
export function getRandomInt(min, max) {
    min = Math.ceil(min );
    max = Math.floor(max );
  
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

export const handleUserId = (setUserId) => {
    const randomId = getRandomInt(1, 5);
    setUserId(randomId);
  };

export const handleKeyDown = ({keyCode}) =>{
    const enterKeyCode = 13;
    if(keyCode === enterKeyCode){
        alert('tecla Enter presionada');
    }
};