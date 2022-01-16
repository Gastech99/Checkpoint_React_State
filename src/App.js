import React from 'react';
import './App.css';
import photo from './photo.jpg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      show: false,
      FullName: 'Gassama',
      Biographie: 'Un objet JavaScript possède donc plusieurs propriétés qui lui sont associées.',
      ImgSrc:<img src={photo} alt="photo" />
    };
  }

  componentDidMount(){
    console.log('Le composant est monte')
    setInterval( () =>{
      console.log('Le temps du montage')
    }, 1000)
  }
  

  render() {
    return (
      <div className='global'>
        <button className='bg-purple-900 text-white rounded py-2 px-3'
        onClick={ () => this.setState({show: !this.state.show})} 
        >Clicker</button>
        {
          this.state.show ? 
          <>
            <p style={{ borderRadius: 10 }}>{this.state.ImgSrc}</p>
            <p>Nom: {this.state.FullName}</p>
            <p>Biographie: {this.state.Biographie}</p>
          </>
          :null
        }
      </div>
    )
  }
}

export default App;
