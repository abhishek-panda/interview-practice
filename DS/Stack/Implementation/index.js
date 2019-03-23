var Stack = require('../index');

var st = new Stack();
console.log(st.isEmpty())
st.push(10);
st.push(20);
console.log(st.pop());
st.push(30);
console.log(st.toString());
console.log(st.peek());
st.pop();
st.pop();
console.log(st.toString());
console.log(st.isEmpty())