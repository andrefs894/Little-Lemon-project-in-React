import Home from './Home';
import About from './About';
import Menu from './Menu';
import Reservations from './Reservations';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useReducer } from 'react';

function Main() {
    const reducer = (state, action) => {
        switch (action.type) {
          case 'initialize':
            return action.payload;
          case 'update':
            for(let i=0;i<state.length;i++) {
                for(let j=0;j<state[i].times.length;j++) {
                    if(state[i].date === action.payload.date && state[i].times[j].hour === action.payload.hour) {
                        state[i].times[j].isFree = false;
                        return state;
                    }
                }
            }
            return state;
          default:
            return state;
        }
      };

    const [availableTimes, dispatch] = useReducer(reducer, []);

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations" element={<Reservations availableTimes={availableTimes} dispatch={dispatch} />} />
            </Routes>
        </main>
    )
}

export default Main