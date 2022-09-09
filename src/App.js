import { useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import OneByteModal from './components/OneByteModal';
import ThreeByteModal from './components/ThreeByteModal';
import TwoByteModal from './components/TwoByteModal';


function App() {

    const [type, setType] = useState("1");

    return (
        <div className="App">
            <div className="container">
                <div className="box editor">
                    <Editor />
                </div>
                <div className="box dialog">

                    <h4 style={{ marginTop: 0 }} >Intruction Type: {' '}
                        <select onChange={(e) => setType(e.target.value)}>
                            <option value="1">1-Byte</option>
                            <option value="2">2-Byte</option>
                            <option value="3">3-Byte</option>
                        </select>
                    </h4>
                    {
                        type === "1" ? <OneByteModal /> :
                            type === "2" ? <TwoByteModal /> :
                                <ThreeByteModal />
                    }
                </div>
            </div>
          <div style={{fontSize: 10, color: "#444", marginLeft: 10}} >Developed By Suman Jaiswal &copy; 2022</div>
        </div>
    );
}

export default App;
