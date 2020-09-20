import React from 'react';
// import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    };
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        // debugger
        this.props.updateStatus(this.state.status)
        // this.props.updateStatus(this.state.status)
    };
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    //!где-то есть ошибка изза чего в статус приходит объект,  а не статус
    //!пофиксить чуть позже т.к. доступ к апи запросам временно закрыт
    componentDidUpdate(prevProps, prevState) {
        // debugger
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        console.log('componentDidUpdate');
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}
export default ProfileStatus;