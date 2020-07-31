class Team extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shotsTaken: 0,
            score: 0,
            statistics: 0
        }
        this.shotSound = new Audio('./assets/applause2.wav')
    }

    shoot = (event) => {
        let scoreOdds = Math.floor(Math.random() * 10) + 1
        this.setState((state, props) => ({
            shotsTaken: state.shotsTaken + 1


        }))
        if (scoreOdds > 6) {
            this.shotSound.play()
            this.setState((state, props) => ({
                score: state.score + 1

            }))
        }
    }
    render() {
        let style = "style"
        let shotPercentElement
        if (this.state.shotsTaken) {
            const shotPercentage = Math.round((this.state.score / this.state.shotsTaken) * 100)
            shotPercentElement = (
                <h4>Shooting %: {shotPercentage}</h4>
            )
        }
        return (
            <div className={style}>
                <h1>{this.props.location}</h1>
                <img src={this.props.logo} width={50} />
                <h2>Team: {this.props.name}
                </h2>
                <h4>Shots taken: {this.state.shotsTaken}</h4>
                <h4>Score: {this.state.score}</h4>

                {shotPercentElement}
                <button onClick={this.shoot}>Shoot</button>

            </div>
        )
    }
}

function Game(props) {
    return (

        <div className='Game'>
            <h1>Welcome to {props.venue}</h1>
            <div className="stats">
                <Team location="Home Team"
                    name={props.homeTeam.name}
                    logo={props.homeTeam.logoSrc} />

                <div className='VS'>
                    <h1>VS</h1>
                </div>


                <Team location="Away Team"
                    name={props.awayTeam.name}
                    logo={props.awayTeam.logoSrc} />
            </div>
        </div>
    )
}

function App(props) {
    const taco = {
        name: "Dancing Taco ",
        logoSrc: "https://img.freepik.com/free-vector/taco-mustache-mascot-cartoon-illustration-cute-taco-character-maraca-food-concept-isolated_138676-695.jpg?size=338&ext=jpg"
    }
    const potato = {
        name: "Couch Potato ",
        logoSrc: "https://phatsee.files.wordpress.com/2018/05/2408605_0.jpg?w=630"
    }
    return (
        <div className='App'>
            <Game venue="Dimmsdale Dimmadome"
                homeTeam={potato}
                awayTeam={taco} />
        </div >

    )

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)