const data = [
    {label: 'A'},
    {label: 'B'},
    {label: 'C'},
    {label: 'D'},
    {label: 'E'},
  ];

  const dataDos = {
    1: [{label: 'A'}, {label: 'B'}, {label: 'C'}, {label: 'D'}, {label: 'E'}],
    2: [{label: 'F'}, {label: 'G'}, {label: 'H'}, {label: 'I'}, {label: 'J'}],
    3: [{label: 'K'}, {label: 'L'}, {label: 'M'}, {label: 'N'}, {label: 'O'}],
    4: [{label: 'P'}, {label: 'Q'}, {label: 'R'}, {label: 'S'}, {label: 'T'}],
    5: [{label: 'U'}, {label: 'V'}, {label: 'X'}, {label: 'Y'}, {label: 'Z'}],
  };
  export const myApi = {
      fakeFetch(){
          return new Promise(resolve => {
              setTimeout(() => {
                  resolve(data);
              }, 1000);
          });
      },

      fakeFetchId(userId){
        return new Promise(resolve =>{
            setTimeout(() => {
                resolve(dataDos[userId] || []);
            }, 1000);
        }); 
      }
  };