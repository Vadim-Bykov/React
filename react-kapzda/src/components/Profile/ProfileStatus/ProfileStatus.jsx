import React from 'react';

class ProfileStatus extends React.Component {

   state = {
      editMode: false,
      status: this.props.status
   }

   componentDidUpdate = (prevProps, prevState) => {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         })
      }
   }

   activeEditMode=()=> {
      this.setState({
         editMode: true
      })
   }

   disActivateEditMode = () => {
      this.setState({
         editMode: false
      });

      this.props.updateUserStatus(this.state.status)
   }

   onStatusChange = (e) => {
      this.setState({
         status:e.currentTarget.value
      })
   }

   render(){
      return (
         <div>
            {!this.state.editMode &&
               <div>
                  <span onDoubleClick={this.activeEditMode}>{this.props.status || 'No status'}</span>
               </div>}
            
            {this.state.editMode &&
               <div>
               <input
                  autoFocus={true}
                  onBlur={this.disActivateEditMode}
                  value={this.state.status}
                  onChange={this.onStatusChange}
               />
               </div>}
         </div>
      );
   }
};
export default ProfileStatus;