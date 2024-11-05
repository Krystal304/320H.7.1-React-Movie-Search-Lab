import { useState, useEffect } from 'react'

function Form(props) {
  const [formData, setFormData] = useState({
    searchterm: "",
  });
  
  //handlechange
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    props.moviesearch(formData.searchterm);
  };
  return (
   <div>
    <form onSubmit={handleSubmit}>
      <input type="text" 
      name="searchterm"
       onChange={handleChange} 
       value={formData.searchterm}
      />
      <input type="submit" value="submit" />
    </form>
    </div>
  )
}

export default Form