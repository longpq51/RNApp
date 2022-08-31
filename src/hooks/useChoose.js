import {useState} from 'react';

const useChoose = list => {
  const [itemIsChoose, setItemIsChoose] = useState(list[0]);

  const isChoose = item => {
    setItemIsChoose(list.filter(i => i.id === item.item.id)[0]);
  };

  const choose = item => {
    return itemIsChoose.id == item.item.id;
  };

  return {
    itemIsChoose,
    isChoose,
    choose,
  };
};

export default useChoose;
