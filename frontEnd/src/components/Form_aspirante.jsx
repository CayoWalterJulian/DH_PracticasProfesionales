import React from 'react'

const Form_aspirante = () => {
  return (
    <form>
      <div>
        <label>DNI</label>
        <input type="text" name="dni" />
      </div>
      <div>
        <label>Name</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label>Lastname</label>
        <input type="text" name="lastname" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <div>
        <label>Phone</label>
        <input type="text" name="phone" />
      </div>
      <div>
        <label>LinkedIn</label>
        <input type="text" name="linkedin" />
      </div>
      <div>
        <label>Birthdate</label>
        <input type="date" name="birthdate" />
      </div>
      <div>
        <label>Gender</label>
        <input type="text" name="gender" />
      </div>
      <div>
        <label>Image</label>
        <input type="file" name="image" />
      </div>
      <div>
        <label>Study Level</label>
        <select name="study_level">
          <option value="">Select</option>
          <option value="high_school">High School</option>
          <option value="bachelor">Bachelor</option>
          <option value="master">Master</option>
          <option value="phd">PhD</option>
        </select>
      </div>
      <div>
        <label>CV</label>
        <input type="file" name="cv" accept="application/pdf" />
      </div>
      <div>
        <label>Time Availability</label>
        <select name="time_availability">
          <option value="">Select</option>
          <option value="full_time">Full Time</option>
          <option value="part_time">Part Time</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form_aspirante;