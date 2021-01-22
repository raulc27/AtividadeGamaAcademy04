const baseURL = 'http://api.icndb.com/'

const body = document.querySelector('body-app')
const main = document.getElementById('main-category')


axios.get(baseURL+'categories').then(
    res=>{
        
        let AllCategories = res.data

        let  MainCard = `<div class="card m-4" style="width:18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-text">${AllCategories.map(main=>(`<p class="card-text">${main}</p>` ))}
        </div>
        </div>`

        main.innerHTML = MainCard
    }
)

     

axios.get(baseURL+'random').then(
    res=>{
        console.log(res.data)

        const FirstCard=`
        <div class="card m-4" style="width:18rem;">
                <img src="${res.data.icon_url}" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">${res.data.value}</p>
                </div>
                </div>
        `

        body.innerHTML = FirstCard
    }
)


const MainDefault = `<li class="nav-item">
                    <a href="">1234</a>
                    </li>`

const MainCard = `<div class="card m-4" style="width:18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text"></p>
                </div>
                </div>`


    function FindJokes(){
        let InputJokeValue = dociment.getElementById('joke-value').value
        axios.get(baseURL='search?query='+InputJokeValue).then(
            res=>{}
        )
    }