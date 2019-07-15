import React from 'react';

const ApprovalCard = props => {
    console.log(props)
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic button green">Approve</div>
          <div className="ui basic button red">Reject</div>
        </div>
      </div>
    </div>
  );
};
export default ApprovalCard;
