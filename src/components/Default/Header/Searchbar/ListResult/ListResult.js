import Tick from "../../../../Tick/Tick";
import "../ListResult/ListResult.scss";

const ListResult = ({ title, listResult }) => {
  return (
    <ul className="list-result">
      <p className="title">{title}</p>
      {listResult !== null &&
        listResult.length > 0 &&
        listResult.map((user) => (
          <li key={user.id} className="item-result">
            <img className="avatar" src={user.avatar} alt="" />
            <div className="info">
              <div className="name">
                <p className="">{user.name}</p>
                <Tick />
              </div>
              <p className="desc">{user.mutual} mutual friends</p>
            </div>
          </li>
        ))}
      {listResult !== null && listResult.length < 1 && (
        <p className="no-data">
          Sorry, we didn't find any users matching this search
        </p>
      )}
    </ul>
  );
};

export default ListResult;
