import React from 'react';

function MyPosts() {
  return (
    <div className='myposts'>
      <h3 className='vivod'>Всего найдено в базе: 260188</h3>
      <section className='left'>
        <div className='header-view__main-layout'>
          <div className='header-view__form-layout'>
            <p className='adds poisk poisk2'>Добавьте местоположение, но вначале войдите при помощи соцсетей</p>
            <p className='poisk'>Искать:</p>
            <form method='get'>
              <label className='poisk1'>Фамилия, Имя, года жизни, кладбище</label>
              <input type='text' name='name2' id='name2' autoComplete='off'/>
                <ul className='dropdown-menu'>
                  <li data-value='1561287441'>
                    <a href='#'>
                      <img src='https://wikirip.site/image/cache/no_image-40x40.png' className='no_image'  />
                        Корейчук Елена Яковлевна, 1923, 2008, Комсомольское кладбище</a>
                  </li> 
                 </ul> 
                  <input className='poisksubmit' type='submit' name='search3' value='Искать' />  
            </form>
          </div>  
        </div>  
       </section>
    </div>
          );
        }
        
export default MyPosts;