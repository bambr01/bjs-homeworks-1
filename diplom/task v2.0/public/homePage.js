//Выход
const logout = new LogoutButton;
logout.action = ()=>{
  ApiConnector.logout((err)=>{
    if(err.success == true) {
      alert('Вы больше не авторизованы');
      location.reload();
    }
  });
}

//Отображение данных пользователя
ApiConnector.current((dan) => {
  if(dan.success == true) {
    ProfileWidget.showProfile(dan.data);
  }
  else {
    alert('Ошибка! Нет данных о пользователе!');
    console.error('Ошибка! Нет данных о пользователе!');
  }
});

//Курс Валют
const ratesBoard = new RatesBoard;
function valute() {
  ApiConnector.getStocks((...args)=>{
    if(args[0].success == true) {
      console.log(`${new Date().getHours()}:${new Date().getMinutes()} Обновление курса!`);
      ratesBoard.clearTable();
      ratesBoard.fillTable(args[0].data);
    }
  });
}
//Обновление курса валют
valute();
setInterval(valute, 60000);