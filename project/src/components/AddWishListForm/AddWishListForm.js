import { useDispatch, useSelector } from 'react-redux';
import {addListWishAC, fetchGetWishListAC, getWishListAC, getWishListUpdateAC} from "../../redux/actionCreators";
import {useEffect, useState, useContext} from "react";
import React from "react";

function AddWishListForm({indepCount, setIndepCount})  {


    const [inputText, setInputText] = useState(null)
    const gifts = 'aaaa'
      const dispatchAdd = useDispatch()
    const addWishList = (e) => {
        e.preventDefault()
        // dispatchAdd(addListWishAC(inputText))
        // const {name: {value: name}} = e.target;
        fetch('/wishlists', {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json',
            },
            body: JSON.stringify({inputText: inputText, gifts: gifts})
        })
            .then(res => res.json())
setIndepCount(indepCount => indepCount+1)
        console.log(indepCount)





            // .then(fetchGetWishListAC())
            // .then(notePad => dispatch(addNotepadAC([notePad]))
            // ).catch(err => alert(err));



    }

    return (

<>
                <form onSubmit={addWishList}>
            < input type="text"
                name="wishListName"
                placeholder="Введите название нового листа желаний"
                onChange={(e) => setInputText(e.target.value)}
                    required/>
                <button type = "submit" >add</button>

                </form>
</>

            )
            }
            export default AddWishListForm
