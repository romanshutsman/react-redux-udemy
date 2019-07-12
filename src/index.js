import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo={'Today at 4:45PM'}
        avatar={faker.image.avatar()}
        comment={faker.lorem.sentence()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo={'Today at 5:45PM'}
        avatar={faker.image.avatar()}
        comment={faker.lorem.sentence()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo={'Today at 6:45PM'}
        avatar={faker.image.avatar()}
        comment={faker.lorem.sentence()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo={'Today at 7:45PM'}
        avatar={faker.image.avatar()}
        comment={faker.lorem.sentence()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo={'Today at 8:45PM'}
        avatar={faker.image.avatar()}
        comment={faker.lorem.sentence()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo={'Today at 9:45PM'}
        avatar={faker.image.avatar()}
        comment={faker.lorem.sentence()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
