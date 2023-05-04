let yash='Yash Mehta'
let naman='Naman Mehta'
let smit='Smit Vaghela'
let prem ='Prem Mirani'
let manav='Manav Shah'
let harsh='Harsh Mehta'

    const ul =  (
        <ul style={{'color':'blue', 'fontSize': '26px'}}>
            <li>{yash}</li>
            <li>{naman}</li>
            <li>{smit}</li>
            <li>{prem.toUpperCase()}</li>
            <li>{manav.toUpperCase()}</li>
            <li>{harsh.toUpperCase()}</li>
        </ul>
    )

    ReactDOM.render(ul,document.getElementById('content'))