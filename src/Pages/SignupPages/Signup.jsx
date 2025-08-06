import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import countryData from "../../data/countries.json";
import { API_URL } from "../../data/docs";

function Signup() {
  const [step, setStep] = useState(1);
  const [states, setStates] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
    hobbies: [],
    country: "",
    state: "",
    comment: "",
    countryCode: "+91",
    captchaCode: "",
    captchaInput: "",
  });

  function handleClearData() {
    setFormData({
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      gender: "",
      hobbies: [],
      country: "",
      state: "",
      comment: "",
      countryCode: "+91",
      captchaCode: "",
      captchaInput: "",
    });
    generateCaptcha(); // Refresh on reset
  }

  useEffect(() => {
    if (formData.country && countryData[formData.country]) {
      setStates(countryData[formData.country]);
      setFormData((prev) => ({ ...prev, state: "" }));
    }
  }, [formData.country]);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setFormData((prev) => ({ ...prev, captchaCode: code }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevFormData) => {
      const hobbies = prevFormData.hobbies || [];
      if (checked) {
        return { ...prevFormData, hobbies: [...hobbies, value] };
      } else {
        return {
          ...prevFormData,
          hobbies: hobbies.filter((hobby) => hobby !== value),
        };
      }
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    const errors = validateStep1();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateStep2();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      try {
        const response = await fetch(`${API_URL}/users/createUser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const resData = await response.json();
        if (resData.success) {
          alert(resData.message);
          handleClearData();
        } else {
          alert(resData.message);
        }
      } catch (err) {
        console.log(err.message);
        alert(err.message);
      }
    }
  };

  const validateStep1 = () => {
    const errors = {};
    const phoneLengthRules = {
      India: 10,
      USA: 10,
      UK: 10,
      Australia: 9,
    };
    const requiredLength = phoneLengthRules[formData.country] || 10;

    if (!formData.username || formData.username.length < 8 || formData.username.length > 25) {
      errors.username = "Username must be 8 to 25 characters";
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      errors.email = "Invalid email format (email should contain the '@' and '.')";
    }

    if (
      !formData.password.match(/^[A-Z]/) ||
      formData.password.length < 8 ||
      formData.password.length > 12 ||
      !formData.password.match(/[@#]/)
    ) {
      errors.password =
        "Password must start with a capital letter, be 8–12 characters long, and contain '@' or '#'";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match (Re-enter the password)";
    }

    if (!formData.phone || formData.phone.length !== requiredLength) {
      errors.phone = `Phone number must be ${requiredLength} digits`;
    }

    return errors;
  };

  const validateStep2 = () => {
    const errors = {};

    if (!formData.gender) {
      errors.gender = "Gender is required";
    }

    if (!formData.hobbies || formData.hobbies.length < 2) {
      errors.hobbies = "Select at least 2 hobbies";
    }

    if (!formData.country) {
      errors.country = "Country is required";
    }

    if (!formData.state) {
      errors.state = "State is required";
    }

    if (formData.captchaInput.trim() !== formData.captchaCode.trim()) {
      errors.captcha = "CAPTCHA does not match";
    }

    return errors;
  };

  return (
    <div className="su-main">
      <div className="su-left">
        <img src="/assets/Login.gif" alt="Signup animation" className="signup-gif" />
      </div>

      <div className="su-right">
        <div className="su-wrap">
          <h1 className="su-title">Create Account</h1>

          <form className="su-form" onSubmit={step === 2 ? handleSubmit : handleNext}>
            {step === 1 && (
              <>
                <div className="su-box">
                  <label className="su-label">Username</label>
                  <input
                    className="su-input"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                  {formErrors.username && <p className="msg-para">{formErrors.username}</p>}
                </div>

                <div className="su-box">
                  <label className="su-label">Email</label>
                  <input
                    className="su-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                  {formErrors.email && <p className="msg-para">{formErrors.email}</p>}
                </div>

                <div className="su-box">
                  <label className="su-label">Phone</label>
                  <div className="su-phone">
                    <select
                      className="su-code"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+61">+61</option>
                    </select>
                    <input
                      className="su-input su-phone-field"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                    />
                  </div>
                  {formErrors.phone && <p className="msg-para">{formErrors.phone}</p>}
                </div>

                <div className="su-box">
                  <label className="su-label">Password</label>
                  <input
                    className="su-input"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create password"
                  />
                  {formErrors.password && <p className="msg-para">{formErrors.password}</p>}
                </div>

                <div className="su-box">
                  <label className="su-label">Confirm Password</label>
                  <input
                    className="su-input"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                  />
                  {formErrors.confirmPassword && (
                    <p className="msg-para">{formErrors.confirmPassword}</p>
                  )}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="su-box">
                  <label className="su-label">Gender</label>
                  <div className="inner-su-box">
                    {["male", "female", "other"].map((g) => (
                      <label className="inner-su-label" key={g}>
                        <input
                          type="radio"
                          name="gender"
                          value={g}
                          checked={formData.gender === g}
                          onChange={handleChange}
                        />
                        {g.charAt(0).toUpperCase() + g.slice(1)}
                      </label>
                    ))}
                  </div>
                  {formErrors.gender && <p className="msg-para">{formErrors.gender}</p>}
                </div>

                <div className="su-box">
                  <label className="su-label">Hobbies</label>
                  <div className="hob-su-box">
                    {["Cricket", "Music", "Reading", "Traveling"].map((hobby) => (
                      <label className="inner-hob-lab" key={hobby}>
                        <input
                          type="checkbox"
                          name="hobbies"
                          value={hobby}
                          checked={formData.hobbies.includes(hobby)}
                          onChange={handleCheckboxChange}
                        />
                        {hobby}
                      </label>
                    ))}
                  </div>
                  {formErrors.hobbies && <p className="msg-para">{formErrors.hobbies}</p>}
                </div>

                <div className="su-box">
                  <label className="su-label">Country</label>
                  <select
                    className="su-input"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option value="">Select your country</option>
                    {Object.keys(countryData).map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  {formErrors.country && <p className="msg-para">{formErrors.country}</p>}
                </div>

                <div className="su-box">
                  <label className="su-label">State</label>
                  <select
                    className="su-input"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    disabled={!states.length}
                  >
                    <option value="">Select your state</option>
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  {formErrors.state && <p className="msg-para">{formErrors.state}</p>}
                </div>

                <div className="su-box">
                  <label className="su-label">Comments</label>
                  <textarea
                    name="comment"
                    className="com-inner-su-label"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Enter your comments here"
                  ></textarea>
                </div>

                <div className="su-box">
                  <label className="su-label">CAPTCHA</label>
                  <div className="capt-code">
                    <div className="capt-text">{formData.captchaCode}</div>
                    <button type="button" className="capt-refresh" onClick={generateCaptcha}>
                      Refresh
                    </button>
                  </div>
                  <input
                    className="su-input"
                    type="text"
                    name="captchaInput"
                    value={formData.captchaInput}
                    onChange={handleChange}
                    placeholder="Enter the above code"
                  />
                  {formErrors.captcha && <p className="msg-para">{formErrors.captcha}</p>}
                </div>

                <button type="button" className="su-btn back-btn" onClick={handleBack}>
                  Back
                </button>
              </>
            )}

            <p className="su-reset" onClick={handleClearData}>
              Reset
            </p>

            <button className="su-btn" type="submit">
              {step === 1 ? "Next" : "Submit"}
            </button>

            <p className="su-login-text">
              Already registered? <Link className="su-login-link" to="/">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
