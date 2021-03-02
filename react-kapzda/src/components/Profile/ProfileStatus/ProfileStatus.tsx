import React, { ChangeEvent, useEffect, useState } from 'react';

type PropsType = {
   status: string
   updateUserStatus: (status: string)=> string
}

// type StateType = { }

const ProfileStatus: React.FC<PropsType> = (props) => {

   const [editMode, setEditMode] = useState<boolean>(false);
   const [status, setStatus] = useState<string>(props.status);

   useEffect(() => {
      setStatus(props.status)
   }, [props.status]);

   const activeEditMode = () => {
      setEditMode(true);
   }   

   const disActivateEditMode = () => {
      setEditMode(false);
      props.updateUserStatus(status);
   };
   
   const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
      setStatus(e.currentTarget.value);
   };

   
      return (
         <div>
            {!editMode &&
               <div>
                  <span onDoubleClick={activeEditMode}>{props.status || 'No status'}</span>
               </div>}
            
            {editMode &&
               <div>
                  <input
                     autoFocus={true}
                     value={status}
                     onChange={onStatusChange}
                     onBlur={disActivateEditMode}
                  />
               </div>
            }
         </div>
      );
};
export default ProfileStatus;

// class ProfileStatus extends React.Component {

//    state = {
//       editMode: false,
//       status: this.props.status
//    }

//    componentDidUpdate = (prevProps, prevState) => {
//       if (prevProps.status !== this.props.status) {
//          this.setState({
//             status: this.props.status
//          })
//       }
//    }

//    activeEditMode=()=> {
//       this.setState({
//          editMode: true
//       })
//    }

//    disActivateEditMode = () => {
//       this.setState({
//          editMode: false
//       });

//       this.props.updateUserStatus(this.state.status)
//    }

//    onStatusChange = (e) => {
//       this.setState({
//          status:e.currentTarget.value
//       })
//    }

//    render(){
//       return (
//          <div>
//             {!this.state.editMode &&
//                <div>
//                   <span onDoubleClick={this.activeEditMode}>{this.props.status || 'No status'}</span>
//                </div>}
            
//             {this.state.editMode &&
//                <div>
//                   <input
//                      autoFocus={true}
//                      value={this.state.status}
//                      onChange={this.onStatusChange}
//                      onBlur={this.disActivateEditMode}
//                   />
//                </div>
//             }
//          </div>
//       );
//    }
// };