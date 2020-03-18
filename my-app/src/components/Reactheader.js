import React from 'react'
import './Reactheader.css'
class Reactheader extends React.Component {
    state = {
        data: this.props.data
    }
    render() {
        const data = this.props.data;
        let listdata = data.map((item, index) =>
            <li key={index}>{item}</li>
        )
        return (<div className='hed'> 头部数据
                        <ul>{listdata}</ul>
                 </div>);
    }
}
export default Reactheader;      