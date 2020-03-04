import React from 'react';

const SearchArea =(props)=>{
    let {query, cuisine, diet, excludes,type} = props;
    return(<div className="container">
        <div className="row">
            <div className="col">
                <form action="" onSubmit={props.handleSubmit}>
                   
                   <div className="input-field">
                   <div className="form-group">
                    <input  placeholder="Search recipe" className="form-control" id="query" type="text" value={query}name="query" required onChange={props.handleChange}/>
                    </div>
                    <div className="form-group">
                       <input placeholder="cuisine" className="form-control"  type="text" value={cuisine} name="cuisine" onChange={props.handleChange}/>
                     </div>
                     <div className="form-group">  
                       <input placeholder="diet" className="form-control"  type="text" value={diet} name="diet" onChange={props.handleChange}/>
                    </div>  
                    <div className="form-group"> 
                    <input placeholder="excludes" className="form-control "  type="text" value={excludes} name="excludes" onChange={props.handleChange}/>
                    </div>
                       <div className="input-field col s12">
                        <select onChange={props.handleChange} mame="type" value={type} id="type" className="form-control browser-default" >
                        <option value="" disabled >all</option>
                        <option value="main course">main course</option>
                        <option value="side dish">side dish</option>
                        <option value="dessert">dessert</option>
                        <option value="appetizer">appetizer</option>
                        <option value="salad">salad</option>
                        <option value="bread">bread</option>
                        <option value="breakfast">breakfast</option>
                        <option value="soup">soup</option>
                        <option value="beverage">beverage</option>
                        <option value="sauce">sauce</option>
                        <option value="drink">drink</option>
                        </select>
                        
                    </div>
                   </div>
                   <button className="btn waves-effect waves-light" type="submit" name="action">Search
                        
                    </button>
                </form>
            </div>
        </div>
    </div>);
}

export default SearchArea;