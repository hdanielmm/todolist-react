import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: "",
    description: "",
    check: false,
    tasks: []
  }
  render() {
    return (
      <React.Fragment>
        <form>
          <label htmlFor="name">Task name</label>

          <input
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handlerChange}>
          </input>

          <label htmlFor="description">Description</label>

          <input
            id="description"
            name="description"
            value={this.state.description}
            onChange={this.handlerChange}>
          </input>

          <label htmlFor="check">Check</label>

          <input type="checkbox" id="check" name="check"
            onChange={this.handlerChange}>
          </input>

          <button onClick={this.handleSubmit}>Create task</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>State</th>
              <th>CRUD</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map((e, index) => (
              <tr>
                <td>{e.name}</td>
                <td>{e.description}</td>
                <td>{e.check}</td>
                <td><button onClick={() => this.deleteElement(index)}>Delete</button></td>
              </tr>
            )
            )}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  deleteElement = (index) => {
    // e.preventDefault();

    const newList = this.state.tasks.filter((element, i) => index !== i);

    this.setState({
      tasks: newList
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      name: this.state.name,
      description: this.state.description,
      check: this.state.check ? "Done" : "To do"
    }

    this.setState({
      // tasks: this.state.tasks.concat(newTask)
      tasks: [...this.state.tasks, newTask]
    })
    console.log(this.state)
  }

  handlerChange = (e) => {
    const type = e.currentTarget.type;
    const value = type === "checkbox" ? e.currentTarget.checked : e.currentTarget.value;
    const name = e.currentTarget.name;

    this.setState({
      [name]: value,
    })

  }

  
}

export default App;
