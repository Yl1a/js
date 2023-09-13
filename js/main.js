/* let news_list = document.querySelector(".news");

let news = [
    {
        title:"Первый японский модуль для посадки на Луну вышел на заданную орбиту",
        desc:"Ракета-носитель Н2А с японским лунным модулем SLIM и американским спутником XRISM стартовала сегодня около 2:42 мск. Через 14 минут после запуска агентство сообщило о благополучном отделении спутника XRISM.",
        author: "Наталия"

    },
    {
        title:"Астрономы из США описали загадочный источник сверхвысокой энергии",
        desc:"Результаты исследования появились на сервере препринтов arXiv, а краткий отчет о работе приводит Phys.org. Авторы пишут, что пока сделан только первый шаг, который, возможно, поможет раскрыть истинную природу загадочного источника энергии.",
        author: "Денис"
    },
    {
        title:"Телескоп Уэбба нашел суперземлю с потенциально водным океаном",
        desc:"Международная группа астрономов с использованием данных космического телескопа имени Джеймса Уэбба обнаружила метан и диоксид углерода в атмосфере экзопланеты, известной под названием K2-18 b.",
        author: "Денис"
    }
]

news.forEach(n => {
    news_list.insertAdjacentHTML("beforeend", 
    `<div class="news_card">
    <h2 class="title">${n.title}</h2>
    <p class="text">${n.desc}</p>
    <h4 class="text">${n.author}</h4>
    `
    )
}
) */
let news_list = document.querySelector(".news");

let news = [
    {
        title:"Первый японский модуль для посадки на Луну вышел на заданную орбиту",
        desc:"Ракета-носитель Н2А с японским лунным модулем SLIM и американским спутником XRISM стартовала сегодня около 2:42 мск. Через 14 минут после запуска агентство сообщило о благополучном отделении спутника XRISM.",
        author: "Наталия"

    },
    {
        title:"Астрономы из США описали загадочный источник сверхвысокой энергии",
        desc:"Результаты исследования появились на сервере препринтов arXiv, а краткий отчет о работе приводит Phys.org. Авторы пишут, что пока сделан только первый шаг, который, возможно, поможет раскрыть истинную природу загадочного источника энергии.",
        author: "Денис"
    },
    {
        title:"Телескоп Уэбба нашел суперземлю с потенциально водным океаном",
        desc:"Международная группа астрономов с использованием данных космического телескопа имени Джеймса Уэбба обнаружила метан и диоксид углерода в атмосфере экзопланеты, известной под названием K2-18 b.",
        author: "Денис"
    }
]



let btnNews = document.querySelector(".btn");
btnNews.addEventListener('click', function(){

    let titleNews =  prompt('Введите заголовок');
    let descNews =  prompt('Введите описание новости');
    let authorNews =  prompt('Введите автора новости');
    addNews(titleNews, descNews, authorNews);
    showNews(news_list, titleNews, descNews, authorNews);
    
})

function showNews(arr, x, y, z){
    arr.insertAdjacentHTML("beforeend", 
    `<div class="news_card">
    <h2 class="title">${x}</h2>
    <p class="text">${y}</p>
    <h4 class="text">${z}</h4>
    `
    )
}

news.forEach(n => {
    news_list.insertAdjacentHTML("beforeend", 
    `<div class="news_card">
    <h2 class="title">${n.title}</h2>
    <p class="text">${n.desc}</p>
    <h4 class="text">${n.author}</h4>
    `
    )
}
)

function addNews(x, y, z){
    news.push({
        title: x,
        desc: y,
        author: z,
    })
}


