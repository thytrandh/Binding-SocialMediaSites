import { useContext } from "react";
import { DataCreatePostContext } from "../../context/dataCreatePostContext";
import "../OptionAddPosts/OptionAddPosts.scss";
const OptionAddPosts = () => {
  const { addOption, setAddOption } = useContext(DataCreatePostContext);
  return (
    <div className="option-add-post">
      <p className="title">Add to post: </p>
      <ul className="option">
        {addOption.map((option) => (
          <li
            key={option.id}
            className="item-option"
            onClick={() => {
              setAddOption((prev) => {
                return prev.map((item) => {
                  if (item.id === option.id) {
                    return {
                      ...item,
                      isActive: true,
                    };
                  } else {
                    return {
                      ...item,
                      isActive: false,
                    };
                  }
                });
              });
            }}
          >
            <img src={option.icon} alt="" />
            <p className="desc">{option.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionAddPosts;
