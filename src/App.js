import './index.css'
import logo from './logo.png'
function App() {
  return (
    <div className="App">
      
      <div className='Cont'>
      <div className='side'>
        <div className='navi'>
        <ul>
        <img src={logo}></img>
          <li></li>
        <li><a>Student Management</a></li>
        <li><a>Finanial Management</a></li>
        <li><a>Query Control</a></li>
        <li><a>Attendance</a></li>

        </ul>
        </div>
      </div>

      <div className='main'>
        <div className='mavi'>
        <div className='head'>
          <h1 className='gg'>Student Management</h1>
        </div>
        <div className='stu'>
        <a>Register Enrollment</a>
          <a>Remedial Enrollment</a>
          <a>In Paid Club</a>
        </div>
        <h1>Menu</h1>
        <div className='menu'>
          

          <div className='gri'>
          <a>Register Enrollment</a>
          <a>Remedial Enrollment</a>
          <a>Club Management</a>
          <a>Classroom Management</a>
          <a>SMS / EMAIL</a>
          <a>Attachment</a>
          </div>
        </div>
      </div>
      </div>

    </div>
    </div>
  );
}

export default App;
