import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm"; 
//import Placemark from "./Placemark";  

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }  

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    );
  }

  return ( 
    <div className='descriptionBlocks'>
      <div className={s.descriptionBlock}>
        <img src={profile.photos || userPhoto} className={s.mainPhoto} />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}

        {editMode
          ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
          : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div> 
    </div>
  )
}
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
 
  return <div className='mainDetail'>
    {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
    <div className='mainDetailname'>
      {profile.fullName}
    </div>
    <div className='mainDetailgps'>
      Местоположение GPS может быть приблизительным до 10 метров:
            {profile.mpn}
           
            
    </div>
  </div>
}


const Contact = ({ contactTitle, contactValue }) => {
  //   return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}


export default ProfileInfo;