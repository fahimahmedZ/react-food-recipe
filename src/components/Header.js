import React from 'react'

const Header = (props) => {
    const {search,onInputChange,onSearchClick} = props;
    return (
    <div className="jumbotron">
        <h1 className="display-1"><span class="material-icons brand-icon">
        fastfood</span> Food Recipes
        </h1>   
        <div className="input-group w-50 mx-auto">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Search Your Recipes..." 
                value={search}
                onChange={onInputChange}
                
            />
            <div className="input-group-append">
                <button onClick={onSearchClick} className="btn btn-dark">Search Recipes</button>
            </div>
        </div>     
    </div>
    )
}

export default Header;
