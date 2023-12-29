import { useContext, useState } from "react";
import "../PersonalInformation/PersonalInformation.scss";
import OutsideClickHandler from "react-outside-click-handler";
import { useForm } from "react-hook-form";
import { DataContext } from "../../../../context/dataContext";
import { useDispatch } from "react-redux";
import { updatePersonal } from "../../../../redux/slice/User/updateUserSlice";

const PersonalInformation = () => {
  // const isSuccess = useSelector(
  //   (state) =>
  //     state.persistedReducer?.userSettings?.currentUpdatePersonal?.status
  // );

  const { userData } = useContext(DataContext);

  const [genderDropdown, setGenderDropdown] = useState(false);
  const [dayDropdown, setDayDropdown] = useState(false);
  const [monthDropdown, setMonthDropdown] = useState(false);
  const [yearDropdown, setYearDropdown] = useState(false);

  const firstName = userData?.firstName;
  const lastName = userData?.lastName;
  const gender = userData?.gender;
  const address = userData?.address;
  const day = userData?.birthday ? userData?.birthday.slice(8, 10) : null;
  const month = userData?.birthday ? userData?.birthday.slice(5, 7) : null;
  const year = userData?.birthday ? userData?.birthday.slice(0, 4) : null;

  const initialValues = {
    fname: firstName,
    lname: lastName,
    gender: gender,
    address: address,
    day: day,
    month: month,
    year: year,
  };

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { fname, lname, gender, day, month, year, address } = data;

    const firstName = fname;
    const lastName = lname;
    const birthday = year + "-" + month + "-" + day;
    dispatch(
      updatePersonal({
        firstName,
        lastName,
        address,
        gender,
        birthday,
      })
    );
  };

  // useEffect(() => {
  //   if (!isSuccess) {
  //     reset({
  //       fname: "",
  //       lname: "",
  //       gender: "",
  //       day: "",
  //       month: "",
  //       year: "",
  //       address: "",
  //     });
  //   }
  //   console.log(initialValues);
  // }, [isSuccess, reset]);

  return (
    <div className="settings-component setting-personal-information">
      <p className="top-title">Personal Information</p>
      <div className="main-setting-personal">
        <form action="" className="form-settings">
          <div className="divide-column-2">
            <div className="input-item">
              <label htmlFor="fname">First Name</label>
              <input
                name="fname"
                type="text"
                className="input-box"
                placeholder="---"
                {...register("fname", {
                  required: true,
                })}
              />
              {errors.fname?.type === "required" && (
                <p className="err-msg">First Name is required</p>
              )}
            </div>
            <div className="input-item">
              <label htmlFor="lname">Last Name</label>
              <input
                name="lname"
                type="text"
                className="input-box"
                placeholder="---"
                {...register("lname", {
                  required: true,
                })}
              />
              {errors.lname?.type === "required" && (
                <p className="err-msg">Last Name is required</p>
              )}
            </div>
          </div>
          {/* <div className="input-item">
            <label htmlFor="email">Email Address</label>
            <input
              name="email"
              type="text"
              className="input-box"
              placeholder="---"
              {...register("email", {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
            {errors.email?.type === "pattern" && (
              <p className="err-msg">Invalid email address</p>
            )}
          </div> */}
          {/* <div className="input-item">
            <label htmlFor="phone">Phone Number</label>
            <input
              name="phone"
              type="text"
              className="input-box"
              placeholder="---"
              {...register("phone")}
            />
          </div> */}
          <div className="input-item">
            <OutsideClickHandler
              onOutsideClick={() => {
                setGenderDropdown(false);
              }}
            >
              <label htmlFor="gender">Gender selects</label>
              <div className="input-dropdown">
                <input
                  name="gender"
                  type="text"
                  className="input-box"
                  placeholder="---"
                  onClick={() => {
                    setGenderDropdown(!genderDropdown);
                  }}
                  {...register("gender")}
                />
                <i className="ic-chev fa-light fa-chevron-down"></i>
                {genderDropdown && (
                  <div className="dropdown-box">
                    <p
                      className="item"
                      onClick={() => {
                        setValue("gender", null);
                      }}
                    >
                      ---
                    </p>
                    <p
                      className="item"
                      onClick={() => {
                        setValue("gender", "Male");
                      }}
                    >
                      Male
                    </p>
                    <p
                      className="item"
                      onClick={() => {
                        setValue("gender", "Female");
                      }}
                    >
                      Female
                    </p>
                  </div>
                )}
              </div>
            </OutsideClickHandler>
          </div>
          <div className="divide-column-3">
            <div className="input-item">
              <label htmlFor="day">Day</label>
              <div className="input-dropdown">
                <input
                  name="day"
                  type="text"
                  className="input-box"
                  placeholder="---"
                  onClick={() => {
                    setDayDropdown(!dayDropdown);
                  }}
                  {...register("day", {
                    required: true,
                  })}
                />
                {errors.day?.type === "required" && (
                  <p className="err-msg">Day is required</p>
                )}
                <i className="ic-chev fa-light fa-chevron-down"></i>
                <OutsideClickHandler
                  onOutsideClick={() => {
                    setDayDropdown(false);
                  }}
                >
                  {dayDropdown && (
                    <div className="dropdown-box dropdown-box-date">
                      <p
                        className="item"
                        onClick={() => {
                          setValue("day", null);
                        }}
                      >
                        ---
                      </p>
                      {Array.from(Array(31), (e, i) => (
                        <p
                          key={i}
                          className="item"
                          onClick={() => {
                            if (i < 9) {
                              setValue("day", `0${i + 1}`);
                            } else {
                              setValue("day", `${i + 1}`);
                            }
                          }}
                        >
                          {i < 9 ? `0${i + 1}` : `${i + 1}`}
                        </p>
                      ))}
                    </div>
                  )}
                </OutsideClickHandler>
              </div>
            </div>
            <div className="input-item">
              <label htmlFor="month">Month</label>
              <div className="input-dropdown">
                <input
                  name="month"
                  type="text"
                  className="input-box"
                  placeholder="---"
                  onClick={() => {
                    setMonthDropdown(!monthDropdown);
                  }}
                  {...register("month", {
                    required: true,
                  })}
                />
                {errors.month?.type === "required" && (
                  <p className="err-msg">Month is required</p>
                )}
                <i className="ic-chev fa-light fa-chevron-down"></i>
                <OutsideClickHandler
                  onOutsideClick={() => {
                    setMonthDropdown(false);
                  }}
                >
                  {monthDropdown && (
                    <div className="dropdown-box dropdown-box-date">
                      <p
                        className="item"
                        onClick={() => {
                          setValue("month", null);
                        }}
                      >
                        ---
                      </p>
                      {Array.from(Array(12), (e, i) => (
                        <p
                          key={i}
                          className="item"
                          onClick={() => {
                            if (i < 9) {
                              setValue("month", `0${i + 1}`);
                            } else {
                              setValue("month", `${i + 1}`);
                            }
                          }}
                        >
                          {i < 9 ? `0${i + 1}` : `${i + 1}`}
                        </p>
                      ))}
                    </div>
                  )}
                </OutsideClickHandler>
              </div>
            </div>
            <div className="input-item">
              <label htmlFor="year">Year</label>
              <div className="input-dropdown">
                <input
                  name="year"
                  type="text"
                  className="input-box"
                  placeholder="---"
                  onClick={() => {
                    setYearDropdown(!yearDropdown);
                  }}
                  {...register("year", {
                    required: true,
                  })}
                />
                {errors.year?.type === "required" && (
                  <p className="err-msg">Year is required</p>
                )}
                <i className="ic-chev fa-light fa-chevron-down"></i>
                <OutsideClickHandler
                  onOutsideClick={() => {
                    setYearDropdown(false);
                  }}
                >
                  {yearDropdown && (
                    <div className="dropdown-box dropdown-box-date">
                      <p
                        className="item"
                        onClick={() => {
                          setValue("year", null);
                        }}
                      >
                        ---
                      </p>
                      {Array.from(Array(40), (e, i) => (
                        <p
                          key={i}
                          className="item"
                          onClick={() => {
                            setValue("year", 2020 - i);
                          }}
                        >
                          {2020 - i}
                        </p>
                      ))}
                    </div>
                  )}
                </OutsideClickHandler>
              </div>
            </div>
          </div>
          <div className="input-item mb-10">
            <label htmlFor="address">Address</label>
            <input
              name="address"
              type="text"
              className="input-box"
              placeholder="---"
              {...register("address")}
            />
          </div>
        </form>
        <div className="bottom-settings">
          <button className="btn-save-change" onClick={handleSubmit(onSubmit)}>
            SAVE CHANGES
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
