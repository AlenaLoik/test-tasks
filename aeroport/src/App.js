import React from 'react';
import {getAll} from './api/tickets';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tickets: getAll(),
    }
  }

  render () {
    return (
      <div className="App">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-2">
              <section>
                <p>
                  ВАЛЮТА:
                  <input/>
                </p>
      
                <p>
                  КОЛИЧЕСТВО ПЕРЕСАДОК:
                  <select>
                    <option value="name">Alphabetical</option>
                    <option value="age">Newest</option>
                  </select>
                </p>
              </section>
      
              <section>
                <p>КОРЗИНА</p>
                <ul>
                  <li>Билет 1</li>
                  <li>Билет 2</li>
                </ul>
              </section>
            </div>
      
          
            <div class="col-md-10">
              <ul class="tickets">
                {this.state.tickets.map(ticket => (
                  <li class="thumbnail">
                    <div class="tickets__btn-buy-wrapper">
                      <p>TURKISH<br/> AIRLINES</p>
                      <img alt="Logo" src="img/logo.png"/>
                      <button class="btn btn-success">
                        Купить<br/>за {ticket.price} 
                      </button>
                    </div>
                    <div class="tickets__info-wrapper">
                      <div>
                        <p>{ticket.departure_time}</p>
                        <p>{ticket.origin}, {ticket.origin_name}</p>
                        <p>{ticket.departure_date}</p>
                      </div>
                      <div>
                        <p>{ticket.arrival_time}</p>
                        <p>{ticket.destination_name}, {ticket.destination}</p>
                        <p>{ticket.arrival_date}</p>
                      </div>
                    </div>
                </li>
                ))} 
              </ul>
      
            </div>
          </div>
        </div>
      </div>
    );
  }
} 

export default App;
