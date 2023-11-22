import { ID } from "appwrite";
import { account, database, url } from "./config";
export async function createUserAccount(id, email, password, name) {
    try {
        const newAccount = await account.create(
            id,
            email,
            password,
            name
        )
        return newAccount
    } catch (error) {
        console.log('something went wrong in creating account', error)
    }
}
export async function loginUserAccoutn(email, password) {
    try {
        const newAccount = await account.createEmailSession(
            email,
            password,
        )
        return newAccount
    } catch (error) {
        console.log('something went wrong in login', error)
    }
}

export async function logoutUserAccount() {
    try {
        const newAccount = await account.deleteSession('current')
        return newAccount
    } catch (error) {
        console.log('something went wrong in logout')
    }

}

export async function getCurrentUser() {
    try {
        const user = await account.get()
        return user
    } catch (error) {
        console.log('account not found')
    }
}

export async function saveOrderToDB(formData){
    try {
        const res = await database.createDocument(
            url.db,url.collection,ID.unique(),
            formData
        )
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

export async function showDB(){
    try {
        const res = await database.listDocuments(
            url.db,url.collection,
        )
        return res
    } catch (error) {
        console.log(error);
    }
}

export async function showRequest(id){
    try {
        const res = await database.getDocument(
            url.db,url.collection,id
        )
        return res
    } catch (error) {
        console.log(error);
    }
}