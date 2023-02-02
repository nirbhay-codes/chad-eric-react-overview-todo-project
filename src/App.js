import logo from './logo.svg';
import './App.css';
import './modules/TodoRowItem';
import TodoRowItem from './modules/TodoRowItem';

function App() {
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
            <TodoRowItem />
            <TodoRowItem />
            <TodoRowItem />
              {/* <tr>
                <th scope='row'>2</th>
                <td>Get Meat</td>
                <td>Bana</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Appointment with Doctor</td>
                <td>James</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
