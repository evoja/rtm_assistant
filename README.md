## История
#### Рождение
Довольно давно использую [RTM](http://www.rememberthemilk.com),
это очень удобный менеджер задач, дел, туду-листов, ссылок и всего на свете.

Очень частым шаблоном поведения является следующий.
Во время просмотра какой-нибудь страницы в **браузере** создать задачу со ссылкой на эту страницу.
Не важно, каким будет описание, это может быть свой текст, кусочек текста с веб-страницы
либо заголовок этой страницы. Самое главное - это **взять ссылку на страницу,**
а для этого приходилось лишний раз переключаться между вкладками, чтобы скопировать URL.
Единственный предлагаемый создателями RTM браузерный инструмент-букмарклет ["Quick ADD"](),
справиться с этим делом не мог. Ссылки из страницы он не вытаскивал.

Причём, не было понятно, как его легко усовершенствовать, потому что он
открывает [форму](http://www.rememberthemilk.com/services/ext/addtask.rtm?d=marks%20&t=Remember%20The%20Milk%20-%20Help%20%E2%80%BA%20How%20do%20I%20set%20up%20Quick%20Add%20for%20Google%20Chrome%3F) с сайта RTM, на которой в принципе нет поля URL.
То есть, даже если мы будем букмарклетом вытаскивать ссылку, то передавать её
всё равно некуда.

Всё началось [27 августа](http://blog.gdgomsk.org/2011/08/hackathon_27.html)
на хакатоне по написанию расширений для хрома.

К тому моменту я всё ещё не знал способа добавить в RTM задачу сразу со ссылкой.
И было решено написать плагин, который бы это делал. В ходе работы мы упёрлись
в мутную RTM-овскую авторизацию, с которой, кое-как справились,
и успели таки во второй день продемонстрировать плагин, который
за четыре сделанных в правильном порядке клика мышкой авторизовывался :-),
и мог добавить задачу со ссылкой на страницу через API, предоставляемое сервисом RTM.

Пользоваться этим плагином, на тот момент было невозможно, а доделывать было некогда.
Проект пролежал без движения два года.

#### Перерождение
Летом 2013 к нам в компанию [Live Typing studio](http://ltst.ru)
на летнюю практику пришло много практикантов разного уровня.
Некоторых из них мне разрешили занимать какой-угодно работой.

Тут я вспомнил про RTM.

Одному из [практикантов](https://github.com/pendikov) было поручено найти способ
выполнить задачу через Bookmarklet, не прибегая к RTM-API и написанию плагина.

И он нашёл этот способ. [Умные люди](http://www.rememberthemilk.com/forums/tips/3133/)
использовали способ, аналогичный оригинальному ["RTM Quick Add"](https://www.rememberthemilk.com/help/?ctx=quickadd.whatis):

* брали выделенный текст и **ссылку** со страницы,
* передавали её на форму сервера RTM, которая могла все эти поля добавить в задачи.

Что это была за форма? Они использовали для этого [мобильную версию](http://m.rememberthemilk.com/add?name=%20Create%20rtm_bookmarklet&url=https%3A%2F%2Fgithub.com%2Fprogschool-ru%2Frtm_assistant%2Fblob%2Fmaster%2Frtm_bookmarklet.js) сайта RTM.

Т.е. получено решение, которое делает то, что нужно и во всех браузерах.
Случилось лучшее, чего можно было ожидать.

#### Плагин
Но букмарклет - это закладка. Чтобы им пользоваться, нужно либо держать открытой панель закладок в браузере, а в некоторых из них эта панель занимает много лишнего места.
Либо приходится делать лишние клики мышкой, чтобы добраться до закладки через меню
или открыть скрытую панель закладок.

Поэтому было решено всё-таки написать плагин, чтобы заветная кнопочка всегда располагалась
на виду, рядом с адресной строкой и не занимала лишнего места.

Сказано - сделано. Подключаем второго [практиканта](https://github.com/smilexz),
который заворачивает Bookmarklet в плагин. Получилась красота.

Осталось

1. залить это дело в [Chrome Store](https://chrome.google.com/webstore/detail/rtm-assistant/afdjflpkbkggfpmgimnimllohgnhjccb),
2. нарисовать красивую иконку,
3. распространить среди широкой общественности.

Первый пункт сделан, другие два пока нет, но в прогрессе

#### Участники.
Косвенным участником оказалось сообщество [GDG Omsk](http://blog.gdgomsk.org/),
которое напомнило, что если нужных инструментов нет, то их можно написать самим,
особенно, если дело касается браузера.

Инициаторы этой затеи на хакатоне: [Сергей Шмаков](https://github.com/chivorotkiv),
[Андрей Балабохин](https://github.com/abalabokhin)
и [Ирина Свиркина](https://github.com/IrinaSvirkina).
[Было](http://blog.gdgomsk.org/2011/08/blog-post_31.html) здорово, весело и полезно, но весь наш тогдашний код теперь удалён.

Доблестные практиканты, которые воплотили мою мечту в жизнь:
[Алексей Полоухин](https://github.com/snyper), [Даниил Пендиков](https://github.com/pendikov),
[Александр Бондаренко](https://github.com/smilexz).


#### Актуальность
Поиск ["Remember the milk"](https://chrome.google.com/webstore/search/remember%20the%20milk)
по Chrome Store выдаёт несколько приложений, связанных с RTM,
но на беглый взгляд ни одно из них не пытается решить нашей задачи


## Лицензия
Да какая-тут может быть лицензия? 
Мы же код сами не писаили а нашли в [открытом источнике](http://www.rememberthemilk.com/forums/tips/3133/). Так что пока с нашей стороны никаких притязаний.
Используйте кто хочет как хочет, было бы тут что использовать.