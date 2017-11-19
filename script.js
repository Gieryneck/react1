/*
var element = React.createElement('div', {}, 'Hello world!');

ReactDOM.render(element, document.getElementById('app'));
/*
Za pomocą metody createElement tworzymy obiekt, który w Reakcie nazywa
się ReactElement. Metoda ta przyjmuje trzy parametry:

-nazwę klasy na podstawie której ma zostać stworzony element
-propsy, czyli właściwości danego elementu (wejścia)
-dzieci elementu, czyli to co ma się znaleźć wewnątrz. Może to być zarówno tekst jak i kolejny ReactElement


W powyższym przykładzie nasz element tworzymy na podstawie klasy div. 
Uwaga: nie należy mylić tego z elementem <div> znanym z HTML. 
Ten element, jak wiele innych, jest stworzony na potrzeby Reacta, ale o tym 
jeszcze wspomnę.

*/

/*

var secondElement =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmow'),
        React.createElement('ul', {},
            React.createElement('li', {},
                React.createElement('h2', {}, 'Harry Potter'),
                React.createElement('p', {}, 'Film o czarodzieju')
            ),

            React.createElement('li', {},
                React.createElement('h2', {}, 'Krol lew'),
                React.createElement('p', {}, 'Film o lwach')
            )

        )
    );


ReactDOM.render(secondElement, document.getElementById('app'));
*/


var movies = [

    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodziejach',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3xCYs6Tbn-aDz1k_8obBFh9c6cZXQLqmtHhSF10AJcIqW3f2kQ'
    },
    {
        id: 2,
        title: 'Lion King',
        desc: 'Film o lwach',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/The_Lion_King_poster.jpg/220px-The_Lion_King_poster.jpg'   
    },
    {
        id: 3,
        title: 'Ace Ventura',
        desc: 'Film o Jimie Carrey',
        image: 'http://images.genius.com/436b2e5013668782fbbed1c8bb5f084a.591x591x1.jpg'    
    },
    {
        id: 4,
        title: 'Wojna Światow',
        desc: 'Film o inwazji obcych',
        image: 'https://lh6.ggpht.com/fOpyTFEutU6BfwiG0kzevES2pr1wLt42yIM4tSbQHtJZG4SyOOziNDvLhwm_c-53iD-MJw'        
    }
];


var moviesElements = movies.map(function (movie) {

    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.image}) /* img nie ma zawartości innerHTML */
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmow'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));


