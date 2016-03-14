// var user = ['serg', 'vlad', 'alex', 'viktor', 'gleb'];
// var user = [];

// user.unshift('serg');
// user.unshift('vlad');
// user.unshift('alex');
// user.unshift('viktor');
// user.unshift('gleb');
// console.log(user);

// var user = [];
// var n = prompt('');
// for (i = 0; i < n; i++){
// 	user[i] = prompt('');
// }
// console.log(user);

var user = [];
for (i = 0; i < 5; i++)
  user[i] = prompt();
for (i = 0; i < user.length; i++)
  console.log(user[i]);
  console.log(user);


user = prompt('Введите имя');

if (user == 'vlad'){
	alert('Владислав, Вы успешно вошли');
} else {
	alert('Ошибка, Вы не можете войти');
}