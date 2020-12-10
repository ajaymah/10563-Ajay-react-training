import React, { Component } from 'react';
import Add from './Add';
import List from './List';
class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            fname: '',
            lname:''
        };
        console.log();
    }
    static getDerivedStateFromProps(props, state) {
        const listData = JSON.parse(localStorage.getItem('tododata'));
        
        return null;
    }
    componentDidMount() {
        const listData = JSON.parse(localStorage.getItem('tododata'));
        if(listData){
            this.setState((state) => ({
                 todoList: listData
            }))
        }        
    }

    addToDo = () => {
        const newItem = {
            fname: this.state.fname,
            lname: this.state.lname,
        };
        if (this.state.fname.length >= 1) {
            this.setState((state) => ({
                todoList: state.todoList.concat(newItem),
                fname:'',
                lname:''
            }),()=>{
                  localStorage.setItem("tododata", JSON.stringify(this.state.todoList));
            });
        }

    };

    handleChange = (e) => {
        console.log(e.target.name)
        this.setState({
            [e.target.name]: e.target.value,
        });
       // console.log(this.state)
    };

    render() {
        const { todoList,fname,lname } = this.state;
        return (
            <div className="wraperSearchList">
                <div className="wraperSearchListInner1">
                    <div className="blockHead">{this.state.fname}
                        <h3>ToDoList [{todoList.length}]</h3>
                    </div>                   
                        <Add labelText={'Add'} handleChange={this.handleChange} fname={fname} lname={lname}  addtodoItem={this.addToDo} />  
                        <List data={todoList} />
                </div>
            </div>
        );
    }
}

export default Todolist;
