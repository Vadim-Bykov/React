import { FormValuesType } from "../components/Profile/ProfileInfo/ProfileInfo";

export type postType = {
   id: number
   message: string
   likesCount: number | null
 }
 
export type contactsType = {
   [github: string]: string
   vk: string
   facebook: string
   instagram: string
   twitter: string
   website: string
   youtube: string
   mainLink: string
};
 
export type photosType = {
   small: string | null
   large: string | null
};
 
export type profileType = {
   userId: number
   lookingForAJob: boolean
   lookingForAJobDescription: string
   fullName: string
   contacts: contactsType
   photos: photosType
   aboutMe: string
   initialValues?: Partial<FormValuesType>
};

export type userType = {
   id: number
   name: string
   status: string
   photos: photosType
   followed: boolean
 };
 