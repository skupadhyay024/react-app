import React from 'react';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

class Authors extends React.Component {
    state = {
        person: []
    }

    componentDidMount() {
        axios.get(baseUrl+'/authors')
        .then(res => {
            console.log(res);
            this.setState({person:res.data});
        })
    }

    render() {
        return (
            <>
        <h1>Authors</h1>
        <table className="table">
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
            </tr>
            </thead>
        <tbody>
      {  this.state.person.map(per => {
            return (
            <tr key={per.id}>
            <td>{ per.id }</td>
            <td>{per.name}</td>
            </tr>
            );
    }
        )
}
         

</tbody>
        </table>
        </>
        );
    }

}

export default Authors;