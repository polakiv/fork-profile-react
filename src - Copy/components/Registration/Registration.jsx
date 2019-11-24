import React from 'react'; 
//import Login from './Login/Login';
//$.import_js('/path_to_project/scripts/somefunctions.js');
const Registration = () => {

    
// debugger;
 //   let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    return (
        <div className="Registration">
            <h3>Зарегистрируйтесь</h3> 
            <div className="ulogi">
                <div className="ulogin_form">
                 <div data-ulogin="display=small;fields=first_name,last_name,email;optional=phone,city,country,nickname,sex,photo_big,bdate,photo;providers=vkontakte,odnoklassniki,mailru,facebook;hidden=other;redirect_uri=https%3A%2F%2Fwikirip.site%2Findex.php%3Froute%3Dmodule%2Fulogin%2Flogin%26backurl%3Dcommon%2Fhome;callback=uloginCallback"></div>
                </div>  
            <div>
                <div>
                    <input />
                 </div>
                <div>
                    <button>Добавить себя</button>
                </div>
            </div>
            <div className="posts">
              
            </div> 
        </div>
        </div>
    )
}

export default Registration;