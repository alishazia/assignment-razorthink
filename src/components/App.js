  
import React from 'react';
import NamesContainer from './namesContainer';


class App extends React.Component {

  state = {
    names: [
      'John', 'shazia', 'X Æ A-Xii', 'beyonde', 'Khalisee', 'MR hamper', 'Queen Elizabeth', 'queezy', 'Iana', 'Leonard', 
    ],
    searchTerm: ''
  }

  editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }


    render(){
      return (
        <div style = {{textAlign: 'center', paddingTop: '30vh'}}>
          <input type= 'text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search for a name!'/>
          <br></br>
          <h3>These are the important names:</h3>
          <NamesContainer names = {this.dynamicSearch()}/>
        </div>
      );
    }
}

export default App;