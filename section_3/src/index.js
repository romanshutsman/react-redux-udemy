import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
      Are you sure you want yo do this?
    </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo={'Today at 4:45PM'}
          avatar={faker.image.avatar()}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo={'Today at 5:45PM'}
        avatar={faker.image.avatar()}
        comment={faker.lorem.sentence()}
      />
      </ApprovalCard>
      <ApprovalCard>
        
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo={'Today at 6:45PM'}
        avatar={faker.image.avatar()}
        comment={faker.lorem.sentence()}
      />
      </ApprovalCard>
      <ApprovalCard>

      <CommentDetail
        author={faker.name.firstName()}
        timeAgo={'Today at 7:45PM'}
        avatar={faker.image.avatar()}
        comment={faker.lorem.sentence()}
      />
      </ApprovalCard>

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
