const val = localStorage.getItem("Hello");
console.log(val);

const val22 = { book: 2, laptop: 2, watch: 3 };

const setItem = () => {
  localStorage.setItem("book", "3");
  localStorage.setItem("car", "1");
};

/*
val22
{book: 2, laptop: 2, watch: 3}

val22.toString()
'[object Object]'

JSON.stringify(val22)
'{"book":2,"laptop":2,"watch":3}'

const res11=JSON.stringify(val22)
undefined

res11.book
undefined

const res22=JSON.parse(res11)
undefined
res22.laptop
2
res22.watch
3 
*/
